let display = document.getElementById('display')
let historyRows = document.getElementsByClassName('historyrows');
let equals_btn = document.getElementById('equals_btn')
let historyStore = document.getElementById('historyStore')
let NewP
//Print calculation
let string = ""
var calculation

let allbutton = document.querySelectorAll('.button')

Array.from(allbutton).forEach((allbutton) => {
    allbutton.addEventListener('click', (e) => {

        if (e.target.innerHTML == "=") {
            string = eval(string)
            display.value = string
        }
        else if (e.target.innerHTML == "AC") {
            string = ""
            display.value = string
            historyStore.innerHTML = `<u>HISTORY:-</u>`
        }
        else if (e.target.innerHTML == "C") {
            string = ""
            display.value = string
        }
        else {
            string = string + e.target.innerHTML
            display.value = string
            calculation = `${string} = ${eval(string)}`;
        }
        return e.target.innerHTML
    })
})

equals_btn.addEventListener('click', () => {
    NewP = document.createElement('p')
    NewP.innerHTML = `${calculation}`
    historyStore.appendChild(NewP)
})
