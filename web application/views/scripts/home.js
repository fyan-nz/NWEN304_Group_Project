var mySwiper = new Swiper('.swiper-container', {
    // If you need to forward and back buttons
    slidesPerView: 5,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 50
});

function scrollToMainContent() {
    window.scroll({ top: window.innerHeight, behavior: 'smooth' });
}

function addItemToCart(item) {

}