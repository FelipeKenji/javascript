
//Spread: [...] Função: Concatenar os objetos. Para usar o spread eu tenho que colocar uma conotação de array([])

//Com o spread eu posso adicionar outros tipos de elementos além dos html 


/*
const jogador1={nome:"Felipe",energia:100,vidas:3,magia:150}
const jogador2={nome:"Gui",energia:100,vidas:3,magia:150,velocidade:80}
const jogador3={...jogador1,...jogador2}

console.log(jogador3)        console: {nome: 'Gui', energia: 100, vidas: 3, magia: 150, velocidade: 80}
*/



/* 
let array1 = [11, 22, 33, 44]
let array2 = array1

//observe que temos dois arrays
//sendo o segundo igual ao primeiro
//imprimindo temos os dois iguais
console.log('array1=' + array1)
console.log('array2=' + array2)

/* sairá assim correto
array1=11,22,33,44
array2=11,22,33,44



//agora observe se precisar mudar
//valores no array1 ou array2
//perceberá que a alteração 
//afetará os dois arrays

console.log('\n\n')
console.log('alterado dados sem Spread')
array2[0] = 'LL'
array2[1] = 'OO'
array2[2] = 'OO'
array2[3] = 'LL'

//observe o resultado
//algo deu errado era pra ser 
//valores diferentes em cada array
console.log('array1=' + array1)
console.log('array2=' + array2)

/* sairá assim hummm
array1=LL,OO,OO,LL
array2=LL,OO,OO,LL


//isso acontece porque que ao fazer
// array2=array1
//não é criado de fato um novo array
//mas uma referência um apelido
//fica espelhado

console.log('\n\n')
console.log('alterado dados sem Spread')
array1[0] = '--'
array1[1] = 'TT'
array1[2] = '=='
array1[3] = '\\'
//observe o resultado
console.log('array1=' + array1)
console.log('array2=' + array2)
/*sairá assim
array1=--,TT,==,\\
array2=--,TT,==,\\


//agora se usar o operador SPREAD
//teremos uma cópia
console.log('\n\n')
array1 = [11, 22, 33, 44]
array2 = [...array1]
//temos agora uma cópia independente
console.log('array1=' + array1)
console.log('array2=' + array2)

/* sairá assim correto
array1=11,22,33,44
array2=11,22,33,44



//alterando
console.log('\n\n')
console.log('alterando dados depois de usar Spread')
array2[0] = 'LL'
array2[1] = 'OO'
array2[2] = 'OO'
array2[3] = 'LL'
console.log('array1=' + array1)
console.log('array2=' + array2)

/*sairá assim correto
array1=11,22,33,44
array2=LL,OO,OO,LL

*/

/*
const soma=(v1,v2,v3)=>{
    return v1+v2+v3
}
let valores=[1,5,4,10]

console.log(soma(...valores))
*/ 

//Ver quantos elementos ou funções eu posso trabalhar com o html collection
//objs1.

////Ver quantos elementos ou funções eu posso trabalhar com o spread (Tem que ver um por vez)
//objs2.

const objs1=document.getElementsByTagName("div")
const objs2=[...document.getElementsByTagName("div")]

objs2.forEach(element => {
    element.innerHTML="Kenji"
}); 

console.log(objs1)
console.log(objs2)



