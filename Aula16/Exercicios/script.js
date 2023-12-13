let numero = document.querySelector('input#numero')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#resultado')
let valores = []

function isNumero(n){
    if(Number(n)>= 1 && Number(n)<= 100){
    return true
} else{
    return false
}



function islista(n , l ){
    if(l.indexod(Number(n))!= -1){
        return true
    }else{
        return false
    }

}

function adcionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        alert('Tudo OK!')
    }else{
        alert('Valor Inválido ou já encontrado na lista.')
    }
}

}