var toggle = false;
$('input[type="text"]').css('display','none');
$('#toggle').addClass('fa-plus');


$('ul').on("click", "li", function () {
    $(this).toggleClass('completed');
});

$('ul').on("click", "span", function (event) {
    $(this).parent().fadeOut(200, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

$('input[type="text"]').on('keypress', function (event) {
    if (event.which === 13) {
        var listText = $(this).val();
        $(this).val("");
        $('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + listText + '</li>');
    }
});

$('#toggle').on('click', function () {
    $('input[type="text"]').slideToggle(200);
    if (toggle === false) {
        $(this).removeClass('fa-plus');
        $(this).addClass('fa-minus');
        toggle = true;
    } else {
        $(this).removeClass('fa-minus');
        $(this).addClass('fa-plus');
        toggle = false;
    }
});
$('body').css('backgroundColor', 'grey');