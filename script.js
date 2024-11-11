
// Form validation example
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;

    if (username.length < 6 || username.length > 20) {
        alert('O nome de usuário deve ter entre 6 e 20 caracteres.');
        event.preventDefault();
    }

    if (password.length < 6 || password.length > 15) {
        alert('A senha deve ter entre 6 e 15 caracteres.');
        event.preventDefault();
    }
});
