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