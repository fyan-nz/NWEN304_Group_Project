const updateButtons = document.querySelectorAll(".button-update");

updateButtons.forEach(b => {
    b.addEventListener('click', () => {
        updateItem(b);
    })
})
const deleteButtons = document.querySelectorAll(".button-delete");
deleteButtons.forEach(b => {
    b.addEventListener('click', () => delItem(b))
})

function delItem(b) {
    let id = b.parentElement.parentElement.querySelector("#label-id").innerText;//get the id
    fetch('/admin/remove-item?id='+id, {method: 'delete'}).then(res => {res.json().then(json => {
        console.log(json)})})
}

function updateItem(b) {
    console.log(b.parentElement.parentElement.querySelector("#label-id").innerText);//get the id
    alert("TODO: do update")
}