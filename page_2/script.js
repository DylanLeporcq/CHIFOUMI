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
    playerchoice.style.backgroundImage = "url(../assets/img/bulbasaur_left.png)";
    votes.style.display='none';
    next.style.display='block';
    scores.style.visibility='hidden';
    {
        if (x === 1) {
            choicebot.style.backgroundImage = "url(../assets/img/bulbasaur_right.png)";
            resultp1.innerHTML='Aucun effet sur le Bulbizarre ennemi, vous avez fait une égalité. Clickez sur "Manche suivante" !';
        } else if (x === 2) {
            choicebot.style.backgroundImage = "url(../assets/img/charmander_right.png)";
            resultp1.innerHTML='Ce n`est pas très efficace, vous avez perdu cette manche ! Clickez sur "Manche suivante" !';
            scoreJ2 = scoreJ2+1;
            botPT.innerHTML = scoreJ2;
        } else if (x === 3) {
            choicebot.style.backgroundImage = "url(../assets/img/squirtle_right.png)";
            resultp1.innerHTML='C`est super efficace, vous avez gagné cette manche ! Clickez sur "Manche suivante" !';
            scoreJ1 = scoreJ1+1;
            playerPT.innerHTML = scoreJ1;
        }
    }
}

function clickP() {
    playerchoice.style.backgroundImage="url(../assets/img/charmander_left.png)";
    votes.style.display='none';
    next.style.display='block';
    scores.style.visibility='hidden';
    {
        if (x === 1) {
            choicebot.style.backgroundImage = "url(../assets/img/bulbasaur_right.png)";
            resultp1.innerHTML='C`est super efficace, vous avez gagné cette manche ! Clickez sur "Manche suivante" !';
            scoreJ1 = scoreJ1+1;
            playerPT.innerHTML = scoreJ1;
        } else if (x === 2) {
            choicebot.style.backgroundImage = "url(../assets/img/charmander_right.png)";
            resultp1.innerHTML='Aucun effet sur le Salameche ennemi, vous avez fait une égalité. Clickez sur "Manche suivante" !';
        } else if (x === 3) {
            choicebot.style.backgroundImage = "url(../assets/img/squirtle_right.png)";
            resultp1.innerHTML='Ce n`est pas très efficace, vous avez perdu cette manche ! Clickez sur "Manche suivante" !';
            scoreJ2 = scoreJ2+1;
            botPT.innerHTML = scoreJ2;
        }
    }
}


function clickS() {
    playerchoice.style.backgroundImage="url(../assets/img/squirtle_left.png)";
    votes.style.display='none';
    next.style.display='block';
    scores.style.visibility='hidden';
    {
        if (x === 1) {
            choicebot.style.backgroundImage = "url(../assets/img/bulbasaur_right.png)";
            resultp1.innerHTML='Ce n`est pas très efficace, vous avez perdu cette manche ! Clickez sur "Manche suivante" !';
            scoreJ2 = scoreJ2+1;
            botPT.innerHTML = scoreJ2;
        } else if (x === 2) {
            choicebot.style.backgroundImage = "url(../assets/img/charmander_right.png)";
            resultp1.innerHTML='C`est super efficace, vous avez gagné cette manche ! Clickez sur "Manche suivante" !';
        } else if (x === 3) {
            scoreJ1 = scoreJ1+1;
            playerPT.innerHTML = scoreJ1;
            choicebot.style.backgroundImage = "url(../assets/img/squirtle_right.png)";
            resultp1.innerHTML='Aucun effet sur le Carapuce ennemi, vous avez fait une égalité. Clickez sur "Manche suivante" !';
        }
    }
}


function nextClick() {
    votes.style.display='block';
    next.style.display='none';
    scores.style.visibility='visible';
    resultp1.innerHTML='Choisissez Bulbizarre, Salameche ou Carapuce !';
    playerchoice.style.backgroundImage="none";
    choicebot.style.backgroundImage = "none";
    randomise();
    console.log(randomise());
}

function ericChoice() {
    intro.style.display='none';
    all.style.display='block';
    picBot.style.backgroundImage = "url(../assets/img/cartmanHead.jpg)";
    ia.innerHTML='Cartman :' + ' ';
    choicebot.style.backgroundColor="#6CCEF0";
}

function bartChoice() {
    intro.style.display='none';
    all.style.display='block';
    picBot.style.backgroundImage = "url(../assets/img/bartHead.gif)";
    ia.innerHTML='Bart :' + ' ';
    choicebot.style.backgroundColor="#f0db10";

}

function rickChoice() {
    intro.style.display='none';
    all.style.display='block';
    picBot.style.backgroundImage = "url(../assets/img/rickHead.png)";
    ia.innerHTML='Rick 637 :' + ' ';
    choicebot.style.backgroundColor="#32f04c";

}

function clickPlayer() {
    egg.style.display='inline-block'
}

function clickE() {
    playerchoice.style.backgroundImage="url(../assets/img/magikarp.png)";
    votes.style.display='none';
    music.play();
    next.style.display='block';
    scores.style.visibility='hidden';
    picPlayer.style.backgroundImage = "url(../assets/img/original_thug.jpg)";
    {
        if (x === 1) {
            choicebot.style.backgroundImage = "url(../assets/img/bulbasaur_right.png)";
            resultp1.innerHTML='Magicarpe utilise déflagration, vous avez gagné cette manche ! Clickez sur "Manche suivante" !';
            scoreJ1 = scoreJ1+1;
            playerPT.innerHTML = scoreJ1;
        } else if (x === 2) {
            choicebot.style.backgroundImage = "url(../assets/img/charmander_right.png)";
            resultp1.innerHTML='Magicarpe utilise hydrocanon, vous avez gagné cette manche ! Clickez sur "Manche suivante" !';
            scoreJ1 = scoreJ1+1;
            playerPT.innerHTML = scoreJ1;
        } else if (x === 3) {
            choicebot.style.backgroundImage = "url(../assets/img/squirtle_right.png)";
            resultp1.innerHTML='Magicarpe utilise Fatal-Foudre, vous avez gagné cette manche ! Clickez sur "Manche suivante" !';
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