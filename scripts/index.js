
$(".navigation__link").click( function() {
   $(".navigation__button").trigger("click");
})

$('.smooth-scroll').click(function (event) {
    event.preventDefault();

    $('html, body').delay(500).animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});



