chrome.contextMenus.create({
    "id": "ufThisTab",
    "title": "Open frame in this tab",
    "contexts": ["frame"]
});

chrome.contextMenus.create({
    "id": "ufNewTab",
    "title": "Open frame in new tab",
    "contexts": ["frame"]
});

chrome.contextMenus.create({
    "id": "ufNewWin",
    "title": "Open frame in new window",
    "contexts": ["frame"]
});

chrome.contextMenus.create({
    "id": "ufIncWin",
    "title": "Open frame in incognito window",
    "contexts": ["frame"]
});

chrome.contextMenus.onClicked.addListener(function(src, tab) {
    switch (src.menuItemId) {
        case 'ufThisTab':
            chrome.tabs.update(tab.id, {url: getURL(src)});
            break;
        case 'ufNewTab':
            chrome.tabs.create({url: getURL(src)});
            break;
        case 'ufNewWin':
            chrome.windows.create({url: getURL(src)});
            break;
        case 'ufIncWin':
            chrome.windows.create({url: getURL(src), incognito: true});
            break;
        default:
            console.log(src);
            console.log(tab);
            break;
    }
});

function getURL(src) {
    return src.frameUrl || src.pageUrl
}