const aSound = document.getElementById("sound-a");
const bSound = document.getElementById("sound-b");
const cSound = document.getElementById("sound-c");
const dSound = document.getElementById("sound-d");
const eSound = document.getElementById("sound-e");
const fSound = document.getElementById("sound-f");
const gSound = document.getElementById("sound-g");
const hSound = document.getElementById("sound-h");
const iSound = document.getElementById("sound-i");
const jSound = document.getElementById("sound-j");
const kSound = document.getElementById("sound-k");
const lSound = document.getElementById("sound-l");
const mSound = document.getElementById("sound-m");
const nSound = document.getElementById("sound-n");
const oSound = document.getElementById("sound-o");
const pSound = document.getElementById("sound-p");
const qSound = document.getElementById("sound-q");
const rSound = document.getElementById("sound-r");
const sSound = document.getElementById("sound-s");
const tSound = document.getElementById("sound-t");
const uSound = document.getElementById("sound-u");
const vSound = document.getElementById("sound-v");
const wSound = document.getElementById("sound-w");
const xSound = document.getElementById("sound-x");
const ySound = document.getElementById("sound-y");
const zSound = document.getElementById("sound-z");
const winSound = document.getElementById("sound-win");
const loseSound = document.getElementById("sound-lose");
const trashSound = document.getElementById("sound-trash");
const gotwordSound = document.getElementById("sound-gotword");
const gameOverSound = document.getElementById("sound-gameover");

const rockZombie = document.querySelector(".rock-attack");
const boyIdle = document.querySelector(".boy-idle");


const letterA = document.getElementById("a");
const letterB = document.getElementById("b");
const letterC = document.getElementById("c");
const letterD = document.getElementById("d");
const letterE = document.getElementById("e");
const letterF = document.getElementById("f");
const letterG = document.getElementById("g");
const letterH = document.getElementById("h");
const letterI = document.getElementById("i");
const letterJ = document.getElementById("j");
const letterK = document.getElementById("k");
const letterL = document.getElementById("l");
const letterM = document.getElementById("m");
const letterN = document.getElementById("n");
const letterO = document.getElementById("o");
const letterP = document.getElementById("p");
const letterQ = document.getElementById("q");
const letterR = document.getElementById("r");
const letterS = document.getElementById("s");
const letterT = document.getElementById("t");
const letterU = document.getElementById("u");
const letterV = document.getElementById("v");
const letterW = document.getElementById("w");
const letterX = document.getElementById("x");
const letterY = document.getElementById("y");
const letterZ = document.getElementById("z");

const textBox = document.getElementById("word");
const letter = document.querySelectorAll(".letter");
const wordAdd = document.getElementById("add-word");
const wordRemove = document.getElementById("remove-word");
const state = document.getElementById("status-button");
const mainWord = document.querySelector(".main-word");
const clearWordList = document.getElementById("clear-list");
const letterGrid = document.querySelector(".letter-grid");
let gameOn;
let formatedMystWord;
let mystWord;
let displayMystWords = false;
let displayNoWords = false;
let guessedWord = false;
const wordList = {};
let matchesFound = {};
let missingLetters = {};
let letterMatch = false;
let stepsZombie = 0;
let dead = false;
let gameOver = false;
let displayGameOver = false;

const backgroundImages = ["url('media/level1_background.png')", "url('media/level2_background.png')", "url('media/level3_background.png')", "url('media/level4_background.png')"];

//Set a random background
document.body.style.backgroundImage = shuffle(backgroundImages)[0];

// FUNCTIONS --------------------------------------------------------

