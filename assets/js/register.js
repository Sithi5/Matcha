//script for datepicker for birthdate register
$(document).ready(function() {
    $('.birthdate-dropdown').dropdownDatepicker({
        submitFormat: 'yyyy-mm-dd',
        minAge: 18,
        maxAge: 100,
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

$('#modal_form_register').submit(function() {
    $.ajax({
        url: $('#modal_form_register').attr('action'),
        type: 'POST',
        data: $('#modal_form_register').serialize(),
        success: function(data) {
            if (data.data === 'success') {
                $('#modal-register').modal('hide')
                location.reload();
            }
            $('.modal-content').html(data);
        }
    });
    return false;
});