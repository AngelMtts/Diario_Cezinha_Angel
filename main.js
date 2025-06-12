function showPopup(text) {
    document.getElementById('popup').innerHTML = text; // Corrigido aqui
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    const snackItem = document.getElementById('snackItem');

    snackItem.addEventListener('click', function () {
        mostrarListaDeSnacks();
    });
});

function mostrarListaDeSnacks() {
    const listaHTML = `
        <p>🍎 Aqui está a lista de snacks:</p>
        <ul>
            <li>Biscoito: Cheetos Bola ou Cebolitos/ Lays</li>
            <li>Palha Italiana: Iremos fazer juntinhas</li>
            <li>Balas Finis: as suas preferidas (menos a da aranha que n tem kk)</li>
            <li> Bebidas: Monster sem açúcar e Cappucino </li>
        </ul>
    `;
    showPopup(listaHTML);
}