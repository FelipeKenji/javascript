"use strict"

/*De forma resumida: O var pode ser declarado sem ser inicializado e está disponível fora do seu escopo. O let pode ser declarado sem ser inicializado e não está disponível fora do seu escopo. O const não pode ser declarado sem ser inicializado e não está disponível fora do seu escopo.*/

//Com o var eu acesso o "nome" fora do escopo coisa que não é interessante

//Podemos ver também que o console imprime mesmo estando em um escopo diferente

if(true){
    var nome="Felipe"
}

console.log(nome)



//para resolver o problema acima usamos LET fazendo com que o console não tenha acesso ao let por causa de que eles estão em escopos diferentes

//para let funcionar tudo tem que estar dentro das chaves

//let pode ter seu valor alterado

function teste(){
    let nome="Felipe"
    if(true){
        console.log("Dentro do IF do teste" + nome) 
    }
    console.log("dentro de teste: " + nome)
}

teste()
//ele só imprime no console por conta da var lá em cima
console.log("fora de teste: " + nome)



//valor da constante não pode ser alterado

const curso="Javascript"
console.log(curso)