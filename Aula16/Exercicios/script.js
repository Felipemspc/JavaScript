let numero = document.querySelector('input#numero');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#resultado');
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

function adicionar() {
    if (isNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value));
        let option = document.createElement('option');
        option.text = `O valor ${numero.value} foi adicionado.`;
        lista.add(option);
    } else {
        alert('Valor Inválido ou já encontrado na lista.');
    }
}


