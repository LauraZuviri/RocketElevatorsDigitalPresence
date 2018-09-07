function CalculateQuoteRes() {

  var number_appartaments = (document.getElementById("app_res").value);
  var number_floors = (document.getElementById("floor_res").value);
  var Division = (number_appartaments / number_floors);
  var RoundUp = Math.ceil(Division / 6);
  var Result = Math.ceil(number_floors / 20);
  var TotalElevator = RoundUp * Result;

  document.getElementById("number_of_elevators_res").value = TotalElevator;

  /** calculation price **/
  var installation_res;
  var price_res;
  var price_unit;
  var price_material;
  var service_res = document.getElementsByName('radio_res');
  if (service_res[0].checked) {
      price_res = service_res[0].value * TotalElevator
      installation_res = 1.10
      price_unit = service_res [0].value
      } else if (service_res[1].checked) {
        price_res = service_res[1].value * TotalElevator
        installation_res = 1.13
      price_unit = service_res [1].value
      } else if (service_res[2].checked) {
        price_res = service_res[2].value * TotalElevator
        installation_res = 1.6
        price_unit = service_res [2].value
      }

      var Res_Total = Math.ceil(price_res * installation_res);
      var price_material = Math.ceil(Res_Total - price_res);
document.getElementById('price_unit_res').value= price_unit;
  document.getElementById('total_res').value = Res_Total;
document.getElementById('material_res').value = price_res;
document.getElementById('installation_res').value = price_material;

};

function CalculateQuoteComm() {



var number_of_cages = document.getElementById("cages_num").value;
document.getElementById("number_of_elevators").value = number_of_cages;

var installation_res;
var price_comm;
var price_unit;
var price_material;
var service_comm = document.getElementsByName('radio_comm');
if (service_comm[0].checked) {
    price_comm = service_comm[0].value * number_of_cages
    installation_comm = 1.10
    price_unit = service_comm [0].value
  } else if (service_comm[1].checked) {
      price_comm = service_comm[1].value * number_of_cages
      installation_comm = 1.13
    price_unit = service_comm [1].value
  } else if (service_comm[2].checked) {
      price_comm = service_comm[2].value * number_of_cages
      installation_comm = 1.6
      price_unit = service_comm [2].value
    }

    var Comm_Total = Math.ceil(price_comm * installation_comm);
    var price_material = Math.ceil(Comm_Total - price_comm);
document.getElementById('price_unit_comm').value= price_unit;
document.getElementById('total_comm').value = Comm_Total;
document.getElementById('material_comm').value = price_comm;
document.getElementById('installation_comm').value = price_material;

};


function CalculateQuoteCorp() {


  var occupants_max_corp = document.getElementById('occupants_max_corp').value;
  var floors_corp = document.getElementById('floor_corp').value;
  var occupants_total = occupants_max_corp * floors_corp;
  var elevators_requis = occupants_total / 1000;
  var columnas = Math.ceil (floors_corp / 20);
  document.getElementById("number_of_columns").value = columnas;
  var number_of_elevators = Math.ceil (elevators_requis / columnas);
  document.getElementById("number_of_elevators_corp").value = number_of_elevators;


var installation_corp;
var price_corp;
var price_unit;
var price_material;
var service_corp = document.getElementsByName('radio_corp');
if (service_corp[0].checked) {
    price_corp = service_corp[0].value * number_of_elevators
    installation_corp = 1.10
    price_unit = service_corp [0].value
  } else if (service_corp[1].checked) {
      price_corp = service_corp[1].value * number_of_elevators
      installation_corp = 1.13
    price_unit = service_corp [1].value
  } else if (service_corp[2].checked) {
      price_corp = service_corp[2].value * number_of_elevators
      installation_corp = 1.6
      price_unit = service_corp [2].value
    }

    var Corp_Total = Math.ceil(price_corp * installation_corp);
    var price_material = Math.ceil(Corp_Total - price_corp);
document.getElementById('price_unit_corp').value= price_unit;
document.getElementById('total_corp').value = Corp_Total;
document.getElementById('material_corp').value = price_corp;
document.getElementById('installation_corp').value = price_material;

};

function CalculateQuoteHyb() {

  var occupants_max_hyb = document.getElementById('occupants_max_hyb').value;
  var floors_hyb = document.getElementById('floor_hyb').value;
  var occupants_total = occupants_max_hyb * floors_hyb;
  var elevators_requis = occupants_total / 1000;
  var columnas = Math.ceil (floors_hyb / 20);
  document.getElementById("number_of_columns_hyb").value = columnas;
  var number_of_elevators = Math.ceil (elevators_requis / columnas);
  document.getElementById("number_of_elevators_hyb").value = number_of_elevators;

  var installation_hyb;
  var price_hyb;
  var price_unit;
  var price_material;
  var service_hyb = document.getElementsByName('radio_hyb');
  if (service_hyb[0].checked) {
      price_hyb = service_hyb[0].value * number_of_elevators
      installation_hyb = 1.10
      price_unit = service_hyb [0].value
    } else if (service_hyb[1].checked) {
        price_hyb = service_hyb[1].value * number_of_elevators
        installation_hyb = 1.13
      price_unit = service_hyb [1].value
    } else if (service_hyb[2].checked) {
        price_corp = service_hyb[2].value * number_of_elevators
        installation_hyb = 1.6
        price_unit = service_hyb [2].value
      }

      var Hyb_Total = Math.ceil(price_hyb * installation_hyb);
      var price_material = Math.ceil(Hyb_Total - price_hyb);
  document.getElementById('price_unit_hyb').value= price_unit;
  document.getElementById('total_hyb').value = Hyb_Total;
  document.getElementById('material_hyb').value = price_hyb;
  document.getElementById('installation_hyb').value = price_material;

};









/**

  if document.getElementById ("radio_res" [1]) == true; {
  standard = "7565";
}
else if document.getElementById("radio_res"[2]).checked == true; {
  Premium = "12345";
}
else if (document.getElementById("radio_res"[3].checked == true;{
  Excellium = "15400";
}
else {
    // DO NOTHING
    }
    if (res2<20) {
    coef = "1";
    }
    else {
    coef = "2";
    }

if document.getElementById ("radio_res" [1]).checked == true; {
installation = "0.1";
}

else if (document.getElementById("radio_res"[2]).checked == true; {
installation = "0.13";
}
else if (document.getElementById "radio_res"[3].checked == true; {
installation = "0.16";
}
else {
    // DO NOTHING
    }
    if (document.getElementById("radio_res"[1]).checked == true; {
standard = "7565";
}
else if (document.getElementById("radio_res"[2]).checked == true; {
premium = "12345";
}
else if (document.getElementById("radio_res"[3]).checked == true; {
excellium = "15400";
}
else {
// DO NOTHING
}


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
} **/
