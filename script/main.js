


$(function () {
    console.log("로딩완료");


    /*배너 이미지 슬라이드*/
    var mySwiper = new Swiper('.swiper-container', {

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },

        autoplay: {
            delay: 5000,
        },
    });

    //영화차트 이미지 슬라이드
    var mySwiper = new Swiper('.swiper-container2', {
        slidesPerView: 4,
        spaceBetween: 24,
        
    });


    /*영화차트 탭 메뉴 */

    var movBtn = $('.movie_title>ul>li');
    var movCont = $('.movie_chart>div');

    movCont.hide().eq(0).show();

    movBtn.click(function (e) {

        e.preventDefault();

        var tg = $(this);
        var index = tg.index();
        console.log(index);

        movBtn.removeClass('active');
        tg.addClass('active');

        movCont.css("display", "none");
        movCont.eq(index).css("display", "block");

    });

}); /// jQB /////////////////////////////////////////////
/////////////////////////////////////////////////////////
