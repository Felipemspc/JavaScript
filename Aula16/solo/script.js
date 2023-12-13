
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


  