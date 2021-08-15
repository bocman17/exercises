// document.getElementById('counter').innerText = 5

let count = 0
let sum = 0
let output = document.getElementById('count-el')

let saveOutput = document.getElementById('save-el')

let increment = document.getElementById('increment-btn').addEventListener('click', function() {
    count++
    sum++
    output.innerText = count
})

let saveNumber = []

let save = document.getElementById('save-btn').addEventListener('click', function() {
    let saveValue = count + ' - '
    saveOutput.innerHTML += saveValue
    count = 0
    output.innerText = 0

    
})


let totalOutput = document.getElementById('total-el')
let totalNumber = document.getElementById('total-btn').addEventListener('click', function() {
    
    totalOutput.innerHTML = sum
})





