/*
&& and ou e
|| or no caso é o "ou"
! not ou não (Inverte os resultados)
*/

/*
TABELA DO && (and ou e)
V && V = V
V && F = F
F && V = F
F && F = F
*/ 

/*
TABELA DO || (or, ou)
V || V = V
V || F = V
F || V = V
F || F = F
*/ 


/*
let n1=10,n2=5,n3=15,n4=2

console.log((n1>n2)&&(n1>n3))  console: false
*/


//Para aparecer escrita no console basta eu por o que eu quero falar dentro de ""
let n1=10,n2=5,n3=15,n4=2
if ( (n1>n2) && (n3>n4) ){
    console.log("verdadeiro")
}else{
    console.log("Falso")
}