const form= document.getElementById('form-contatos');
const imgAprovado = '<img src= "./images/aprovado.png" alt="Emoji celebrando"/>';
const imgReprovado = '<img src= "./images/reprovado.png" alt="Emoji decepcionado"/>';
const contatos = [];
const numero= [];


let linhas= '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();  
    atualizaTabela();

});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if(contatos.includes(inputNomeContato.value)){
        alert(`O Contato: ${inputNomeContato.value} já foi inserido`);
    }
    else{
    contatos.push(inputNomeContato.value);
    numero.push(inputNumeroContato.value);

    let linha= '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += '</tr>';

    linhas +=linha;
    }
    inputNomeContato.value= '';
    inputNumeroContato.value= '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

