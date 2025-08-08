// Importa a classe Cliente que contém os dados e validação
import { Cliente } from './classes.js'
//Importa função que cria os elementos visuais para cada cliente
import { criarElementosCliente } from './utils.js'
//seleciona o formulário HTML
const form = document.getElementById('formulario')

//executa função ao enviar formulário
function cadastrar(event) {
    //previne o recarregamento do formulário
        event.preventDefault()

        //captura as entradas do formulário
        const user = document.getElementById('nome').value
        const email = document.getElementById('email').value

        //cria um novo cliente usaando a classe Cliente
        const cliente = new Cliente(user, email)

        //Validar os dados do cliente
        if (!cliente.validar()) {
            alert('Preencha os campos corretamente!')
            return
        }
      
    //Envia os dados com fetch (POST)
    fetch("https://crudcrud.com/api/bc43794d6fa249eea5926a98c4867143/cadastros", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente.toJSON()) //converte o cliente para JSON
    })
    .then(response => {
        if(!response.ok) {
            throw new Error('Erro aao cadastrar.')
        }
        return response.json()
    })
    .then(data => {
        console.log('Cliente cadastrado:', data)
        listarCadastros() // atualiza a lista após cadastro
    })
    .catch(error => {
        console.error('Error', error)
    })
}
// Função que busca os cadastros existentes na API
function listarCadastros() {
    fetch("https://crudcrud.com/api/bc43794d6fa249eea5926a98c4867143/cadastros") 
        .then(response => {
            if(!response.ok) {
                throw new Error('Erro ao buscar cadastros')
            }
            return response.json()
        })
        .then(lista => {
            const ul = document.querySelector('.cadastros')
            ul.innerHTML = '' //limpa a lista antes de adicionar os novos

            //Para cada cliente, cria um item visual e adiciona à lista
            lista.map(cliente => {
                const li = criarElementosCliente(cliente, excluirCadastro)
                ul.appendChild(li)

            });
        })
        .catch(error => {
            console.error('Error', error)
        })
}
function excluirCadastro(id) {
    fetch(`https://crudcrud.com/api/bc43794d6fa249eea5926a98c4867143/cadastros/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error ('Erro ao excluir cadastro')
        }
        listarCadastros() //Atualiza a lista na tela, após a exclusão.
    })
    .catch(error => {
        console.log('Erro aao excluir', error)
    })
}
//Quando a página carrega, lista os cadastros existentes
window.addEventListener('DOMContentLoaded', listarCadastros)
//Quando o formulárioo é enviado, executa a função cadastrar
form.addEventListener('submit', cadastrar)