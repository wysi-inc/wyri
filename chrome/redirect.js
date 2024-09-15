const from_url = "https://osu.ppy.sh";
const to_url = "https://wysi727.com";

const unsupported_routes = [
    "/rankings/osu/country",
    "/rankings/takio/country",
    "/rankings/fruits/country",
    "/rankings/mania/country",
    "/rankings/daily-challenge",
    "/rankings/osu/charts",
    "/rankings/takio/charts",
    "/rankings/fruits/charts",
    "/rankings/mania/charts",
    "/rankings/kudosu",
    "/beatmaps/artists",
    "/beatmaps/packs"
];

const supported_routes = [
    "/rankings",
    "/users",
    "/beatmapsets",
    "/beatmaps",
];

function isValid(url) {
    for (const route of unsupported_routes) {
        if (url.includes(route)) return false;
    }
    for (const route of supported_routes) {
        if (url.includes(route)) return true;
    }
    return false;
}

function redirect(req) {
    const url = req.url;

    if (!isValid(url)) return;

    const new_url = url.replace(from_url, to_url);
    return { redirectUrl: new_url };
}

chrome.webRequest.onBeforeRequest.addListener(
    redirect,
    { urls: ["*://osu.ppy.sh/*"] },
    ["blocking"]
);
