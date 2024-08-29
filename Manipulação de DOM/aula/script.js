const paragrafo1 = document.getElementById('paragrafo1');
const paragrafo2 = document.getElementsByClassName('paragrafo2')[0];
const imagem = document.querySelector('img');
const botao = document.querySelector('#botao');

function UrsinhoBravinho(){
    const texto = document.getElementById('carinho');
    imagem.src = "https://gifman.net/wp-content/uploads/2019/06/ursinho-fofo-cara-de-bravo.gif"
    texto.textContent = "Ursinho Bravinho! Pq não ganhou carinho"
    setInterval(() => {
        imagem.src = "https://i.pinimg.com/originals/64/1a/58/641a584c05345c733e8e5d94f906e53c.gif"
        texto.textContent = "Ganhei carinho"
    }, 3000);
}


setInterval(() => {
    UrsinhoBravinho();
}, 3000);
botao.addEventListener('click', () => {
    paragrafo1.textContent = "Novo paragrafo"
    paragrafo2.textContent = "Novo segundo paragrafo"

    paragrafo1.style.color = "red"
    paragrafo2.style.color = "blue"

    setInterval(() => {
        location.reload();
    }, 5000);
});


