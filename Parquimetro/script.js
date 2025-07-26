// Cria o molde Parquimetro + atributos 
class Parquimetro {
    constructor(valor) {
        this.valor = valor;
    }
    //cria o método (ações)
    calcularTempo() {
        let tempo = 0;
        let troco = 0;
        let mensagem = "";

        if (this.valor >= 3) {
        tempo = 120;
        troco = this.valor - 3;
    } else if (this.valor >= 1.75) {
        tempo = 60;
        troco = this.valor - 2;
    } else if (this.valor >= 1){
        tempo = 30;
        troco = this.valor - 1;
    } else {
        mensagem = "Valor insuficiente!";
    }

    return {
      tempo: tempo,
      troco: troco,
      mensagem: mensagem
    };
  }
}
document.getElementById('botao').addEventListener('click', function() { 
    
// 2. Pegar valor digitado e converter para número
const input = parseFloat(document.getElementById("recebeValor").value);

// 3. Criar objeto do parquímetro com esse valor
const parquimetro = new Parquimetro(input);

// 4. Chamar o método da classe
const resultado = parquimetro.calcularTempo();

// 5. Mostrar os dados 
const tempoElemento = document.getElementById('tempo');
const trocoElemento = document.getElementById('troco');

if (resultado.mensagem) {
    tempoElemento.textContent = resultado.mensagem;
    trocoElemento.textContent = '';
}else {
    tempoElemento.textContent = `Tempo: ${resultado.tempo} minutos`;
    trocoElemento.textContent = `Troco: R$${resultado.troco.toFixed(2)}`;
  }
})




