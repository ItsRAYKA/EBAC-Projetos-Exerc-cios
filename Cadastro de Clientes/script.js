const form = document.getElementById('formulario') //captura formulário
  
//Cadastrar Usuários
function cadastrar(event) {
    //previne o recarregamento do formulário ao ser enviado
        event.preventDefault()
        //captura as entradas do formulário
        const user = document.getElementById('nome').value
        const email = document.getElementById('email').value
        
        console.log(`${user}, ${email}`)

        //cria um objeto com os dados do usuário
        const cliente = {
        nome: user,
        email: email 
    }
    //Envia os dados com fetch (POST)
    fetch('https://crudcrud.com/api/37f74c1860524de6aa415b5b55da30ca/cadastros', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(cliente) //transforma o objeto em JSON
    })
    .then(response => {
        //verifica se a resposta foi bem sucedida
        if(!response.ok) {
            throw new Error('Erro ao cadastrar.') //lança error se não for
        }
        return response.json() //converte a resposta em JSON
    })
    //Mostrar dados no console
    .then(data => {
        console.log('Cliente cadastrado:', data)
        //atualizar a lista de cadastros na tela
        listarCadastros()
    })
    //Tratar erros 
    .catch(error => {
        console.error('Error', error)
    })

}
//Busca os dados da API e exibir na tela
function listarCadastros() {
    fetch("https://crudcrud.com/api/37f74c1860524de6aa415b5b55da30ca/cadastros") 
        .then(response => {
            if(!response.ok) {
                throw new Error('Erro ao buscar cadastros')
            }
            return response.json()
        })
        .then(lista => {
            //seleciona a lista HTML onde os cadastros serão exibidos
            const ul = document.querySelector('.cadastros')
            ul.innerHTML = '' //limpa antes de adicionar os novos
            //Percorre cada cliente na lista
            lista.forEach(cliente => {
                //Cria um item na lista para ccada cliente
                const li = document.createElement('li')
                li.textContent = `${cliente.nome} - ${cliente.email}`
                //Cria um botão para excluir o cadastro
                const botaoExcluir = document.createElement('button')
                botaoExcluir.textContent = 'Excluir'
                //Add evento de cliqque ao botão de exclusão
                botaoExcluir.addEventListener('click', () => {
                    excluirCadastro(cliente._id) // chama a função de excluir
                })
                //Add o botão ao item da lista
                li.appendChild(botaoExcluir)
                //Add o item à lista na tela
                ul.appendChild(li)
            });
        })
        .catch(error => {
            console.error('Error', error)
        })
}
function excluirCadastro(id) {
    //Envia uma requisição DELETE para a API com o ID do cliente
    fetch(`https://crudcrud.com/api/37f74c1860524de6aa415b5b55da30ca/cadastros/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error ('Erro ao excluir cadastro')
        }
        listarCadastros() //Atualiza lista após a exclusão
    })
    .catch(error => {
        console.log('Erro ao excluir', error)
    })
}
// Quando a página for carregada, chama a função para listar os cadastros
window.addEventListener('DOMContentLoaded', listarCadastros)
// Adiciona um ouvinte de evento para o envio do formulário
form.addEventListener('submit', cadastrar)