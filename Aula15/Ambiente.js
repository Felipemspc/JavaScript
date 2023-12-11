let num = [5,2,1,3,7]
//substituindo a posição 3 pelo número 6
num[3] = 6

let b = 30

//outra forma de adcionar um número ou uma variável criada
num.push(9,b)
//num.length  mostra o tamanho do seu vetor '' array''
//num.sort  organiza todo seu vetor de forma crescente
// console.log(`O vetor tem ${num.length} posições. e os respectivos números são: ${num.sort()}.`)
console.log(`O primeiro número é: ${num[0]}, e o último número é: ${num[num.length-1]}`)    
let pos = num.indexOf(5)
console.log(`O valor 5 está na posição ${pos}`)
