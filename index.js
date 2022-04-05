const $stoneButton1 = document.querySelector(".button-stone-player-1");
const $paperButton1 = document.querySelector(".button-paper-player-1");
const $scissorsButton1 = document.querySelector(".button-scissors-player-1");

const $stoneButton2 = document.querySelector(".button-stone-player-2");
const $paperButton2 = document.querySelector(".button-paper-player-2");
const $scissorsButton2 = document.querySelector(".button-scissors-player-2");

const $fieldPlayer1 = document.querySelector(".field-player-1");
const $fieldPlayer2 = document.querySelector(".field-player-2");

$stoneButton1.addEventListener("click", function () {
  $fieldPlayer1.innerHTML = '<img src="./Assets/stone.png" class="move-image">';
});

$paperButton1.addEventListener("click", function () {
  $fieldPlayer1.innerHTML = '<img src="./Assets/paper.png" class="move-image">';
});

$scissorsButton1.addEventListener("click", function () {
  $fieldPlayer1.innerHTML =
    '<img src="./Assets/scissors.png" class="move-image">';
});

$stoneButton2.addEventListener("click", function () {
    $fieldPlayer2.innerHTML = '<img src="./Assets/stone.png" class="move-image">';
  });
  
  $paperButton2.addEventListener("click", function () {
    $fieldPlayer2.innerHTML = '<img src="./Assets/paper.png" class="move-image">';
  });
  
  $scissorsButton2.addEventListener("click", function () {
    $fieldPlayer2.innerHTML =
      '<img src="./Assets/scissors.png" class="move-image">';
  });