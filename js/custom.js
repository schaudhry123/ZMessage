$(window).load(function(){
    $('#content').imagefit();
});




 // $(function() {
 //    $(document).delegate('[data-role="navbar"] a', 'click', function () {
 //        $('[data-role="navbar"] a').removeClass("ui-btn-active");
 //            $('.tabs-content').children().hide();
 //        $('#' + $(this).attr('data-tab')).show();
 //            $("html,body").animate({scrollTop:0},500);
 //            $(this).addClass("ui-btn-active");
 //    });



// window.onresize = window.onload = function()
// {
//     resize();
// }

// function resize()
// {
//     var img    = document.getElementsByTagName('img')[0];
//         winDim = getWinDim();


//     img.style.height = winDim.y + "px";

//     if (img.offsetWidth > winDim.x)
//     {
//         img.style.height = null;
//         img.style.width = winDim.x + "px";
//     }
// }

// function getWinDim()
// {
//     var body = document.documentElement || document.body;

//     return {
//         x: window.innerWidth  || body.clientWidth,
//         y: window.innerHeight || body.clientHeight
//     }
// }