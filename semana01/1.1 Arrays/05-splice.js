let nome = ["Ana", "Alicia", "Betina", "Carlos"];

//remove 0 elementos a partir do índice 2, e insere "Tiago"
let removed = nome.splice(2, 0, "Tiago");
//nome é ["Ana", "Alicia", "Tiago" , "Betina", "Carlos"]
//removed é [], nenhum elemento removido

nome = ["Ana", "Alicia", "Betina", "Carlos"];
//remove 1 elemento do índice 3
removed = nome.splice(3, 1);
//nome é ["Ana", "Alicia" , "Tiago", "Carlos"]
//removed é ["Betina"]

nome = ["Ana", "Alicia", "Betina", "Carlos"];
//remove 1 elemento a partir do índice 2, e insere "Luna"
removed = nome.splice(2, 1, "Luna");
//nome é ["Ana", "Alicia", "Luna" , "Carlos"]
//removed é ["Tiago"]

nome = ["Ana", "Alicia", "Betina", "Carlos"];
removed = nome.splice(0, 2, "Leia", "Obi", "Luck");
//nome é ['Leia', 'Obi', 'Luck', 'Betina', 'Carlos']
//removed é ['Ana', 'Alicia']
//remove 2 elementos a partir do indice 3

nome = ["Ana", "Alicia", "Betina", "Carlos"];
removed = nome.splice(3,Number.MAX_VALUE);
//nome é ["Leia", "Obi", "Luck"]
//removed é ["Luna", "Carlos"]