
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano').value
    var res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if (fano.length == 0 || fano > ano){
        alert(`[ERRO]Verifique os dados e tente novamente!`)
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano -Number(fano)
        var genero =''
        if(fsex[0].checked){
            genero ='Homem'
           if(idade >= 0 && idade <10){
            //criança
            res.innerHTML= `Detectamos uma criança de ${idade} anos.`
            img.setAttribute('src', 'bebemenino.png')
            img.style.width= '300px'
            
           }else if(idade < 21){
            //jovem
            res.innerHTML= `Detectamos um jovem de ${idade} anos.`
            img.setAttribute('src', 'menino.png')
            img.style.width= '300px'
           } else if (idade <= 60 ){
            //adulto 
            res.innerHTML= `Detectamos um ${genero} de ${idade} anos.`
            img.setAttribute('src', 'homem.png')
            img.style.width= '300px'
           }else{ 
            //idoso
            res.innerHTML= `Detectamos um Senhor de ${idade} anos.`
            img.setAttribute('src', 'senhor.png')
            img.style.width= '300px'
           }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <10){
                //criança
                res.innerHTML= `Detectamos uma criança de ${idade} anos.`
                img.setAttribute('src','bebemenina.png')
                img.style.width= '300px'
               }else if(idade < 21){
                //jovem
                res.innerHTML= `Detectamos uma jovem de ${idade} anos.`
                img.setAttribute('src', 'Menina.png')
                img.style.width= '300px'
               } else if (idade <= 60 ){
                //adulto
                res.innerHTML= `Detectamos uma ${genero} de ${idade} anos.`
                img.setAttribute('src', 'Mulher.png')
                img.style.width= '300px'
               }else{ 
                //idoso
                res.innerHTML= `Detectamos uma Senhora de ${idade} anos.`
                img.setAttribute('src', 'Senhora.png')
                img.style.width= '300px'
               }
               
        }

        res.style.textAlign='center'
        //res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)   
        
        
        
    }
}
