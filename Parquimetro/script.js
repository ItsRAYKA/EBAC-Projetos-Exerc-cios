let recebeValor = document.getElementById("recebeValor"); //valor inserido

let tempo = document.getElementById("tempo");
let troco = document.getElementById("troco");

//tabela de Preços
const valores = {
  1.0: 30,
  1.75: 60,
  3.0: 120,
};
// transforma o objeto em lista
const listaValores = Object.entries(valores);

class Parquimetro {
  constructor(
    recebeValor,
    tabelaPrecos,
    tempo,
    troco,
    valorMaximo = 3.0,
    minutos = null,
    trocoFinal = 0,
    preco = 0
  ) {
    this.recebeValor = recebeValor;
    this.tabelaPrecos = tabelaPrecos;
    this.tempo = tempo;
    this.troco = troco;
    this.valorMaximo = valorMaximo;
    this.trocoFinal = trocoFinal;
    this.minutos = minutos;
    this.preco = preco;
  }

  calcularTempo() {
    const resultado = listaValores.find(
      ([preco, minutos]) => this.recebeValor === Number(preco)
    );
    // se o resultado existe então pegue minutos
    if (resultado) {
      [this.preco, this.minutos] = resultado;

      this.minutos = this.minutos;
    } else if (this.recebeValor < 1.0) {
      this.minutos = null; //valor insuficiente
    } else {
      this.minutos = 120; //  valor acima da tabela
    }
  }

  calcularTroco() {
    //valor máximo da tabelha ('último preço')
    this.valorMaximoTabela = Number(listaValores[listaValores.length - 1][0]);

    if (this.recebeValor > this.valorMaximo) {
      this.trocoFinal = this.recebeValor - this.valorMaximo;
    } else {
      this.trocoFinal = 0;
    }
  }

  exibirResultado() {
    //mostra tempo e troco ou mesagem de erro
    if (this.minutos === null) {
      alert("Valor insuficiente!");
      tempo.textContent = "";
      troco.textContent = "";
      return;
    }
    tempo.textContent = `Tempo: ${this.minutos} minutos`;
    troco.textContent = `Troco: R$ ${this.trocoFinal.toFixed(2)}`;
  }
}
const infoParquimetro = new Parquimetro();
const botao = document.getElementById("botaoCalc");

botao.addEventListener("click", () => {
  infoParquimetro.recebeValor = Number(recebeValor.value); //pega valor digitado

  infoParquimetro.calcularTempo();
  infoParquimetro.calcularTroco();
  infoParquimetro.exibirResultado();
});
