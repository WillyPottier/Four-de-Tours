let user = null;

async function afficherProfil() {
    const user = await getProfil();
    const container = document.getElementById('profil-container');

    container.innerHTML = `
        <div class="userName">${user.nom}</div>
        <div class="userRole">${user.role}</div>
        `
};

afficherProfil();