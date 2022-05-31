chrome.storage.sync.get("theme", ({ theme }) => {
    console.log("theme is", theme)
});

console.log(chrome.tabs.Tab)

let selectMenu = document.getElementById("theme")
selectMenu.addEventListener("change", async () => {
    console.log(chrome.tabs.Tab)
})