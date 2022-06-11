const Searchbar = document.querySelector("#searchBar");
const nomes = document.querySelectorAll('h4.nome');
const descricoes = document.querySelectorAll('p.descrição');
const divComandos = document.querySelector('.comandos');
const comandos = [];

class Comando{
    constructor(nome, descricao){
        this.nome = nome;
        this.descricao = descricao;
    }
}

function montandoObjetos() {
    for (let i = 0; i < nomes.length; i++) {
        const nome = nomes[i].textContent;
        const descricao = descricoes[i].textContent
        const comando = new Comando(nome, descricao);
        comandos.push(comando);
    }
}

function montandoDivResultado(nome, descr) {
    const divResult = document.createElement('div');
    const textNome = document.createElement('h4');
    textNome.textContent = nome;
    const textDescricao = document.createElement('p');
    textDescricao.textContent = descr;
    divResult.appendChild(textNome);
    divResult.appendChild(textDescricao);
    divComandos.appendChild(divResult);
}

function mostrarComandos(comandoBuscado) {
    divComandos.textContent = '';
    for (let comando of comandoBuscado) {
        montandoDivResultado(comando.nome, comando.descricao);
    }
}

Searchbar.addEventListener('focus', () => {
    Searchbar.style.boxShadow = "2px 2px 20px rgba(17, 2, 26, 0.5)";
});
Searchbar.addEventListener('focusout', () => {
    Searchbar.style.boxShadow = "none";
});

Searchbar.addEventListener('keyup', ()=>{
    const valor = Searchbar.value;
    const comandoBuscado = comandos.filter(comando => comando.nome.includes(valor));
    mostrarComandos(comandoBuscado);
});