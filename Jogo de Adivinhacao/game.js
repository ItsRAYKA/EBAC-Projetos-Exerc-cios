    //Entrada
let Computer = Math.floor(Math.random() * 100) + 1;
let Tent = 0;
const maxTentativas = 10;

    //processamento
function adicionaPalpite () {
    const Obtempalpite = Number(document.getElementById('palpite').value); 

    //validação
    if (isNaN(Obtempalpite) || Obtempalpite< 1 || Obtempalpite > 100){    
    alert('Digite um número entre 1 e 100.')
    return;
    }

    Tent++;

    //comparação
    if (Obtempalpite === Computer) {
        document.getElementById('resultado').textContent = 'Você acertou!!';
        return;
    
    }   else if (Obtempalpite < Computer) {
        document.getElementById('dicas').textContent = 'O número secreto é maior!';

    }   else {
        document.getElementById('dicas').textContent = 'O número secreto é menor!';
    }

    //tentativas restantes
    const tentativasRestantes = maxTentativas - Tent;
    document.getElementById('tentativas').textContent = `Tentativas restantes: ${tentativasRestantes}`;

    //Tentativas acabadas
    if (Tent >= maxTentativas) {
        document.getElementById('resultado').textContent = `Você perdeu! O número era ${Computer}`;
    }

}
    //Ativando o botão
document.getElementById('buttonChutar').addEventListener('click', adicionaPalpite);