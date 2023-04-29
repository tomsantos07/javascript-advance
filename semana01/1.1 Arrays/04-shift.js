const nomes = ["Ana", "Alicia", "Betina"];

console.log("nomes antes:" + nomes);
// nomes antes: ["Ana", "Alicia", "Betina"]

const shifted = nomes.shift();

console.log("nomes depois: " + nomes);
// nomes depois: ["Alicia", "Betina"]

console.log("Elemento removido: " + shifted);
// Elemento removido: Ana

// ---------------------------------------------------------------------------

const names = ["Ana", "Alicia", "Betina"];
while( (i = names.shift()) !== undefined ) {
console.log(i);
}
// Ana Alicia Betina
