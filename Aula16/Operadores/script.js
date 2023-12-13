/*
function calcular(operador) {
    let numero1 = document.getElementById("numeroI").value;
    let numero2 = document.getElementById("numeroII").value;
    let resultado = document.getElementById("resultado");
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
    resultado.innerHTML = "";
  
    if (isNaN(numero1) || isNaN(numero2)) {
      alert("Preencha os espaços com valores válidos!");
      return;
    }
  
    switch (operador) {
      case 'multiplicar':
        resultado.innerHTML += `${numero1} X ${numero2} = ${numero1 * numero2}<br>`;
        break;
      case 'dividir':
        resultado.innerHTML += `${numero1} / ${numero2} = ${numero1 / numero2}<br>`;
        break;
      case 'somar':
        resultado.innerHTML += `${numero1} + ${numero2} = ${numero1 + numero2}<br>`;
        break;
      case 'subtrair':
        resultado.innerHTML += `${numero1} - ${numero2} = ${numero1 - numero2}<br>`;
        break;
      default:
        alert("Operação inválida!");
    }
  }

*/

/*
function multiplicar() {
  let numero1 = document.getElementById("numeroI").value;
  let numero2 = document.getElementById("numeroII").value;
  let resultado = document.getElementById("resultado");
  numero1 = parseFloat(numero1);
  numero2 = parseFloat(numero2);
  resultado.innerHTML = "";
  if (isNaN(numero1) || isNaN(numero2)) {
    alert("Preencha os espaços com valores válidos!");
    return;
  }
  resultado.innerHTML += `${numero1} X ${numero2} = ${numero1 * numero2}<br>`;
}

function dividir() {
  let numero1 = document.getElementById("numeroI").value;
  let numero2 = document.getElementById("numeroII").value;
  let resultado = document.getElementById("resultado");
  numero1 = parseFloat(numero1);
  numero2 = parseFloat(numero2);
  resultado.innerHTML = "";
  if (isNaN(numero1) || isNaN(numero2)) {
    alert("Preencha os espaços com valores válidos!");
    return;
  }
  resultado.innerHTML += `${numero1} / ${numero2} = ${numero1 / numero2}<br>`;
}

function somar() {
    let numero1 = document.getElementById("numeroI").value;
    let numero2 = document.getElementById("numeroII").value;
    let resultado = document.getElementById("resultado");
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
    resultado.innerHTML = "";
    if (isNaN(numero1) || isNaN(numero2)) {
      alert("Preencha os espaços com valores válidos!");
      return;
    }
    resultado.innerHTML += `${numero1} + ${numero2} = ${numero1 + numero2}<br>`;
  }

  function subtrair() {
    let numero1 = document.getElementById("numeroI").value;
    let numero2 = document.getElementById("numeroII").value;
    let resultado = document.getElementById("resultado");
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
    resultado.innerHTML = "";
    if (isNaN(numero1) || isNaN(numero2)) {
      alert("Preencha os espaços com valores válidos!");
      return;
    }
    resultado.innerHTML += `${numero1} - ${numero2} = ${numero1 - numero2}<br>`;
  }
  
*/

function calcular(operador) {
  let numeroI = document.getElementById("numeroI").value;
  let numeroII = document.getElementById("numeroII").value;
  let resultado = document.getElementById("resultado");
  numeroI = parseFloat(numeroI);
  numeroII = parseFloat(numeroII);

  if (isNaN(numeroI) || isNaN(numeroII)) {
    resultado.style.color = "red";
    resultado.innerHTML = "Por favor preencha os espaços com números válidos!";
    return;
  }
  resultado.style.color = "black";
  resultado.innerHTML = "";

  switch (operador) {
    case "multiplicar":
      resultado.innerHTML = `${numeroI} X ${numeroII} = ${numeroI * numeroII}`;
      break;

    case "dividir":
      if (numeroII !== 0) {
        resultado.innerHTML += `${numeroI} / ${numeroII} = ${
          numeroI / numeroII
        }`;
      } else {
        resultado.style.color = "red";
        resultado.innerHTML = "Não é possível dividir por zero!";
      }
      break;
    case "somar":
      resultado.innerHTML = `${numeroI} + ${numeroII} = ${numeroI + numeroII}`;
      break;
    case "subtrair":
      const resultadosubtracao = numeroI - numeroII
      resultado.innerHTML = `${numeroI} - ${numeroII} = ${numeroI - numeroII}`;
      if(resultadosubtracao < 0 ){
        resultado.style.color = 'red'
      }
      break;
    default:
      resultado.style.color = "red";
      resultado.innerHTML = "Operação não reconhecida!";
  }
}
