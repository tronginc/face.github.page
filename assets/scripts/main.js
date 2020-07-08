$(document).ready(function () {
    $('.slick-carousel').slick(getSlickSettings());
    let resizing = false;
    let to = undefined;
    $(window).on("resize", function () {
        resizing = true;
        if (to) {
            clearTimeout(to);
            console.log("Clear");
            to = setTimeout(function () {
                $('.slick-carousel').slick('unslick').slick(getSlickSettings());
                clearTimeout(to);
                to = undefined;
                console.log("Reinit slick");
            }, 100)
        }
        else {
            to = setTimeout(function () {
                $('.slick-carousel').slick('unslick').slick(getSlickSettings());
                clearTimeout(to);
                to = undefined;
                console.log("Reinit slick");
            }, 100)
        }
    });

    $("#loader-container").remove();
    $("body").css({ overflow: "auto" });
})

function getSlickSettings() {
    let slides = parseInt(window.innerWidth / 280, 10);
    if (window.innerWidth <= 720 && window.innerWidth > 640) {
        slides = parseInt(window.innerWidth / 220, 10);
    }
    if (window.innerWidth <= 640) {
        slides = parseInt(window.innerWidth / 150, 10);
    }
    console.log(slides);
    return {
        infinite: true,
        centerMode: true,
        slidesToShow: slides,
        slidesToScroll: slides,
        autoplay: true,
        arrows: false,
    }
}