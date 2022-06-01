try {
    let currentTheme
    chrome.storage.sync.get("theme", ({ theme }) => {
        currentTheme = theme
        console.log("current theme:", theme)
    });

    console.log(chrome)

    // chrome.scripting.executeScript(
    //     {
    //         files: ["./themes/darkMode.css"]
    //     }
    // )

} catch(error) {
    console.log("Error", error)
}
