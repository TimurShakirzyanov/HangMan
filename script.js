import { ruswords } from "./words.js"
let usedLetters = document.getElementById("usedLetters")
let letters = ""
let input = document.getElementById("input")
let title = document.getElementById("title")
let button = document.getElementById("button")
let hangman = document.getElementById("hangman") 
let words = ["Floppa","Supercalifragilisticexpialidocious","breakfast","taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"]
words = ruswords
let newButton = document.getElementById("newButton")
let modal = document.getElementsByClassName("modal")[0]
let settings = document.getElementById("setting")
let windows = document.getElementById("windows")

console.log(words[1][21]);
let secretWord = words[Math.floor(Math.random()*words.length)]
let clicker = 0
let imgNumber = 0
let shifr = document.getElementById("p")
shifr.innerHTML = "_".repeat(secretWord.length)
button.onclick = function (event) {
    if(!letters.includes(input.value)){
        letters = letters + input.value
    }          
    console.log(letters);
    
    usedLetters.innerHTML = "Использованые буквы: " + letters
    // Чтобы не обновлялась страница
    event.preventDefault();
    // Это буква из инпута
    console.log(input.value)
    title.innerHTML = 'Шлёпа'
    if (secretWord.includes(input.value)) {
        let newShifr = ""
        for (let i = 0; i < secretWord.length; i = i + 1) {
            console.log(secretWord[i]);
            if (secretWord[i] == input.value) {
                newShifr = newShifr + input.value
            }
            else {
                newShifr = newShifr + shifr.innerHTML[i]
            }
        }
         if (shifr.innerHTML == secretWord){
            title.innerHTML = 'ПОБЕДА'
         }
        console.log(newShifr);
        shifr.innerHTML = newShifr
    }
    else {
        console.log(hangman.src);
        imgNumber = imgNumber + 1
        hangman.src = "hangman"+imgNumber+".png"
        if(imgNumber == 6){
            title.innerHTML = 'ШЛЁПА ВАС СЪЕЛ ЛОЛ!!! ПРОИГРЫШ. СЕКРЕТНОЕ СЛОВО БЫЛО: ' + secretWord
            button.disabled = true 
        }
    }
}
// for(let i = 100; i>70; i=i-10){
//     console.log(i);
// }
// for(let i = 4; i<9; i=i+1){
//     console.log(i);
// }
for (let i = 0; i < 15; i = i + 1) {
    console.log(100 - 10 * i % 30);
}
let newButtom = document.getElementById("newButton")
newButtom.onclick = function (event){
    clicker = clicker + 1
    console.log(clicker)
    event.preventDefault();
    title.innerHTML = 'Виселица | Шлёпа-ковбой хочет тебя повесить, отгадай слово чтобы выжить!'
    hangman.src = "hangman0" + ".png"
    imgNumber = 0
    secretWord = words[Math.floor(Math.random()*words.length)]
    shifr.innerHTML =  "_".repeat(secretWord.length)
    usedLetters.innerHTML = "Вводи букву и нажимай проверить"
    letters = ""
}
let hangmanMenu = document.getElementById("hangman")
hangmanMenu.onclick = function (event){
clicker = clicker + 1
console.log(clicker)
event.preventDefault();
}
setInterval(function(){
    if(Math.floor(Math.random()*50)==49 && imgNumber < 6){
        console.log("floppa");    
        hangman.src = "floppa.gif" 
        imgNumber = imgNumber + 1
    }
},1000)
hangman.onclick = function (){
    hangman.src = "hangman" + imgNumber + ".png"
}
modal.onclick = function (){
    modal.style.transform = "translateY(-100%)"
}
settings.onclick = function(event){
    event.preventDefault();
    modal.style.transform = "translateY(0%)"
    setTimeout(function(){
        // console.log("Шлёпа")
windows.style.display = "block"
        },5000)
}
