// Spell Champ Kids v3

function openQuiz() {
    window.location.href = "quiz.html";
}

function comingSoon(name) {
    alert(name + " Module Coming Soon!");
}

document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".menu button");

    if (buttons.length >= 5) {

        buttons[0].onclick = openQuiz;

        buttons[1].onclick = () => comingSoon("Learn");

        buttons[2].onclick = () => comingSoon("Practice");

        buttons[3].onclick = () => comingSoon("Progress");

        buttons[4].onclick = () => comingSoon("Settings");
    }

});
