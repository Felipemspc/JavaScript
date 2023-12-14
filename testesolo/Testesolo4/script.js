function calcular(operadores) {
  let numeroI = document.getElementById("numeroI").value;
  numeroI = parseFloat(numeroI);
  let numeroII = document.getElementById("numeroII").value;
  numeroII = parseFloat(numeroII);
  let resultado = document.getElementById("resultado");

  if (isNaN(numeroI) || isNaN(numeroII)) {
    resultado.innerHTML = "Por favor Preencha com números Válidos!";
    return;
  }
  

   resultado.innerHTML = ''
   resultado.style.color = 'black'
  switch (operadores) {
    case "multiplicar":
      resultado.innerHTML += `${numeroI} X ${numeroII} = ${numeroI * numeroII} <br>`;
      break;
    case "somar":
      resultado.innerHTML += `${numeroI} + ${numeroII} = ${numeroI + numeroII}`;
      break;
    case "subtrair":
      resultado.innerHTML += `${numeroI} - ${numeroII} = ${numeroI - numeroII}`;
      if(numeroI - numeroII < 0){
        resultado.style.color = 'red'
      }      
      break;
    case "dividir":
      if (numeroII !== 0) {
        resultado.innerHTML += `${numeroI} / ${numeroII} = ${
          numeroI / numeroII
        }`;
      } else {
        resultado.innerHTML = "Não é possível dividir por zero!";
      }
      break;
    default:
      resultado.innerHTML = "Operador não reconhecido!";
  }
 
}
