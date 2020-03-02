//ajax form
$('#modal_form_login').submit(function() {
    console.log('form submited');
    // $.ajax({
    //     url: $('#modal_form_login').attr('action'),
    //     type: 'POST',
    //     data: $('#modal_form_login').serialize(),
    //     success: function(data) {
    //         if (data.data === 'success') {
    //             $('#modal-login').modal('hide')
    //             location.reload();
    //         }
    //         $('#modal-content-login').html(data);
    //     }
    // });
    return false;
});