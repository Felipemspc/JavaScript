function somar(){
    let n1 = document.getElementById("n1").value;
    n1 = parseFloat(n1);
    let n2 = document.getElementById("n2").value;
    n2 = parseFloat(n2);
    let total = n1+n2;
    let resultado = document.getElementById("resultado")   
    resultado.textContent = `${n1}+${n2}= ${total}`
}