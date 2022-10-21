$(document).ready(function () {
    $('.nav #bestSeller').addClass('active');
    $(document).on('input', '.favInput', function () {
        if ($(this).is(':checked')) {
            console.log('已加入我的收藏');
        } else {
            console.log('已取消收藏');
        }
    });

    $('.lazyload').each(function () {
        var lazy = $(this);
        var src = lazy.attr('data-src');
        lazy.css('background-image', 'url("' + src + '")');
    });
});