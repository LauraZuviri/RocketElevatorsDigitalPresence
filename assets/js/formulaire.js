function selectType() {
//afficher la secion qui est choisi par le select

var formulaire_select = jQuery("#formulaire_select").val();
// console.log(jQuery('#formulaire'));

jQuery('.section_formulaire').hide();
if (formulaire_select == "Residential") {
  jQuery ('#residential_container').show();
}   else if (formulaire_select == "Commercial") {
  jQuery ('#commercial_container').show();
}   else if (formulaire_select == "Corporative") {
  jQuery ('#corporative_container').show();
}   else if (formulaire_select == "Hybrid") {
  jQuery ('#hybrid_container').show();
}
}
