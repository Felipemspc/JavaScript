var agora = new Date();
var diaSem = agora.getDay();

/*
0 = domingo
1 =segunda
2 = terça
3 =quarta
4 =quinta
5 = sexta
6 =sábado
*/

switch (diaSem) {
  case 0:
    console.log("Hoje é Domingo!");
    break;
  case 1:
    console.log("Hoje é Segunda-Feira!");
    break;
  case 2:
    console.log("Hoje é Terca-Feira!");
    break;
  case 3:
    console.log("Hoje é Quarta-Feira!");
    break;
  case 4:
    console.log("Hoje é Quinta-Feira!");
    break;
  case 5:
    console.log("Hoje é Sexta-Feira!");
    break;
  case 6:
    console.log("Hoje é Sábado!");
  default:
    console.log("[ERROR] Dia Inválido");
}
