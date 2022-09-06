let selectMenu = document.getElementById("theme")

selectMenu.addEventListener("change", async () => {
    let theme = selectMenu.value
    chrome.storage.sync.set({theme})
    console.log("new theme set " + theme)

    let [tab] = await chrome.tabs.query({url: "https://elearn.sunway.edu.my/*"})
    chrome.tabs.reload(tabID=tab.id)
})

let downloadButton = document.getElementById("downloadButton")

// When the button is clicked, download all links in the current tab
downloadButton.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: downloadAllFiles,
    });
  });
  
//   The body of this function will be executed as a content script inside the
//   current page
  function downloadAllFiles() {
    alert("hello")
  }