//script for datepicker for birthdate register
$(document).ready(function() {
    $('.birthdate-dropdown').dropdownDatepicker({
        submitFormat: 'yyyy-mm-dd',
        minAge: 18,
        maxAge: 100,
    });
});

//set birthday select class to required after datepicker is loaded (1s)
setTimeout(function() {
    $('.date-dropdowns select').each(function() {
        $(this).attr('required', true);
    })
}, 1000);

//ajax form register
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
            $('#modal-content-register').html(data);
        }
    });
    return false;
});

//ajax form login
$('#modal_form_login').submit(function() {
    $.ajax({
        url: $('#modal_form_login').attr('action'),
        type: 'POST',
        data: $('#modal_form_login').serialize(),
        success: function(data) {
            if (data.data === 'success') {
                $('#modal-register').modal('hide')
                location.reload();
            }
            $('#modal-content-register').html(data);
        }
    });
    return false;
});