const letterSounds = function(){
    letterA.addEventListener("click", ()=>{
        if ((!letterA.classList.contains("hidden") && !gameOn) || (gameOn && displayNoWords)){
            aSound.play();
        }
    })
    letterB.addEventListener("click", ()=>{
        if ((!letterB.classList.contains("hidden") && !gameOn) || (gameOn && displayNoWords)){
            bSound.play();
        }
    })
    letterC.addEventListener("click", ()=>{
        if ((!letterC.classList.contains("hidden") && !gameOn) || (gameOn && displayNoWords)){
            cSound.play();
        }
    })
    letterD.addEventListener("click", ()=>{
        if ((!letterD.classList.contains("hidden") && !gameOn) || (gameOn && displayNoWords)){
            dSound.play();
        }
    })
    letterE.addEventListener("click", ()=>{
        if ((!letterE.classList.contains("hidden") && !gameOn) || (gameOn && displayNoWords)){
            eSound.play();
        }
    })
    letterF.addEventListener("click", ()=>{
        if ((!letterF.classList.contains("hidden") && !gameOn) || (gameOn && displayNoWords)){
            fSound.play();
        }
    })
    letterG.addEventListener("click", ()=>{
        if ((!letterG.classList.contains("hidden") && !gameOn) || (gameOn && displayNoWords)){
            gSound.play();
        }
    })
    letterH.addEventListener("click", ()=>{
        if ((!letterH.classList.contains("hidden") && !gameOn)|| (gameOn && displayNoWords)){
            hSound.play();
        }
    })
    letterI.addEventListener("click", ()=>{
        if ((!letterI.classList.contains("hidden") && !gameOn) || (gameOn && displayNoWords)){
            iSound.play();
        }
    })
    letterJ.addEventListener("click", ()=>{
        if ((!letterJ.classList.contains("hidden") && !gameOn) || (gameOn && displayNoWords)){
            jSound.play();
        }
    })
    letterK.addEventListener("click", ()=>{
        if ((!letterK.classList.contains("hidden") && !gameOn) || (gameOn && displayNoWords)){
            kSound.play();
        }
    })
    letterL.addEventListener("click", ()=>{
        if ((!letterL.classList.contains("hidden") && !gameOn) || (gameOn && displayNoWords)){
            lSound.play();
        }
    })
    letterM.addEventListener("click", ()=>{
        if ((!letterM.classList.contains("hidden") && !gameOn) || (gameOn && displayNoWords)){
            mSound.play();
        }
    })
    letterN.addEventListener("click", ()=>{
        if ((!letterN.classList.contains("hidden") && !gameOn) || (gameOn && displayNoWords)){
            nSound.play();
        }
    })
    letterO.addEventListener("click", ()=>{
        if ((!letterO.classList.contains("hidden") && !gameOn) || (gameOn && displayNoWords)){
            oSound.play();
        }
    })
    letterP.addEventListener("click", ()=>{
        if ((!letterP.classList.contains("hidden") && !gameOn) || (gameOn && displayNoWords)){
            pSound.play();
        }
    })
    letterQ.addEventListener("click", ()=>{
        if ((!letterQ.classList.contains("hidden") && !gameOn) || (gameOn && displayNoWords)){
            qSound.play();
        }
    })
    letterR.addEventListener("click", ()=>{
        if ((!letterR.classList.contains("hidden") && !gameOn) || (gameOn && displayNoWords)){
            rSound.play();
        }
    })
    letterS.addEventListener("click", ()=>{
        if ((!letterS.classList.contains("hidden") && !gameOn) || (gameOn && displayNoWords)){
            sSound.play();
        }
    })
    letterT.addEventListener("click", ()=>{
        if ((!letterT.classList.contains("hidden") && !gameOn) || (gameOn && displayNoWords)){
            tSound.play();
        }
    })
    letterU.addEventListener("click", ()=>{
        if ((!letterU.classList.contains("hidden") && !gameOn) || (gameOn && displayNoWords)){
            uSound.play();
        }
    })
    letterV.addEventListener("click", ()=>{
        if ((!letterV.classList.contains("hidden") && !gameOn) || (gameOn && displayNoWords)){
            vSound.play();
        }
    })
    letterW.addEventListener("click", ()=>{
        if ((!letterW.classList.contains("hidden") && !gameOn) || (gameOn && displayNoWords)){
            wSound.play();
        }
    })
    letterX.addEventListener("click", ()=>{
        if ((!letterX.classList.contains("hidden") && !gameOn) || (gameOn && displayNoWords)){
            xSound.play();
        }
    })
    letterY.addEventListener("click", ()=>{
        if ((!letterY.classList.contains("hidden") && !gameOn) || (gameOn && displayNoWords)){
            ySound.play();
        }
    })
    letterZ.addEventListener("click", ()=>{
        if ((!letterZ.classList.contains("hidden") && !gameOn) || (gameOn && displayNoWords)){
            zSound.play();
        }
    })
    
}


// Function for shuffling the wordList array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

//Function for selecting the amount of blank spaces in the word from the wordList
const formatedWord = function(word){
    let n;
    if (word.length === 2){
        n = 1;
    }
    if (word.length === 3){
        n = Math.floor(Math.random()*1)+1;
    }
    if (word.length > 3 && word.length <= 5){
        n = Math.floor(Math.random()*2)+1;
    }
    if (word.length > 5){
        n = Math.floor(Math.random()*3)+1;
    }
    const removingLetters = word.shuffle().slice(0, n);
    for (const i of removingLetters){
        word = word.replace(i, "-");
    }
    return word;
}

String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}


const retrieveMystWord = function(){
    const lenOfwordList = Object.keys(wordList).length;
    const randomIndex = Math.floor(Math.random()*lenOfwordList);
    return wordList[randomIndex];
}

