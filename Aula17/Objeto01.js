let amigo = {nome: 'José' ,
 sexo: 'M', 
 peso: 85.4,
engordar(p = 0){
    console.log('Engordou')
    this.peso += p
    
}}

amigo.engordar(5)

/*let peso = amigo.peso
if(amigo.peso > 100){
    console.log(`O seu peso é de ${peso}, Faça uma dieta urgente!`)
}else{
}
*/
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)

