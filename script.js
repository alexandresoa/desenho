const pencilButton = document.getElementById('pencil')
const eraserButton = document.getElementById('eraser')
const squareButton = document.getElementById('quadrado')
const scissorsButton = document.getElementById('scissors')
const buttons = document.querySelectorAll('i')


console.log(pencil, eraser, quadrado, scissors)

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.toggle('active')
    })
})