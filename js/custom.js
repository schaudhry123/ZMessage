// $("a[data-role=tab]").each(function () {
//     var anchor = $(this);
//     anchor.bind("click", function () {
//         $.mobile.changePage(anchor.attr("href"), {
//             transition: "none",
//             changeHash: false
//         });
//         return false;
//     });
// });

// $("div[data-role=page]").bind("pagebeforeshow", function (e, data) {
//     $.mobile.silentScroll(0);
//     $.mobile.changePage.defaults.transition = 'slide';
// });

// $(function() {
//     $("#tabs").tabs();
// })

 $(function() {
    $(document).delegate('[data-role="navbar"] a', 'click', function () {
        $('[data-role="navbar"] a').removeClass("ui-btn-active");
            $('.tabs-content').children().hide();
        $('#' + $(this).attr('data-tab')).show();
            $("html,body").animate({scrollTop:0},500);
            $(this).addClass("ui-btn-active");
    });
