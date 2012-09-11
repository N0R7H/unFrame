chrome.contextMenus.create({
    "title": "Open frame in this tab",
    "contexts": ["frame"],
    "onclick": function(src, tab) {
        chrome.tabs.update(tab.id, {url: getURL(src)});
    }
});

chrome.contextMenus.create({
    "title": "Open frame in new tab",
    "contexts": ["frame"],
    "onclick": function(src) {
        chrome.tabs.create({url: getURL(src)});
    }
});

chrome.contextMenus.create({
    "title": "Open frame in new window",
    "contexts": ["frame"],
    "onclick": function(src) {
        chrome.windows.create({url: getURL(src)});
    }
});

chrome.contextMenus.create({
    "title": "Open frame in incognito window",
    "contexts": ["frame"],
    "onclick": function(src) {
        chrome.windows.create({url: getURL(src), incognito: true});
    }
});

function getURL(src) {
    return src.frameUrl || src.pageUrl
}