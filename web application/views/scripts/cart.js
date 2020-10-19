function removeItem(itemId) {
    fetch("/cart/remove", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            itemId
        }),
    }).then((res) => {
        if (res.status === 200) {
            location.reload();
        } else if (res.status === 401) {
            alert('You need to login before removing items to the cart');
        } else if (res.status === 500) {
            alert('your request could not be completed')
        }
    })
}