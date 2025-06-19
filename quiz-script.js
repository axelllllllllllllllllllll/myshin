function startButton() {
  location.assign("question-one.html");
}

const wrongAnswerWindow = document.getElementById("wrong-answer-section");

const rightAnswerWindow = document.getElementById("right-answer-section");

// wrongAnswerWindow.style.display = "none";

function closeBtn() {
  wrongAnswerWindow.style.display = "none";
  overlay.style.display = "none";
}

function wrongAnswer() {
  wrongAnswerWindow.style.display = "flex";
  overlay.style.display = "flex";
}

function rightAnswerOne() {
  location.assign("question-two.html");
}

function rightAnswerTwo() {
  location.assign("question-three.html");
}

function rightAnswerThree() {
  location.assign("question-four.html");
}

function rightAnswerFour() {
  location.assign("last-question.html");
}

function rightAnswerFive() {
  location.assign("verification-done.html");
}

function goToWeb() {
  location.assign("home.html");
}

const overlay = document.getElementById("overlay");
overlay.style.display = "none";

window.onload = function () {
  const pageloader = document.getElementById("page-loader");

  setTimeout(() => {
    pageloader.classList.add("hide");

    setTimeout(() => {
      pageloader.style.display = "none";
      console.log("Page loader hidden after 3 seconds");
    }, 500);
  }, 1500);
};
