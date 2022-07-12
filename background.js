chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.get("theme", ({ theme }) => {
        console.log("current theme is", theme)
    });
});
