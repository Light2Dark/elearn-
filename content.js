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

    logo.setAttribute("src", "https://i.postimg.cc/Fs3ktsTr/tigerlogo.png")
    logo.setAttribute("width", "50px")
    logo.setAttribute("height", "50px")

    if (window.innerWidth <= 768) {
        logo.setAttribute("width", "20px")
        logo.setAttribute("height", "20px")
    }
    // logo.style.cssText += "@media screen and (max-width: 768px) {width: 11px !important;} }"

    div.appendChild(logo)

    mainHeading.parentNode.replaceChild(div, mainHeading)
}

async function changeiFrame() {
    await sleep(5000)
    console.log("changing iframe!")

    const newsItemsLink = document.getElementsByClassName("js-title-link")

    for (itemLink of newsItemsLink) {
        itemLink.addEventListener("click", (tab) => {
                        
            // insert iframe css
            // chrome.scripting.executeScript({
            //     target: {tabID: tab.id},
            //     files: ["themes/courses.css"]
            // })
            changeElems()
        })
    }
    
    
}

async function changeElems() {
    await sleep(5000)
    const breadcrumbs = document.getElementById("breadcrumbs")
    console.log(breadcrumbs)
    breadcrumbs.style.backgroundColor="black"
}

// running change code
changeHeading()
// changeiFrame()

// reset css priority

function setToBlack(items) {
    for (let i = 0; i < items.length; i++) {
        items[i].style.backgroundColor = "black !important"
    }
}

async function changeNav() {
    await sleep(5000)
    let navMenu = document.getElementById("menuWrap")
    let paletteContent = document.querySelectorAll(".isUltra #courseMenuPalette div.navPaletteContent")
    let links = document.querySelectorAll(".isUltra div.navPaletteContent ul li a")
    let span = document.querySelectorAll(".isUltra #courseMenuPalette div.navPaletteContent ul li a span")

    setToBlack(paletteContent)
    setToBlack(links)
    setToBlack(span)

    if (navMenu) {
        navMenu.style.backgroundColor="black !important"
    }
}

changeNav()


// function changeTheme() {
//     chrome.scripting.executeScript(
//         {
//             files: ["./themes/darkMode.css"]
//         }
//     )
// }

