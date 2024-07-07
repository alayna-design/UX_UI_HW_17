$(".logo-section img").fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300)




$(".preview-link").hover(lighten, darken);

function lighten() {
    $(this).addClass("light-navy");
}

function darken() {
    $(this).removeClass("light-navy");
}

$(".nav-links a").hover(lightenText, darkenText);
function lightenText() {
    $(this).addClass("light-text");
}

function darkenText() {
    $(this).removeClass("light-text");
}
