$(document).ready(function () {
    const menu_wrapper = $('#menu-wrapper-mb');
    const menu_list = $('#menu-list');

    menu_wrapper.height(0);
    $("#menu").click(function () {
        if (menu_wrapper.hasClass('open')) {
            menu_wrapper.removeClass('open');
            menu_wrapper.height(0);
        } else {
            menu_wrapper.addClass('open');
            menu_wrapper.height(menu_list.outerHeight(true));
        }
    })

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
    return {
        infinite: true,
        centerMode: true,
        slidesToShow: parseInt(window.innerWidth / 320),
        slidesToScroll: parseInt(window.innerWidth / 320),
        autoplay: true,
        arrows: false,
    }
}