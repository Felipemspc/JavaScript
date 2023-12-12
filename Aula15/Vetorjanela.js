
let valores = [8,2,5,7,9,4]
valores.sort()
// console.log(valores)

for (let pos = 0 ; pos < valores.length ; pos++ ){
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
    
}


for(let pos in valores){
    console.log(`A posição: ${pos} tem valor: ${valores[pos]}.`)
}

/*
let num =[0,9,2,3,5]
num.sort()
console.log(`${num}`)
console.log(`O vetor tem ${num.length} Posições.`)
num.push(6)
num.sort()
console.log(`${num}`)
for(let pos = 0 ; pos < num.length ; pos++){
    console.log(`O Número: ${num[pos]} tem posição:${pos} `)
}

*/