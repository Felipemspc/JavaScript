
function carregar(){
   
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem') 
    var data = new Date()
    var hora = data.getHours()    
    
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora <12 ){
        // bom dia
        img.src = "FotoManha.png"
        document.body.style.backgroundColor='rgb(141, 172, 174)'
    }else if(hora >= 12 && hora < 18){
        //boa tarde
        img.src = "FotoTarde.png"
        document.body.style.backgroundColor='rgb(244, 164, 87)'
        
    }else{
        //boa noite
        img.src = "FotoNoite.png"
        document.body.style.backgroundColor='rgb(9, 26, 28)'
    }
}

