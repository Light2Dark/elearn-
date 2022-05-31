let theme = "darktheme.css"

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ theme });
    console.log("background process runnning")
});