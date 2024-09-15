chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        const newUrl = details.url.replace("osu.ppy.sh", "wysi727.com");
        return { redirectUrl: newUrl };
    },
    { urls: ["*://osu.ppy.sh/*"] },
    ["blocking"]
);
