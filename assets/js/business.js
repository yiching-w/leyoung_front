$(document).ready(function () {
    $('.nav #business').addClass('active');
    $(document).on('input', '.favInput', function () {
        if ($(this).is(':checked')) {
            console.log('已加入我的收藏');
        } else {
            console.log('已取消收藏');
        }
    });
});