$(document).ready(function () {
    $('.slick-carousel').slick(getSlickSettings());
    $(window).on("resize", function () {
        $('.slick-carousel').slick('unslick').slick(getSlickSettings());
    });
})

function getSlickSettings() {
    return {
        infinite: true,
        centerMode: true,
        slidesToShow: parseInt(window.innerWidth / 320),
        slidesToScroll: parseInt(window.innerWidth / 320),
        autoplay: true,
        arrows: false,
    }
}