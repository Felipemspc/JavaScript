function contar() {
    var inicio = document.getElementById('inicio').value;
    var fim = document.getElementById('fim').value;
    var passo = document.getElementById('passo').value;
    var c = 1;
    var resultado = document.getElementById('resultado');
    var contando = document.getElementsByTagName('p')[4]
    // Convertendo os inputs em números...
    inicio = parseInt(inicio);
    fim = parseInt(fim);
    passo = parseInt(passo);

    // validando os numeros adcionados nos inputs....
    if (isNaN(inicio) || isNaN(fim) || isNaN(passo)) {
        resultado.innerHTML = "Por favor, insira números válidos.";
        return;
    }

    // Resetando o campo de resultado antes de começar... 
    resultado.innerHTML = "Contando: <br>";
    
    // checando se passo é negativo ou 0
    if (passo <= 0) {
        resultado.innerHTML = "O passo deve ser um número positivo e diferente de zero.";
        return;
    }
    
    for (c = inicio; c <= fim; c += passo) {
        
        resultado.innerHTML += `${c} 👉 `;
    }
    resultado.innerHTML += "🏁";
} 