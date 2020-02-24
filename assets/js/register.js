$(document).ready(function() {
        $('.js-dropdown-datepicker').dropdownDatepicker({
            submitFormat: 'yyyy-mm-dd',
            minAge: 18,
        });
    })
    //script removing label when something inside field
    $('.label-float :input').blur(function(){
        if($(this).val() ) {
            $(this).labels().addClass('force-label-top');
        }
        else if(!$(this).val() ) {
            $(this).labels().removeClass('force-label-top');
        }
    })
    $(".label-float :input").each(function(){
        if($(this).val().length != 0) {
            $(this).labels().addClass('force-label-top');
        }
})