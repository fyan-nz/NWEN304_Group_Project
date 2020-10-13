const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    if (email.trim() === '' || password.trim() === '') {
        alert('Please fill in the empty fields');
        return;
    }

    fetch("http://localhost:5000/api/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password
        }),

    })//if the server sends back a 401 error that means the password does not match
        .then(function (response) {
            let message;
            response.json().then(json => {
                console.log(response.status, json.message)
                message = json.message;
            }).then(() => {
                if (response.status === 401) {
                    alert(message);
                }
                if (response.status === 200) {
                    location.assign('/');
                }
            })

        });
})