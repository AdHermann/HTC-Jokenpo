const $stoneButton = document.querySelector(".button-stone-player-1");
const $paperButton = document.querySelector(".button-paper-player-1");
const $scissorsButton = document.querySelector(".button-scissors-player-1");

const $fieldPlayer1 = document.querySelector(".field-player-1");

$stoneButton.addEventListener("click", function () {
  $fieldPlayer1.innerHTML = '<img src="./Assets/stone.png" class="move-image">';
});

$paperButton.addEventListener("click", function () {
    $fieldPlayer1.innerHTML = '<img src="./Assets/paper.png" class="move-image">';
  });

  $scissorsButton.addEventListener("click", function () {
    $fieldPlayer1.innerHTML = '<img src="./Assets/scissors.png" class="move-image">';
  });