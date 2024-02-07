/*
Bitwise
pegar o número decimal e ver como ele fica em binário, dps comparar os dois um em cima e o outro em baixo como se fosse uma tabela e ver quais números são equivalentes uns com os outros. Com o operador & quando se tem 0 e 1 sendo comparados retorna 0, com o operador | quando eu tiver 0 e 1 retorna 1

Bitwise XOR = ^ (Operador Bitwise) Quando não á equivalencia eu retorno 1 ou seja 1 com 1 retorna 0, 0 e 0 retorna 0, e 0 com 1 retorna 1 com esse operador vc recebe o número em decimal

Bitwise << = Deslocando 1 bit para a esquerda. Funcionalidade: Dobra (x2) o número de vezes que vc quiser, basta quantas vezes vc quer no lugar do número 1

let n1=10

let res=n1 << 1   console:20

let n1=10

let res=n1 << 2  console:40 


Bitwise >> = Deslocando 1 bit para a direita. Funcionalidade: Divide por 2 (/2) o número de vezes que vc quiser, basta quantas vezes vc quer no lugar do número 1

let n1=10

let res=n1 >> ou << 1  posso mudar esse número 1 para quantos eu quiser
*/

let n1=200

let res=n1 >> 6

console.log(res)