const resetWord = function(){
    missingLetters = {};
    matchesFound = {};
    letterMatch = false;
    guessedWord = false;
    clearTimeout(zombieMove);
    clearTimeout(boyMove);
    for (const i of document.querySelectorAll(".letter")){
        i.classList.remove("hidden");
    };
    
}

const redrawMystWord = function(updatedWord){
    const mystWordImgs = document.querySelectorAll(".myst-words");
    for (const j of mystWordImgs){
        j.remove();
    }
    for (let i of updatedWord){
        let x = document.createElement("img")
        if (i === "-"){
            x.src = "media/question.png"
        }else{
            x.src = `media/${i}.png`;
        }
        x.classList.add("myst-words")
        x.style.width = "71px";
        x.style.height = "71px";
        mainWord.append(x)
    }

}

const rockZombieAnimate = function(){
    z = 1;
        zombieMove = setInterval(()=>{
        rockZombie.src = `media/rock_zombie/Attack${z}.png`;
        z++;
        if (z > 6){
            z = 1;
        }
        }, 200);
}
const boyAnimate = function(){
    a = 1;
        boyMove = setInterval(()=>{
        boyIdle.src = `media/island_boy/Idle/${a}.png`;
        a++;
        if (a > 3){
            a = 1;
        }
        }, 200);
}

const boyDeath = function(){
    // boyIdle.src = "media/island_boy/faint/4.png";
    b = 1;
    if (!dead){
        boyDead = setInterval(()=>{
            boyIdle.src = `media/island_boy/faint/${b}.png`;
            b++;
            if (b > 4){
                clearInterval(boyDead);
            }
        }, 200)
        dead = true;
        gameOverSound.play();
    }
    gameOver = true;
    const mystWordImgs = document.querySelectorAll(".myst-words");
            for (const j of mystWordImgs){
                j.remove();
            }
    displayMystWords = false;
    const noWordImgs = document.querySelectorAll(".no-words");
    for (const j of noWordImgs){
        j.remove();
    }
    displayNoWords = false;
    let dispWord = "gameover";
    dispWord = dispWord.toUpperCase();
    for (let i of dispWord){
        let x = document.createElement("img")
        x.src = `media/${i}.png`;
        x.classList.add("game-over")
        x.style.width = "71px";
        x.style.height = "71px";
        mainWord.append(x)
    }
    displayGameOver = true;

}

const resetGame = function(){
    rockZombie.style.marginLeft = "0px";
    boyIdle.src = "media/island_boy/Idle/1.png"
    boyIdle.style.margin = "none";
    displayMystWords = false;
}


// EVENTS --------------------------------------------------------

document.addEventListener("keypress", (e)=>{
    if (e.key === "Enter"){
        if (textBox.value){
            let containsWord = false;
            let word = textBox.value;
            word = word.toUpperCase();
            if (Object.keys(wordList).length > 0){
                for (const i of Object.values(wordList)){
                    if (i[0] === word){
                        containsWord = true;
                        break;
                    }
                }
                if (!containsWord){
                    wordList[Object.keys(wordList).length] = [word, formatedWord(word)]
                }
            }else{
                wordList[0] = [word, formatedWord(word)];
            }
            textBox.value = "";
        }
    }
})

wordAdd.addEventListener("click", ()=>{
    let containsWord = false;
    let word = textBox.value;
    word = word.toUpperCase();
    if (Object.keys(wordList).length > 0){
        for (const i of Object.values(wordList)){
            if (i[0] === word){
                containsWord = true;
                break;
            }
        }
        if (!containsWord){
            wordList[Object.keys(wordList).length] = [word, formatedWord(word)]
        }
    }else{
        wordList[0] = [word, formatedWord(word)];
    }
    textBox.value = "";
})

wordRemove.addEventListener("click", ()=>{
    let word = textBox.value;
    word = word.toUpperCase();
    for (const j of Object.keys(wordList)){
        if (wordList[j][0] === word){
            delete wordList[j];
            break;
        }
    }
    textBox.value = "";
})

clearWordList.addEventListener("click", ()=>{
    for (const j of Object.keys(wordList)){
        delete wordList[j];
    }
    trashSound.play();
})

