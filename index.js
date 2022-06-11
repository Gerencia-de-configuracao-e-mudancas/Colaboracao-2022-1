const Searchbar = document.querySelector("#searchBar");
const nomes = document.querySelectorAll('h4.nome');
const descricoes = document.querySelectorAll('p.descrição');
const comandos = [];

class Comando{
    constructor(nome, descricao){
        this.nome = nome;
        this.descricao = descricao;
    }
}

function pegarNomes() {
    for (const n of nomes) {
        const nome = n.textContent;
        const comando = new Comando(nome);
        comandos.push(comando);
    };    
}

Searchbar.addEventListener('focus', () => {
    Searchbar.style.boxShadow = "2px 2px 20px rgba(17, 2, 26, 0.5)";
});
Searchbar.addEventListener('focusout', () => {
    Searchbar.style.boxShadow = "none";
});