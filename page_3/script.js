let playerchoice = document.getElementById('player_game');
let choicebot = document.getElementById('bot_game');
let votes = document.getElementById('vote');
let playerPT = document.getElementById('player_pt');
let botPT = document.getElementById('bot_pt');
let next = document.getElementById('next');
let scores = document.getElementById('scores');
let resultp1 = document.getElementById('endofpart');
let intro = document.getElementById('intro');
let all = document.getElementById('all');
let picBot = document.getElementById('pic_bot');
let ia = document.getElementById('ia');
let picPlayer = document.getElementById('pic_player');
let egg = document.getElementById('egg');
let music = document.getElementById('music');

scoreJ1 = 0;
playerPT.innerHTML=scoreJ1;
scoreJ2 = 0;
botPT.innerHTML=scoreJ2;

function randomise () {
    return x = 1+Math.floor(Math.random()*3);
}


function clickR() {
    playerchoice.style.backgroundImage = "url(../assets/img/rockLeft.png)";
    votes.style.display='none';
    next.style.display='block';
    scores.style.visibility='hidden';
    {
        if (x === 1) {
            choicebot.style.backgroundImage = "url(../assets/img/rockRight.png)";
            resultp1.innerHTML='bah ya execo la, pas de poin pas de chocola. clic sur "manche suivante" !';
        } else if (x === 2) {
            choicebot.style.backgroundImage = "url(../assets/img/paperRight.png)";
            resultp1.innerHTML='le caillou se fait ecrase par la feuille, ta perdu. clic sur "manche suivante" !';
            scoreJ2 = scoreJ2+1;
            botPT.innerHTML = scoreJ2;
        } else if (x === 3) {
            choicebot.style.backgroundImage = "url(../assets/img/scissorsRight.png)";
            resultp1.innerHTML='le caillou tue le cizo, ta gagne. clic sur "manche suivante" !';
            scoreJ1 = scoreJ1+1;
            playerPT.innerHTML = scoreJ1;
        }
    }
}

function clickP() {
    playerchoice.style.backgroundImage="url(../assets/img/paperLeft.png)";
    votes.style.display='none';
    next.style.display='block';
    scores.style.visibility='hidden';
    {
        if (x === 1) {
            choicebot.style.backgroundImage = "url(../assets/img/rockRight.png)";
            resultp1.innerHTML='la feuille tue le rocher je crois, un poin. clic sur "manche suivante" !';
            scoreJ1 = scoreJ1+1;
            playerPT.innerHTML = scoreJ1;
        } else if (x === 2) {
            choicebot.style.backgroundImage = "url(../assets/img/paperRight.png)";
            resultp1.innerHTML='bah ya execo la, pas de poin pas de chocola. clic sur "manche suivante" !';
        } else if (x === 3) {
            choicebot.style.backgroundImage = "url(../assets/img/scissorsRight.png)";
            resultp1.innerHTML='la feuill se fait couper par le cizo, perdu. clic sur "manche suivante" !';
            scoreJ2 = scoreJ2+1;
            botPT.innerHTML = scoreJ2;
        }
    }
}


function clickS() {
    playerchoice.style.backgroundImage="url(../assets/img/scissorsLeft.png)";
    votes.style.display='none';
    next.style.display='block';
    scores.style.visibility='hidden';
    {
        if (x === 1) {
            choicebot.style.backgroundImage = "url(../assets/img/rockRight.png)";
            resultp1.innerHTML='les cizo son tue par le caillou, perdu. clic sur "manche suivante" !';
            scoreJ2 = scoreJ2+1;
            botPT.innerHTML = scoreJ2;
        } else if (x === 2) {
            choicebot.style.backgroundImage = "url(../assets/img/paperRight.png)";
            resultp1.innerHTML='le cizo coupe la feuille, un poin pour toi coco. clic sur "manche suivante" !';
        } else if (x === 3) {
            scoreJ1 = scoreJ1+1;
            playerPT.innerHTML = scoreJ1;
            choicebot.style.backgroundImage = "url(../assets/img/scissorsRight.png)";
            resultp1.innerHTML='bah ya execo la, pas de poin pas de chocola. clic sur "manche suivante" !';
        }
    }
}


function nextClick() {
    votes.style.display='block';
    next.style.display='none';
    scores.style.visibility='visible';
    resultp1.innerHTML='choisi caillou feuille ou cizo';
    playerchoice.style.backgroundImage="none";
    choicebot.style.backgroundImage = "none";
    randomise();
    console.log(randomise());
}

function ericChoice() {
    intro.style.display='none';
    all.style.display='block';
    picBot.style.backgroundImage = "url(../assets/img/cartmanHead.jpg)";
    ia.innerHTML='le gro :' + ' ';
    choicebot.style.backgroundColor="#6CCEF0";
}

function bartChoice() {
    intro.style.display='none';
    all.style.display='block';
    picBot.style.backgroundImage = "url(../assets/img/bartHead.gif)";
    ia.innerHTML='fiss à omère :' + ' ';
    choicebot.style.backgroundColor="#f0db10";

}

function rickChoice() {
    intro.style.display='none';
    all.style.display='block';
    picBot.style.backgroundImage = "url(../assets/img/rickHead.png)";
    ia.innerHTML='vieu :' + ' ';
    choicebot.style.backgroundColor="#32f04c";

}

function clickPlayer() {
    egg.style.display='inline-block'
}

function clickE() {
    playerchoice.style.backgroundImage="url(../assets/img/cyriak.png)";
    votes.style.display='none';
    music.play();
    next.style.display='block';
    scores.style.visibility='hidden';
    picPlayer.style.backgroundImage = "url(../assets/img/original_thug.jpg)";
    {
        if (x === 1) {
            choicebot.style.backgroundImage = "url(../assets/img/rockLeft.png)";
            resultp1.innerHTML='Cyriak nique la game, vous avez gagné cette manche ! Clickez sur "Manche suivante" !';
            scoreJ1 = scoreJ1+1;
            playerPT.innerHTML = scoreJ1;
        } else if (x === 2) {
            choicebot.style.backgroundImage = "url(../assets/img/paperLeft.png)";
            resultp1.innerHTML='Cyriak pose ses couilles, vous avez gagné cette manche ! Clickez sur "Manche suivante" !';
            scoreJ1 = scoreJ1+1;
            playerPT.innerHTML = scoreJ1;
        } else if (x === 3) {
            choicebot.style.backgroundImage = "url(../assets/img/scissorsLeft.png)";
            resultp1.innerHTML='Cyriak puissance max, vous avez gagné cette manche ! Clickez sur "Manche suivante" !';
            scoreJ1 = scoreJ1+1;
            playerPT.innerHTML = scoreJ1;
        }
    }
}

function clickSettings() {
    document.getElementById('base').style.visibility='visible';
    document.getElementById('ball').style.visibility='visible';
    document.getElementById('close').style.visibility='visible';
    document.getElementById('cyriak').style.visibility='visible';
}

function disabledInterface() {
    document.getElementById('base').style.visibility='hidden';
    document.getElementById('ball').style.visibility='hidden';
    document.getElementById('close').style.visibility='hidden';
    document.getElementById('cyriak').style.visibility='hidden';
}


randomise();

// TEST RANDOM //

console.log(randomise());