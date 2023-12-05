function contar() {
  var inicio = document.getElementById("inicio").value;
  var fim = document.getElementById("fim").value;
  var passo = document.getElementById("passo").value;
  var resultado = document.getElementById("resultado");

  // Convertendo os inputs em números...
  inicio = parseInt(inicio);
  fim = parseInt(fim);
  passo = parseInt(passo);

  // validando os numeros adcionados aos inputs....
  if (isNaN(inicio) || isNaN(fim) || isNaN(passo)) {
    alert ("Por favor, insira números válidos.")
    return;
  }

  //Resetando campo resultado antes de iniciar...
  resultado.innerHTML = "";

  // checando se passo é negativo ou 0
  if (passo <= 0) {
    alert ("O passo deve ser um número positivo e diferente de zero.")
    return;
  }
  resultado.innerHTML = "Contando: <br>";
  for (c = inicio; c <= fim; c += passo) {
    resultado.innerHTML += `${c} 👉 `;
  }
  resultado.innerHTML += "🏁";
}
