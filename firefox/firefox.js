const url = window.location.href;
const from_url = "https://osu.ppy.sh";
const to_url = "https://wysi727.com";
const new_url = url.replace(from_url, to_url);
const supported_routes = [
    "",
    "/rankings",
    "/users",
    "/beatmapsets",
    "/beatmaps"
];
window.location.replace(new_url);
