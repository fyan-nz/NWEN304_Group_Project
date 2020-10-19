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

function addItemToCart(itemId) {
    fetch("/cart/add", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            itemId
        }),
    }).then((res) => {
        if (res) {
            if (res.status === 401) {
                alert('You need to login before adding items to the cart');
            } else if (res.status === 500) {
                alert('your request could not be completed')
            }
        }
    })
}