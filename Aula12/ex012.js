var agora = new Date()
var time = agora.getHours()

console.log(`Agora são ${time} Horas`)
if(time < 12 ){
    console.log('Bom dia!')
}else if(time < 18){
    console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}