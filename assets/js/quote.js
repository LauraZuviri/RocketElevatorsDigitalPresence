function CalculateQuoteRes(val)
{

  document.getElementById("number_of_cages").value = calculateNumberOfCages(val);
  document.getElementById("number_of_elevators").value = calculateNumberOfElevators();
  document.getElementById("material").value = calculateMaterial();
  document.getElementById("installation").value = calculateNumberOfCages();
  document.getElementById("total").value = calculateNumberOfCages();
}

function calculateNumberOfCages(val) {

  var num_of_floors = document.getElementById("number_floors").value
  return num_of_floors / 2 * val;
}
function calculateNumberOfElevators() {
  return 32423;
}
function calculateMaterial() {
  return 32423;
}
function calculateInstallation() {
  return 32423;
}
function calculateTotal() {
  return 32423;
}
