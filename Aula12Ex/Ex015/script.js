
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if (fano.value.length == 0 || fano.value > ano){
        alert(`[ERRO]Verifique os dados e tente novamente!`)
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano -Number(fano.value)
        var genero =''
        if(fsex[0].checked){
            genero ='Homem'
           if(idade >= 0 && idade <10){
            //criança
            img.setAttribute('src', 'bebemenino.png')
            img.style.width= '300px'
            
           }else if(idade < 21){
            //jovem
            img.setAttribute('src', 'menino.png')
            img.style.width= '300px'
           } else if (idade < 50 ){
            //adulto 
            img.setAttribute('src', 'homem.png')
            img.style.width= '300px'
           }else{ 
            //idoso
            img.setAttribute('src', 'senhor.png')
            img.style.width= '300px'
           }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <10){
                //criança
                img.setAttribute('src','bebemenina.png')
                img.style.width= '300px'
               }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'Menina.png')
                img.style.width= '300px'
               } else if (idade < 50 ){
                //adulto
                img.setAttribute('src', 'Mulher.png')
                img.style.width= '300px'
               }else{ 
                //idoso
                img.setAttribute('src', 'Senhora.png')
                img.style.width= '300px'
               }
               
        }

        res.style.textAlign='center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)   
        
        
        
    }
}