state.addEventListener('click', ()=>{
    if (state.getAttribute("src") === "media/play.png"){
        state.setAttribute("src", "media/stop.png"); 
        gameOn = true;
        if (gameOver){
            resetGame();
            stepsZombie = 0;
            dead = false;
            gameOver = false;
        };
        rockZombieAnimate();
        if (!dead){
            boyAnimate();
        };
        document.body.style.backgroundImage = shuffle(backgroundImages)[0];
        displayMystWords = false;
        if (displayGameOver){
            const gameOverImgs = document.querySelectorAll(".game-over");
            for (const n of gameOverImgs){
                n.remove();
            }
            displayGameOver = false;
        }
        if (Object.keys(wordList).length > 0){
            formatedMystWord = retrieveMystWord();
            if (displayNoWords){
                const noWordImgs = document.querySelectorAll(".no-words");
                for (const j of noWordImgs){
                    j.remove();
                }
                displayNoWords = false;
            }
            if (!displayMystWords){
                mystWord = formatedMystWord[1];
                for (let i of mystWord){
                    let x = document.createElement("img")
                    if (i === "-"){
                        x.src = "media/question.png"
                    }else{
                        x.src = `media/${i}.png`;
                    }
                    x.classList.add("myst-words")
                    x.style.width = "71px";
                    x.style.height = "71px";
                    mainWord.append(x)
                }
                displayMystWords = true;
            }
            if (displayMystWords){
                // determine the missing letters of the word
                for (let i=0; i<formatedMystWord[1].length; i++){
                    if (formatedMystWord[1][i] === "-"){
                        missingLetters[i] = formatedMystWord[0][i];
                    }
                }
                // Check the result
                for (let j of letter){
                    j.addEventListener("click", (e)=>{
                        let letterMatch = false;
                        for (let i of Object.keys(missingLetters)){
                            if (e.target.id.toUpperCase() === missingLetters[i]){
                                matchesFound[i] = missingLetters[i];
                                letterMatch = true;
                                // document.getElementById(`${j.id}`).classList.add("hidden");
                            }
                        }
                        if (gameOn && !displayNoWords){
                            let updatedWord = formatedMystWord[1];
                            document.getElementById(`${j.id}`).classList.add("hidden");
                            if (letterMatch){
                                winSound.play();
                                let charArray = [];
                                for (const i of formatedMystWord[1]){
                                    charArray.push(i);
                                }
                                updatedWord = charArray.map((i, ind)=>{
                                    if (i === "-" && Object.keys(matchesFound).includes(`${ind}`)){
                                        return matchesFound[ind];
                                    }else{
                                        return i;
                                    }
                                }).join("")
                                redrawMystWord(updatedWord);
                            }
                            else{
                                loseSound.play();
                                if (Number((getComputedStyle(rockZombie).marginLeft).slice(0, -2)) > window.innerWidth - 350){
                                    boyIdle.style.marginLeft = "-200px";
                                    clearInterval(boyMove)
                                    if (!dead){
                                        boyDeath();
                                    }
                                }else{
                                    stepsZombie += 60;
                                    rockZombie.style.marginLeft = `${stepsZombie}px`;
                                }                                
                            }
                            if (!updatedWord.includes("-") && !guessedWord){
                                guessedWord = true;
                                gotwordSound.play();
                                console.log("YOU WIN!")
                            }
                        }
                    })
                }

            }
        }
        else if (Object.keys(wordList).length < 1){
            if (displayGameOver){
                const gameOverImgs = document.querySelectorAll(".game-over");
                for (const n of gameOverImgs){
                    n.remove();
                }
                displayGameOver = false;
            }
            if (!displayNoWords){
                if(displayMystWords){
                    const mystWordImgs = document.querySelectorAll(".myst-words");
                    for (const j of mystWordImgs){
                        j.remove();
                    }
                displayMystWords = false;
                }
                let dispWord = "No Words";
                dispWord = dispWord.toUpperCase();
                for (let i of dispWord){
                    let x = document.createElement("img")
                    if (i === " "){
                        x.src = "media/question.png"
                    }else{
                        x.src = `media/${i}.png`;
                    }
                    x.classList.add("no-words")
                    x.style.width = "71px";
                    x.style.height = "71px";
                    mainWord.append(x)
                }
                displayNoWords = true;
            }
        }
    }else if (state.getAttribute("src") === "media/stop.png"){
        gameOn = false;
        state.setAttribute("src", "media/play.png"); 
        resetWord();
        if(displayMystWords){
            const mystWordImgs = document.querySelectorAll(".myst-words");
            for (const j of mystWordImgs){
                j.remove();
            }
        displayMystWords = false;
        }
        if (displayNoWords){
            const noWordImgs = document.querySelectorAll(".no-words");
            for (const j of noWordImgs){
                j.remove();
            }
            displayNoWords = false;
        }
    }
})



// initiate the general output when a letter a pressed

letterSounds();




/*
format of the object
wordList = {0: ["hi", "h-"], 1: ["hello", "-ell-"]};
*/