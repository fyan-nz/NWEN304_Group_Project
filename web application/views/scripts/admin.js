const updateButtons = document.querySelectorAll(".button-update");
const submitButton = document.querySelector("#add-product");
const newProductForm = document.querySelectorAll(".product-input");

submitButton.addEventListener('click', () => {
    let productName = document.querySelector("#product-name").value;
    let productPrice = document.querySelector("#product-price").value;
    let productType = document.querySelector("#product-type").value;
    let productDescription = document.querySelector("#product-description").value;
    let productImage = document.querySelector("#product-image").value;
    let p = {name: productName, price: productPrice, type: productType, desc: productDescription, image: productImage}
    fetch('/admin/add-item', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(p), // data can be `string` or {object}!
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            console.log('Success:', response);
            alert(response.message)
            clearForm();
        });
})
updateButtons.forEach(b => {
    b.addEventListener('click', () => {
        updateItem(b);
    })
})
const deleteButtons = document.querySelectorAll(".button-delete");
deleteButtons.forEach(b => {
    b.addEventListener('click', () => delButtonClicked(b))
})

function delButtonClicked(b) {
    let id = b.parentElement.parentElement.querySelector("#label-id").innerText;//get the id
    if (confirm("Are you sure you want to delete item " + id + " ?")) {
        fetch('/admin/remove-item?id=' + id, {method: 'delete'}).then(res => {
            res.json().then(json => {
                alert(json.result.deletedCount + " item(s) has been deleted.")
                // location.reload();
                //or update the dom
                b.parentElement.parentElement.parentElement.parentElement.remove();
            })
        });
    }
}

function updateItem(b) {
    console.log(b.parentElement.parentElement.querySelector("#label-id").innerText);//get the id
    alert("TODO: do update")
}

function clearForm() {
    newProductForm.forEach(f => {
        f.value = "";
    })
}