
function calcular(operadores){
    let numeroI = document.getElementById('numeroI').value
    let numeroII = document.getElementById('numeroII').value
    numeroI = parseFloat(numeroI)
    numeroII = parseFloat(numeroII)
    let resultado = document.getElementById('resultado')

    if(isNaN(numeroI)||isNaN(numeroII)){
        resultado.innerHTML = 'Por Favor preencha os espaços com números válidos!'
        return
    }
    resultado.innerHTML = ''
    resultado.style.color= 'black'
    switch (operadores){
        case 'multiplicar':
            resultado.innerHTML = `<br>${numeroI} X ${numeroII} = ${numeroI*numeroII}`
            break
        case 'dividir':
            if(numeroII !== 0 ){
            resultado.innerHTML = `<br>${numeroI} / ${numeroII} = ${numeroI/numeroII}`
        }else{
            resultado.innerHTML = 'Por Favor preencha os espaços com números válidos!'
        }
        break
        case 'somar':
            resultado.innerHTML = `<br>${numeroI} + ${numeroII} = ${numeroI+numeroII}`
            break
        case 'subtrair':
            if(numeroI - numeroII < 0){
                resultado.style.color = 'red'

            }
            resultado.innerHTML = `<br>${numeroI} - ${numeroII} = ${numeroI - numeroII} `
            break
}           
}