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
        if (res.status === 200) {
            // display a notification for 1 second
            const notification = document.querySelector('.add-item-notification');

            notification.classList.add('visible');

            setTimeout(() => {
                notification.classList.remove('visible');
            }, 1000);
        } else if (res.status === 401) {
            alert('You need to login before adding items to the cart');
        } else if (res.status === 500) {
            alert('your request could not be completed')
        }
    })
}