export const timeAgo = (date) => {
    const diff = Number(new Date()) - date;
    const minute = 60 * 1000;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = day * 30;
    const year = day * 365;
    switch (true) {
        case diff < minute:
            return 'just now';
        case diff < hour:
            return `${Math.floor(diff / minute)} minutes ago`;
        case diff < day:
            return `${Math.floor(diff / hour)} hours ago`;
        case diff < 2 * week:
            return Math.round(diff / day) + ' days ago';
        case diff < 3 * month:
            return Math.round(diff / week) + ' weeks ago';
        case diff < 2 * year:
            return Math.round(diff / month) + ' months ago';
        case diff > 2 * year:
            return Math.round(diff / year) + ' years ago';
        default:
            return ""
    }
}

export const parseUrlString = (url) => {
    return url.replace(/\\/g, '')
}

export const decodeHtml = (html) => {
    let txt = document.createElement("textarea");
    txt.innerHTML = html;
    // remove html tags like <p> etc
    txt.value = txt.value.replace(/<\/?[^>]+(>|$)/g, "");
    return txt.value;
}