//Função que cria os elementos visuais para exibir um cliente na  lista
export function criarElementosCliente(cliente, aoExcluir) {
    const li = document.createElement('li') // cria um item da lista
    li.textContent = `${cliente.nome} - ${cliente.email}` //exibe o nome e o e-mail

    const botaoExcluir = document.createElement('button') //cria o botão de excluir
    botaoExcluir.textContent = 'Excluir'
    botaoExcluir.classList.add('botao-excluir')
    //quando o botão é clicado, executta a função exclusão
    botaoExcluir.addEventListener('click', () => aoExcluir(cliente._id))

    li.appendChild(botaoExcluir) // add o botão ao item da lista
    return li //retorna o item completo
}
    