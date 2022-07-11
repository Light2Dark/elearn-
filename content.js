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
    console.log("Errorrrrr", error)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function changeHeading() {
    await sleep(5000)
    console.log("changing heading!")
    let mainHeading = document.getElementById("main-heading")
    
    const logo = document.createElement("img")
    const div = document.createElement("div")
    div.style.width = "100%"
    // logo.setAttribute("src", "https://i.ibb.co/jvGb7fM/tigerlogo.png")
    logo.setAttribute("src", "https://i.postimg.cc/Fs3ktsTr/tigerlogo.png")
    logo.setAttribute("width", "50px")
    logo.setAttribute("height", "50px")
    div.appendChild(logo)

    mainHeading.parentNode.replaceChild(div, mainHeading)
}

changeHeading()