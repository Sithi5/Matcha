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