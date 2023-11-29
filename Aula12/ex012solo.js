
var agora = new Date()
var time= agora.getHours() 

if(time >= 0 && time <5){
    console.log(`Agora são ${time}H Horas. Aproveite sua larica.`)
}else if(time >=5 && time < 12){
    console.log(`Agora são ${time}H. Bom dia!`)
}else if(time >=12 && time < 18){
    console.log(`Agora são ${time}H. Boa Tarde!`)
}else{
    console.log(`Agora são ${time}H. Boa noite!`)
}