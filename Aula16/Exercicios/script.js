let numero = document.querySelector("input#numero");
let lista = document.querySelector("select#flista");
let res = document.querySelector("div#resultado");
let valores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  }
}

function adcionar() {
  if (isNumero(numero.value) && !inLista(numero.value, valores)) {
    valores.push(Number(numero.value));
    let option = document.createElement("option");
    option.text = `valor ${numero.value} adicionado.`;
    lista.appendChild(option);
    res.innerHTML = "";
  } else {
    alert("Valor Inválido ou já encontrado na lista.");
  }
  numero.value = "";
  numero.focus();
}

function finalizar() {
  if (valores.length == 0) {
    alert("Sua lista está vazía!");
  } else {
    let tot = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;
    for (let pos in valores) {
      soma += valores[pos];
      media = soma / tot;
      if (valores[pos] > pos) maior = valores[pos];
      if (valores[pos] < menor) menor = valores[pos];
    }
    res.innerHTML = "";

    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados!.<br> </p>`;

    res.innerHTML += `<p>O maior número é ${maior}.<br></p>`;
    res.innerHTML += `<p>O menor número é ${menor}.</p>`;
    res.innerHTML += `<p>A soma de todos os números é: ${soma}.</p>`;
    res.innerHTML += `<p>A média é: ${media}</p>`;
  }
}
