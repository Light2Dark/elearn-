let selectMenu = document.getElementById("theme")

selectMenu.addEventListener("change", async () => {
    let theme = selectMenu.value
    chrome.storage.sync.set({theme})
    console.log("new theme set " + theme)

    let [tab] = await chrome.tabs.query({url: "https://elearn.sunway.edu.my/*"})
    chrome.tabs.reload(tabID=tab.id)
})