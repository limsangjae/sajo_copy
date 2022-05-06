$(document).ready(function(){
    $(".all-menu-box").click(function(){
        $(".nav-menu-wrap").toggleClass("active")
    })
    $(".slider").slick({
        arrows:false,
        autoplay:true,
    })
    $(".left-btn").click(function () {
        $(".slider").slick("slickPrev");
    });
    $(".right-btn").click(function () {
        $(".slider").slick("slickNext");
    });
    
    $(".play").click(function(){
        $(".play").removeClass("active");
        $(".pause").addClass("active");
        $(".slider").slick("slickPlay");
    })
    $(".pause").click(function(){
        $(".play").addClass("active");
        $(".pause").removeClass("active");
        $(".slider").slick("slickPause");
    })
    $(".dots>.dot").click(function(){
        let num = $(this).index();

        $(".slider").slick("slickGoTo", num);
        $(".dots>.dot").eq(num).addClass("active");
        $(".dots>.dot").eq(num).siblings().removeClass("active");
    })

    $(".slider").on(
        "beforeChange",
        function (event, slick, currentSlide, nextSlide) {
          console.log("비포체인지");
          $(".dots>.dot").eq(nextSlide).addClass("active");
          $(".dots>.dot").eq(nextSlide).siblings().removeClass("active");
          
          $(".content").removeClass("active")
        }
      );
      $(".slider").on("afterChange", function (event, slick, currentSlide) {
        console.log("에프터체인지");
        $(".content").eq(currentSlide+1).addClass("active");
      });

    // 끝
})