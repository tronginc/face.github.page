const menu_wrapper = $('#menu-wrapper-mb');
const menu_list = $('#menu-list');
const $root = $('html, body');
console.log($root);
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

$('a[href^="#"]').click(function (e) {
    const href = $.attr(this, 'href');
    if (!$(href).offset() || href === '#binh-chon') {
        window.location.hash = href;
        return true;
    }

    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
        window.location.hash = href;
    });

    return false;
});