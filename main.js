function showPopup(text) {
    document.getElementById('popup').innerHTML = text; 
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
        <p>🍽️ Aqui está a lista de snacks:</p>
        <ul>
            <li>Biscoito: Cebolitos e Lays</li>
            <li>Palha Italiana: Iremos fazer juntinhas</li>
            <li>Balas Finis: as suas preferidas (menos a da aranha que n tem kk)</li>
            <li> Bebida: Cappucino </li>
        </ul>


    `;
    showPopup(listaHTML);
}

function mostrarTrilhaSonora() {
  const conteudo = `
    <p>Garçom traga a melhor playlist feita pela sua namorada desesperada pra te surpreender.</p>
    <button onclick="window.open('https://open.spotify.com/playlist/2Txa2sfv2air6IAqzlxZXf?si=185NHfyARHeQz5cDrv5k8g', '_blank')">
      Ouvir Playlist
    </button>
  `;
  showPopup(conteudo);
}
