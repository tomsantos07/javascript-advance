let pessoa = {
  "primeiroNome": "Carlos",
  "ultimoNome": "Dias"
  }

// console.log(pessoa["primeiroNome"]);
// console.log(pessoa["ultimoNome"]);

console.log(pessoa.primeiroNome);
console.log(pessoa.ultimoNome);

pessoa.idade = 27;
pessoa.sexo = 'masculino'

console.log(pessoa);
// {
//   primeiroNome: 'Carlos',
//   ultimoNome: 'Dias',
//   idade: 27,
//   sexo: 'masculino'
// }

delete pessoa.idade;

console.log(pessoa);

function dizerOi() {
  console.log("Oi, eu sou uma pessoa.");
}

//da mesma forma que pessoa.idade = 27 | agora a função está integrada ao objeto
pessoa.falar = dizerOi

pessoa.falar()

console.log(pessoa);
// {
//   primeiroNome: 'Carlos',
//   ultimoNome: 'Dias',
//   sexo: 'masculino',
//   falar: [Function: dizerOi]
// }

