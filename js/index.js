console.log("index.js imported")

const nowHours = (new Date()).getHours()

const avaliablePositions = [
    "Engenheiro de Software",
    "Desenvolvedor Fullstack",
    "Desenvolvedor Backend",
    "Desenvolvedor Frontend",
    "Mestre de RPG",
    "Dev Freelancer"
]

let positionIndex = 1

let greetingElement = document.querySelector("#greeting")
let positionsElement = document.querySelector("#positions")

function setGreentingText() {
    let greetingMessage = "Olá"

    if ((nowHours >= 0 && nowHours <= 6) || (nowHours > 18 && nowHours <= 23)) {
        greetingMessage = "Boa noite!"
    } else if (nowHours > 6 && nowHours <= 12) {
        greetingMessage = "Bom dia!"
    } else if (nowHours > 12 && nowHours <= 18) {
        greetingMessage = "Boa tarde!"
    }

    greetingElement.textContent = greetingMessage
}


async function transitionPosition() {
    await sleep(2000)

    for (let i = positionsElement.textContent.length; i >= 0; i--) {
        await sleep(100)
        positionsElement.textContent = positionsElement.textContent.slice(0, i)
    }

    let nextPosition = avaliablePositions[positionIndex]


    for (let i = 0; i < nextPosition.length; i++) {
        await sleep(100)
        positionsElement.textContent += nextPosition.charAt(i)
    }

    positionIndex++

    if (positionIndex == avaliablePositions.length) {
        positionIndex = 0
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

setGreentingText()

transitionPosition()

setInterval(transitionPosition, 7000)