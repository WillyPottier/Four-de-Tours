let user = JSON.parse(localStorage.getItem('user')) || null;

function afficherProfil() {
    const container = document.getElementById('profil-container');

    container.innerHTML = `
        <div class="userName">${user.nom}</div>
        <div class="userRole">${user.role}</div>
        `
};

afficherProfil();