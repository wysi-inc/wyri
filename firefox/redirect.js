let isEnabled = true;

browser.browserAction.onClicked.addListener(function() {
    isEnabled = !isEnabled;
    updateIcon();
});

function updateIcon() {
    const iconPath = isEnabled ? 'icons/icon-32.ico' : 'icons/icon-disabled-32.ico';
    browser.browserAction.setIcon({ path: iconPath });
}

browser.webRequest.onBeforeRequest.addListener(
    redirect,
    {
        urls: [
            "http://osu.ppy.sh/*",
            "https://osu.ppy.sh/*"
        ]
    },
    ["blocking"]
);

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
    "/scores"
];

function isValid(url) {

    // if (url === from_url) return true;
    // if (url === `${from_url}/`) return true;

    for (route of unsupported_routes) {
        if (url.includes(route)) return false;
    }

    for (route of supported_routes) {
        if (url.includes(route)) return true;
    }

    return false;

}

function redirect(req) {

    alert("i exist");

    if (!isEnabled) return;

    const url = req.url;

    if (!isValid(url)) return;

    const new_url = url.replace(from_url, to_url);
    return { redirectUrl: new_url };

}
