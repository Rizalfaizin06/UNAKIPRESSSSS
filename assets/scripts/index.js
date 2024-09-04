$(document).ready(function () {
    let isClicked = false;

    $(".hamburger").on("click", function () {
        isClicked = !isClicked;

        if (isClicked) {
            $(".hamburger-nav").addClass("show");
            $("#hamburger-icon").toggleClass("fa-bars-staggered fa-bars");

        } else {
            $(".hamburger-nav").removeClass("show");
            $("#hamburger-icon").toggleClass("fa-bars-staggered fa-bars");
        }
    });
});
