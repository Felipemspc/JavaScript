
function contar(){
   var inicio = document.getElementById('inicio').value
   var fim = document.getElementById('fim').value
   var passo = document.getElementById('passo').value
   var resultado = document.getElementById('resultado')

   inicio = parseInt(inicio)
   fim = parseInt(fim)
   passo = parseInt(passo)

   if(isNaN(inicio) || isNaN(fim) || isNaN(passo)){
    alert('Preencha com um número válido!')
    return
   }
   if(passo <=0 ){
    alert('Passo Precisa ser preenchido com um número positivo!')
    return
   }
   resultado.innerHTML = ''
   var contador = 0

   for (var n = inicio ; n <= fim ; n += passo){

        resultado.innerHTML +=`Passo: ${n} <br>`
        contador++
   }
  
   resultado.innerHTML += `<br>Somando um total de ${contador} Passos.`

}