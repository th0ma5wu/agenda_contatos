const form = document.getElementById('form-contatos');
let linhas = '';
let nomeArray = [];
let telefoneArray = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionarLinha();
    adicionarContato();
});

function adicionarLinha() {
    const nome = document.getElementById('nome-contato');
    const telefone = document.getElementById('telefone-contato');

    if (nomeArray.includes(nome.value) && telefoneArray.includes(telefone.value)) {
        alert(`O nome: ${nome.value} e o telefone: ${telefone.value} já existem.`);
    } else {
        nomeArray.push(nome.value);
        telefoneArray.push(telefone.value);

        let linha = '<tr>';
        linha += `<td>${nome.value}</td>`;
        linha += `<td>${telefone.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }
    
    nome.value = '';
    telefone.value = '';
}

function adicionarContato() {
    const body = document.querySelector('tbody');
    body.innerHTML = linhas;
}