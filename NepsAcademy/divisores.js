const x = 10;
let divisores = ' ';
for( let i = 1 ; i <= x; i++){
    if(x % i ===0){
        divisores += `${i} `
    }}

console.log(`${divisores.trim()}`)




