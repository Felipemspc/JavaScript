const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tabuada(){
    rl.question("Digite um número!",(numero =>{
        for(let i = 1 ; i <= 10 ; i++){
            console.log(`${numero} x ${i} = ${numero*i}`) 
         }
         rl.close();
    }))
     
     
}

tabuada();