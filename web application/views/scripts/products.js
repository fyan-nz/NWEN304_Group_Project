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