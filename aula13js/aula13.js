//Sintaxe do IF: if(Expressão ou teste lógico) se for verdadeiro ele vai para => {     } se for falsa ele continua a execução apartir das chaves

/*let num=110

if(num > 10){
    console.log("Numeral maior que 10")
    if(num > 50)
    console.log("Numeral maior que 50")
} 
//há casos em que devemos testar uma nova condição antes de executar o trecho de código alternativo. Uma forma de escrever essa verificação é utilizando else if.
else if(num > 5){
    console.log("Numeral  esta entre  6 e 10")
}

else{
    console.log("Numeral menor ou igual a 5")
}

console.log("Fim do programa")
*/

let energia=100
let clima="chovendo"

if(energia>70 && clima=="sol"){
    console.log("Vou para a praia")
}
else{
    console.log("Vou ao cinema")
}

console.log("Fim do programa")