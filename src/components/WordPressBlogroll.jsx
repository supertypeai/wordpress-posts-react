import React from "react";

const WordPressBlogroll = ({ feed }) => {
  return feed.map((post) => (
    <div style={{ marginBottom: "2rem" }} key={post.id}>
      <h4
        className="text-sm font-semibold"
        style={{ fontWeight: 600, fontSize: "0.875rem", lineHeight: "1.25rem" }}
      >
        <a
          href={post.link}
          target="_blank"
          rel="noreferrer noopener"
          className="link"
        >
          <h4 style={{ fontSize: "0.875rem", lineHeight: "1rem" }}>
            {post.title}
          </h4>
        </a>
      </h4>
      <p className="text-xs">{post.date}</p>
      <p style={{ fontSize: "0.875rem", lineHeight: "1.25rem" }}>
        {post.excerpt}
      </p>
    </div>
  ));
};

export default WordPressBlogroll;
