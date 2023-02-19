const input = document.querySelector("input");
input.focus();
let restart = document.querySelector(".again")
let score = 20;
let highScore = 0;
let audio = new Audio("win.mp3")
let loser = new Audio("loser.mp3")
let secretNumber = Math.trunc(Math.random() * 20 + 1);

console.log(secretNumber);

restart.addEventListener("click" , () => {
    document.querySelector(".number").textContent = "?"
    document.body.style.background = "#222"
    document.querySelector(".message").textContent = "O'yinni boshlang...!"
    document.querySelector("h1").textContent = "Sonni toping!"
    input.removeAttribute("disabled" , true)
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector(".check").style.display = "inline-block"
    document.querySelector(".score").textContent = "20"
    score = 20
    console.log(secretNumber);

})


function messageFunc(message) {
  document.querySelector(".message").textContent = message;
}

function gameOver() {
  input.setAttribute("disabled", true);
  document.querySelector(".number").textContent = secretNumber
  document.querySelector("h1").textContent = "Loser!,Loser!,Loser!"
  document.querySelector(".check").style.display = "none";
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let inputVal = Number(input.value);

  if (!inputVal) {
    messageFunc("Raqam kiriting...?");
  } else if (inputVal === secretNumber) {
    messageFunc("Tabriklayman meni sonimni topdingiz!!!🎉");
    audio.play()
    document.body.style.background = "green";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("h1").textContent = "Tabriklayman!!!🤩";
    gameOver();

    if (highScore < score) {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (inputVal !== secretNumber) {
    if (score > 1) {
      messageFunc(
        secretNumber < inputVal
          ? "Mening raqamim kichik...!"
          : "Mening raqamim katta...!"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      loser.play()
      document.body.style.background = "#911"
      messageFunc("Siz yutqazdingiz..!");
      document.querySelector(".score").textContent = 0;
      gameOver();
    }
  }
  input.value = "";
});