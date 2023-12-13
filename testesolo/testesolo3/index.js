
function calcular(){
    let numero = document.getElementById('numero').value
    let resultado = document.querySelector('section#sec2>div')
    numero = parseFloat(numero)
    resultado.innerHTML = ''
    if(isNaN(numero)){
        resultado.style.color = 'red'
        resultado.innerHTML = 'Por favor introduza um número válido!' 
        return
    }
    resultado.style.color = 'whitesmoke'
    resultado.innerHTML= '' 

    for(let n = 1 ; n <= 10 ; n++){
        resultado.innerHTML += `${numero} X ${n} = ${numero * n}<br>`
    }

}