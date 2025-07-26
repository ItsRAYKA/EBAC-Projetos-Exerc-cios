function calcularImc(){
    //Entrada
    let Peso = document.getElementById("peso").value;
    let Altura = document.getElementById("altura").value;

    //Processamento
    let imcCalculado = Peso / (Altura * Altura)

    //Saída
     document.getElementById("Resultado").textContent = "IMC " +  imcCalculado.toFixed(2);

    //teste lógico classificação IMC
     let classificacao = " ";

     if (imcCalculado < 18.5) {
        classificacao = "Abaixo do peso";
     }
     else if (imcCalculado >= 18.5 && imcCalculado <=24.9) {
        classificacao = "Peso normal";
     }

     else if (imcCalculado >= 25 && imcCalculado <= 29.9) {
           classificacao = "Sobrepeso";
     }
     
     else if (imcCalculado >= 30 && imcCalculado <= 34.9) {
        classificacao = "Obesidade Grau I";
     }

     else if (imcCalculado >= 35 && imcCalculado <= 39.9) {
        classificacao = "Obesidade Grau II";
     }

     else {
        classificacao = "Obesidade Grau III (Mórbida)";
     }

     document.getElementById("classificacaoIMC").textContent = "Classificação: " + classificacao
  
     
}