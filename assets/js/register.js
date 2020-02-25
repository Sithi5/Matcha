//script for datepicker for birthdate register
$(document).ready(function() {
    $('.birthdate-dropdown').dropdownDatepicker({
        submitFormat: 'yyyy-mm-dd',
        minAge: 18,
    });
})

//script setting label top of field when something inside field and label down if nothing inside field
$('.label-float :input').blur(function() {
        if ($(this).val()) {
            $(this).labels().addClass('force-label-top');
        } else if (!$(this).val()) {
            $(this).labels().removeClass('force-label-top');
        }
    })
    //script setting label top of field when something inside field when reload of page
$(".label-float :input").each(function() {
    if ($(this).val().length != 0) {
        $(this).labels().addClass('force-label-top');
    }
})

//set birthday select class to required after datepicker is loaded (1s)
setTimeout(function() {
    $('.date-dropdowns select').each(function() {
        $(this).attr('required', true);
    })
}, 1000);


//execute the register form controller from the modal
$(document).ready(function() {
    //On écoute le "click" sur le bouton ayant la classe "modal-trigger"
    $('.modal-trigger').click(function() {
        //On initialise les modales materialize
        $('.modal').modal();
        //On récupère l'url depuis la propriété "Data-target" de la balise html a
        url = $(this).attr('data-target');
        //on fait un appel ajax vers l'action symfony qui nous renvoie la vue
        $.get(url, function(data) {
            //on injecte le html dans la modale
            $('.modal-content').html(data);
        });
    })
});



$('#modal_form_register').submit(function() {
    $.ajax({
        url: $('#modal_form_register').attr('action'),
        type: 'POST',
        data: $('#modal_form_register').serialize(),
        success: function(data) {
            $('.modal-content').html(data);
        }
    });
    return false;
});