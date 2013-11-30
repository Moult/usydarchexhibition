$("section#showcase img").hide();
function switchShowcase() {
    $("section#showcase img").first().appendTo("section#showcase").fadeOut(3000);
    $("section#showcase img").first().fadeIn(3000);
    setTimeout(switchShowcase, 10000);
}
switchShowcase();


$("#viewDetails").click(function() {
    if ($("#viewDetails").hasClass("visible")) {
        $("#viewDetails").removeClass("visible");
    } else {
        $("#details").slideToggle('slow');
        $("#viewDetails").addClass("visible");
    }
});


$("body").mCustomScrollbar({
    theme: "light",
    scrollInertia: 100,
    advanced:{
        updateOnContentResize: true
    }
});

$("h2.dropdown").click(function() {
    if ($("ul.dropdown").hasClass("visible")) {
        $("ul.dropdown").removeClass("visible");
    } else {
        $("ul.dropdown").slideToggle();
        $("ul.dropdown").addClass("visible");
    }
});

$("a.readmore").click(function() {
    if ($("div.readmore").hasClass("visible")) {
        $("div.readmore").removeClass("visible");
    } else {
        $("div.readmore").slideToggle();
        $("div.readmore").addClass("visible");
    }
});
