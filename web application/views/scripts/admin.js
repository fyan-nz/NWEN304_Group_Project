const updateButtons = document.querySelectorAll(".button-update");

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
    if (confirm("Are you sure you want to delete item " + id+" ?")) {
        fetch('/admin/remove-item?id=' + id, {method: 'delete'}).then(res => {
            res.json().then(json => {
                alert(json.result.deletedCount+" item(s) has been deleted.")
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