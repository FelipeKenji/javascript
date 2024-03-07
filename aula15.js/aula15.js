/* for(inicialização da variável de controle/contador; condição de execução[Avaliar se eu vou continuar executando meu loop ou não]; controle){

Comandos que serão iterados nesse loop
------------------------
------------------------
------------------------
} 
*/

//Condição do for: Enquanto a condição for verdadeira ele itera se for falsa ele sai e continua a execução do programa
console.log("Início do Programa")

for(let i=0; i < 101; i +=9){
 if(i%2==0){
    console.log(i + " é par")
 } else{
    console.log(i + " é impar")
 }
}

console.log("Fim do Programa")