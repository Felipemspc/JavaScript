
function gerar(){
    var numero = document.getElementById('numero').value
    var resultado = document.getElementById('resultado')
    numero =parseInt(numero)
    var img = document.createElement('img')

    
    if (isNaN(numero) ){
        alert(`Digite um número válido!`)
        location.reload()
        return
    }
    resultado.innerHTML = ''
    for(c = 1; c<=10 ; c++){
        resultado.innerHTML += `${numero} x ${c} = ${numero*c} <br>`
        
        img.src = 'bebemenina.png'
        img.style.width='300px'
       
    }
    resultado.appendChild(img)

    
}