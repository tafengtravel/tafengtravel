//Initialize Swiper - 圖文4方格

    var swiper = new Swiper('.swiper-container.travel', {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,//強制輪播
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            //nextEl: '.swiper-button-next',
            //prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        }
    });
