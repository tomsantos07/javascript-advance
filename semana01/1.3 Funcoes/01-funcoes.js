// function square(numero) {
//   return numero * numero;
//   }

let num1 = 10,
num2 = 3,
nome = "Carlos";

// Essa função é definida no escopo global
function multiplica() {
return num1 * num2;
}

// Retorna 30
multiplica();

//Função aninhada
function getScore () {
let num1 = 1,
num2 = 3;
function add() {
return nome + " fez " + (num1 + num2) + " pontos";
}
return add();
}
getScore(); 
// Retorna "Carlos fez 4 pontos" 

//--------------------------------------------------------------------

function loop (x) {
  if (x >= 5) // "x >= 5" a condição de parada (equivalente a "!(x < 5)")
  return;
  // faça isso
  loop(x + 1); // chamada recursiva
  }
  loop(0);