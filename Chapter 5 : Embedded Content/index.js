var sounds = {};

window.onload = function() {
    sounds.ahHa = new Audio("ah-ha.mp3");
    sounds.backOfTheNet = new Audio("back-of-the-net.mp3");
    sounds.bangOutOfOrder = new Audio("bangoutoforder.mp3");
    sounds.dan = new Audio("dan.mp3");
    sounds.emailOfTheEvening = new Audio("emailoftheevening.mp3");
    sounds.helloPartridge = new Audio("hellopartridge.mp3");
    sounds.iAteScotchEgg = new Audio("iatescotchegg.mp3");
    sounds.imConfused = new Audio("imconfused.mp3");
};

function playAhHa() {
    sounds.ahHa.play();
}

function playbackofthenet() {
    sounds.backOfTheNet.play();
}

function playbangoutoforder() {
    sounds.bangOutOfOrder.play();
}

function playdan() {
    sounds.dan.play();
}

function playemailoftheevening() {
    sounds.emailOfTheEvening.play();
}

function playhellopartrige() {
    sounds.helloPartridge.play();
}

function playiatescotchegg() {
    sounds.iAteScotchEgg.play();
}

function playimconfused() {
    sounds.imConfused.play();
}