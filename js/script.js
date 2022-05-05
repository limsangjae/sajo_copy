$(document).ready(function(){
    $(".all-menu-box").click(function(){
        $(".nav-menu-wrap").toggleClass("active")
    })
    $(".slider").slick({
        arrows:false,

    })
    $(".left-btn").click(function () {
        $(".slider").slick("slickPrev");
    });
    $(".right-btn").click(function () {
        $(".slider").slick("slickNext");
    });

    // 끝
})