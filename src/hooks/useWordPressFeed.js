import { useEffect, useState } from "react";
import { timeAgo, parseUrlString, decodeHtml } from "../utils"

export default function useWordPressFeed(
    site_url,
    author_id,
    number_of_posts = 10
) {
    const [feed, setFeed] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchFeed(site_url, author_id, number_of_posts) {
            if (!site_url) {
                return Promise.reject("site_url is required");
            }

            const url =
                `${site_url}/wp-json/wp/v2/posts?per_page=${number_of_posts}` +
                (author_id ? `&author=${author_id}` : "");

            await fetch(url)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        let error = new Error(
                            "Error " + response.status + ": " + response.statusText
                        );
                        error.response = response;
                        throw error;
                    }
                })
                .then((posts) => {
                    return posts.map((post) => {
                        return {
                            id: post.id,
                            title: decodeHtml(post.title.rendered),
                            // processed link: https:\/\/supertype.ai\/p\/samuel\/ -> https://supertype.ai/p/samuel/
                            link: parseUrlString(post.link),
                            slug: post.slug,
                            date: timeAgo(new Date(post.date).getTime()),
                            excerpt: decodeHtml(post.excerpt.rendered),
                            content: post.content.rendered,
                        };
                    });
                })
                .then((posts) => {
                    setFeed(posts);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(
                        "Your posts could not be fetched from the specified address.\nError: " +
                        error.message
                    );
                });
        }

        fetchFeed(site_url, author_id, number_of_posts);
    }, [site_url, author_id, number_of_posts]);

    return { feed, loading };
}
