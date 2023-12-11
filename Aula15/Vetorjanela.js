
let valores = [8,2,5,7,9,4]
valores.sort()
// console.log(valores)

for (let pos = 0 ; pos < valores.length ; pos++ ){
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}


for(let pos in valores){
    console.log(`A posição: ${pos} tem valor: ${valores[pos]}.`)
}