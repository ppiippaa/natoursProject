
$(".navigation__link").click( function() {
   $(".navigation__button").trigger("click");
})

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').delay(500).animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});