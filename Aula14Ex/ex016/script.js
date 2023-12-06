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
  }else{
    resultado.innerHTML = `Contando: <br>`
  }

  
 

  // checando se passo é negativo ou 0
  if (passo <= 0) {
    alert ("Passo inválido! CONSIDERANDO PASSO = 1!")
    passo = 1
  }
  if( inicio < fim ){
    //contagem crescente
      for (c = inicio; c <= fim; c += passo) {
      resultado.innerHTML += `${c} 👉 `;
    }
  resultado.innerHTML += "🏁";
  }else {
    //contagem regressiva
    for(c = inicio ; c>=fim ; c -= passo ){
      resultado.innerHTML += ` ${c} 👉 `
    }
    resultado.innerHTML += "🏁";
  }
  
  
  
 
}
