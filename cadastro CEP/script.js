//ao sair do campo CEP, essa função será executada
document.getElementById('cep').addEventListener('blur', chamaAPI => {
    const API = chamaAPI.target; //pega o input onde o evento ocorreu 
    const cepInformado = API.value; // pega o valor digitado no inputt

    //se o cep não tiver 8 números, mostra um alert e interrompe a função.
    if (!(cepInformado.length === 8)) {
        alert('CEP deve conter 8 números.');
        return;
    }
    //usa-se aa função fetch para fazer uma requisição HTTP para o API ViaCEP
    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
        .then(response => response.json()) //quando a resposta chegar, converte para JSON para poder acessar os dados
        .then(data => { //Dados do endereço retornados pela 
            
            //se o CEP existir e não houver erro na resposta 
            if (!data.erro) {

                //preenchemos automaticamente os campos do formulário com os dados recebidos da API
                document.getElementById('logradouro').value = data.logradouro;
                document.getElementById('bairro').value = data.bairro;
                document.getElementById('cidade').value = data.localidade;
                document.getElementById('estado').value = data.uf;

                //se a API retornar erro, aviso que o CEP não foi encontrado
            } else {
                alert('CEP não encontrado.');
            }
            salvarFormulario(); //após preeencher os dados, salvamos no localStorage
        })
        .catch(error => {
            alert('Erro ao buscar o CEP.');
            console.error(error); //se a requisição falhar (ex.: sem internet), mostramos um alerta e erro no console
        });
});

function salvarFormulario() {
    const dadosFormularios = { //Criação de um objeto com os valores atuais do formulario
        cep: document.getElementById('cep').value,
        logradouro: document.getElementById('logradouro').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value
    };
    //Transforma o objeto em string e salva no localStorage
    localStorage.setItem('formulario', JSON.stringify(dadosFormularios));
}
// carregaa os dados salvos anteriormente no localStorage
function carregaFormularios() {
    const dadosSalvos = localStorage.getItem('formulario');


    if (dadosSalvos) {
        const formulario = JSON.parse(dadosSalvos); //Se existir dados, transforma de vollta em objeto
        
        //preenche o formulário com os valores salvos, ou com string vazia se algo estiver undefined
        document.getElementById('cep').value = formulario.cep || '';
        document.getElementById('logradouro').value = formulario.logradouro || '';
        document.getElementById('bairro').value = formulario.bairro || '';
        document.getElementById('cidade').value = formulario.cidade || '';
        document.getElementById('estado').value = formulario.estado || '';
    }
}

//funçãao extra para limpar o formulário e apagar os dados de armazenamento (caso o usuário queira)
function limparFormulario() {
    localStorage.removeItem('formulario');
    document.getElementById('cep').value = '';
    document.getElementById('logradouro').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

carregaFormularios(); //chamamos aa função assim que o script carregar, para preenncher o formulário com os dados salvos
