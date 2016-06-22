var clicks = 0;
var firstchoice;
var secondchoice;
var match = 0;
var roundNumber = 1;
var backcard = "Images/tile.png";

var faces = [];
faces[0]  = 'Images/green.png';
faces[1]  = 'Images/red.png';
faces[2]  = 'Images/blue.png';
faces[3]  = 'Images/orange.png';
faces[4]  = 'Images/black.png';
faces[5]  = 'Images/red.png';
faces[6]  = 'Images/violet.png';
faces[7]  = 'Images/yellow.png';
faces[8]  = 'Images/dark_blue.png';
faces[9]  = 'Images/black.png';
faces[10] = 'Images/violet.png';
faces[11] = 'Images/dark_blue.png';
faces[12] = 'Images/green.png';
faces[13] = 'Images/blue.png';
faces[14] = 'Images/yellow.png';
faces[15] = 'Images/orange.png';

function choose(card) {
    if (clicks == 2) {
        return;
    }
    if (clicks == 0) {
        firstchoice = card;
        document.images[card].src = faces[card];
        clicks = 1;
    } 
    if (card == firstchoice) {
        return;
    } else {
        clicks = 2;
        secondchoice = card;
        document.images[card].src = faces[card];
        timer = setInterval("check()", 1000);
    }
}

function check() {
    clearInterval(timer);
    clicks = 0;
    if (faces[secondchoice] == faces[firstchoice]) {
        match++;
        document.getElementById("matches").innerHTML = match;
        document.images[firstchoice].style.display ='none'
        document.images[secondchoice].style.display ='none'
        if (match == 8) {
            document.getElementById("winner").innerHTML = 
            "Congratulations, you have opened all the tiles !!!";
        }
    } else {
        document.images[firstchoice].src = backcard;
        document.images[secondchoice].src = backcard;
        roundNumber++;
        document.getElementById("round").innerHTML = roundNumber;
        return;
    }
}