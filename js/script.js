$(document).ready(function(){

});
function handleVisibility(box) {
    var visible = (box.checked) ? "block" : "none";
    box.parentElement.nextElementSibling.style.display = visible;
}
var expanded = false;

function showCheckboxes() {
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}

function showChildView(elm, param) {
    if($(elm).prop("checked")){
        if(!$('.'+param).prop("checked")){
            $('.'+param).trigger('click');
        }
    } else {
        if($('.'+param).prop("checked")){
            $('.'+param).trigger('click');
        }
    }

}
