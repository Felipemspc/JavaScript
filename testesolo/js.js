function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var resultado = document.getElementById("resultado");
  var datanascimento = document.getElementById("datanascimento").value;
 
  if (datanascimento == 0 || datanascimento > ano) {
    alert("[ERROR] Verifique os dados e preencha corretamente!");
  } else {
    var fsexo = document.getElementsByName("radsexo");
    var idade = ano - Number(datanascimento);
    var genero = "";
  }
  if (fsexo[0].checked) {
    genero = "Homem";
        
    if (idade >= 0 && idade < 10) {
      resultado.innerHTML = `Detectamos um ${genero} de ${idade} anos.`;
    } else if (idade < 21) {
      resultado.innerHTML = `Detectamos um ${genero} de ${idade} anos.`;
    } else if (idade <= 60) {
      resultado.innerHTML = `Detectamos um ${genero} de ${idade} anos.`;
    } else {
      resultado.innerHTML = `Detectamos um Senhor de ${idade} anos.`;
    }
  } else if (fsexo[1].checked) {
    genero = "Mulher";
    if (idade >= 0 && idade < 10) {
      resultado.innerHTML = `Detectamos uma ${genero} de ${idade} anos.`;
    } else if (idade < 21) {
      resultado.innerHTML = `Detectamos uma ${genero} de ${idade} anos.`;
    } else if (idade <= 60) {
      resultado.innerHTML = `Detectamos uma ${genero} de ${idade} anos.`;
    } else {
      resultado.innerHTML = `Detectamos uma Senhora de ${idade} anos.`;
    }
  }
}
