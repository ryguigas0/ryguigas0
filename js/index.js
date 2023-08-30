console.log("index.js imported")

// Greeting message

const nowHours = (new Date()).getHours()
let greetingElement = document.querySelector("#greeting")

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

// Shifting job positions

let jobPositions = [
    "Engenheiro de Software",
    "Desenvolvedor Fullstack",
    "Desenvolvedor Backend",
    "Desenvolvedor Frontend",
    "Mestre de RPG",
    "Dev Freelancer"
]
let jobPositionIndex = 1
let letterIndex = jobPositions[0].length - 1 // starting erasing index
let positionsElement = document.querySelector("#positions")
let mode = 2 // 0 -> erase, 1 -> write, 2 -> wait
let wait = 0
let modeFunction = [
    function () {
        // erasing
        if (!positionsElement.textContent.length)
            mode = 1
        else {
            positionsElement.textContent = positionsElement.textContent.slice(0, letterIndex)
            letterIndex--
        }
    },
    function () {
        // writing
        let writePostion = jobPositions[jobPositionIndex]
        if (writePostion.length > positionsElement.textContent.length) {
            positionsElement.textContent += writePostion.charAt(letterIndex)
            letterIndex++
        } else {
            mode = 2
            if (jobPositionIndex == jobPositions.length - 1) {
                jobPositionIndex = 0
            } else {
                jobPositionIndex++
            }
            letterIndex = jobPositions[jobPositionIndex].length - 1
        }
    },
    function () {
        // wating
        if (wait === 30) {
            mode = 0
            wait = 0
        } else
            wait++
    }
]

function updateJobPosition() {
    let currModeFuncion = modeFunction[mode]

    currModeFuncion()
}

// Startup
setGreentingText()

setInterval(updateJobPosition, 100)