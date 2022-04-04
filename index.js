var $stoneButton = document.querySelector(".button-stone-player-1");
var $fieldPlayer1 = document.querySelector(".field-player-1");

function movePlayer1Stone() {
  $fieldPlayer1.innerHTML = '<img src="./Assets/stone.png" class="stone-hand">';
}

$stoneButton.addEventListener("click", movePlayer1Stone);
