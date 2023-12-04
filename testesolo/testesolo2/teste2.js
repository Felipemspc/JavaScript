function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var nascimento = document.getElementById("nascimento").value;
  var resultado = document.getElementById("resultado");
  

  if (nascimento == 0 || nascimento > ano) {
    alert("[ERROR!]Preencha Corretamente os dados!");
  } else {
    var radsex = document.getElementsByName("radsex");
    var idade = ano - Number(nascimento);
    var genero = "";
  }
  if (radsex[0].checked) {
    genero = "Homem";

    if (idade <= 10 || idade == 0) {
      resultado.innerHTML = `Detectamos uma criança ${genero} de ${idade} anos.`;
      
      
    } else if (idade <= 20) {
      resultado.innerHTML = `Detectamos um jovem ${genero} de ${idade} anos.`;
      
    } else if (idade <= 60) {
      resultado.innerHTML = `Detectamos um adulto ${genero} de ${idade} anos.`;
    
    } else {
      resultado.innerHTML = `Detectamos um senhor ${genero} de ${idade} anos.`;
     
    }
  } else if (radsex[1].checked) {
    genero = "Mulher";
  }
  if (idade <= 10 || idade == 0) {
    resultado.innerHTML = `Detectamos uma criança ${genero} de ${idade} anos.`;
  } else if (idade <= 20) {
    resultado.innerHTML = `Detectamos uma jovem ${genero} de ${idade} anos.`;
  } else if (idade <= 60) {
    resultado.innerHTML = `Detectamos uma ${genero} Adulta de ${idade} anos.`;
  } else {
    resultado.innerHTML = `Detectamos uma senhora ${genero} de ${idade} anos.`;
  }
}
