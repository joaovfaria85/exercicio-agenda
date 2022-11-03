const form = document.getElementById('contatos')
let linhas = '';

form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if(inputNumeroContato.value.length < 9){
        alert('Número inválido digite novamente')
    } else {
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    } 
    inputNomeContato.value = '';
    inputNumeroContato.value = '';  
    console.log(inputNomeContato);
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('.tbody');
    corpoTabela.innerHTML = linhas;
    }