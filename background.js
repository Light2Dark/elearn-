chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.get("theme", ({ theme }) => {
        console.log("current theme is", theme)
    });
});

// keep's browser alive every 2 mins
let tab = chrome.tabs.query({url: "https://elearn.sunway.edu.my/*"})
console.log(tab)
function keepMeAlive() {
    setInterval(() => {
        console.log("keeep meeee allivee")
    }, 120000)
}