
document.getElementById("Portions").value = 1;
document.getElementById("Flour").value = 150;
document.getElementById("Eggs").value = 3;
document.getElementById("Milk").value = 400;
document.getElementById("Butter").value = 50;
document.getElementById("Salt").value = 4;

function calculateAmount() {

var inputPortions = document.getElementById("Portions").value;
//alert(inputPortions);


document.getElementById("Flour").value = 150 * inputPortions;
document.getElementById("Eggs").value = 3 * inputPortions;
document.getElementById("Milk").value = 400 * inputPortions;
document.getElementById("Butter").value = 50 * inputPortions;
document.getElementById("Salt").value = 4 *inputPortions;


}


