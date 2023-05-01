Para darmos continuidade ao conteúdo do curso iremos agora entender o conceito
de objetos em JavaScript, e seu uso. O objeto pode ser visto como um acervo de
propriedades, e estas propriedades são definidas como uma sintaxe de par chave : valor,
onde a chave pode ser uma string enquanto que o valor pode ser uma informação
qualquer. Para criarmos um objeto é preciso utilizar a sintaxe literal do objeto, como
podemos observar no exemplo a seguir.

Neste código, podemos observar o número de propriedades e seus respectivos valores: o
número de propriedades foi 2, a primeira assinalada pela chave “primeiroNome” com valor
de string “Carlos”, e a segunda assinalada pela chave “ultimoNome” com valor de string
“Dias”. Considerando como identificamos as propriedades e valores em um código, iremos
acessar a propriedade de um objeto, para isso, utiliza-se duas sintaxes, “Notação de array”
e “Notação de Ponto”. Na notação do tipo array, acessamos as propriedades do objeto a
partir de colchetes [ ], porém caso se tenha espaço no nome atribuído utiliza-se aspas “ “,
como podemos observar no exemplo a seguir:

Outra maneira, mais usual quando se trata de manipulação de objetos em
JavaScript, é utilizando ponto. Veja o exemplo a seguir:

Considerando que conseguimos acessar as propriedades do objeto, podemos
também realizar a operação de adicionar, excluir ou modificar uma propriedade. No
exemplo abaixo podemos observar a adição da propriedade idade ao objeto pessoa
atribuindo o valor de 27 a ela.

Obs: por minha conta, acrescentei sexo: masculino, para praticar.

Observe que a chave idade não existia anteriormente, e por isso ela é criada e
adicionado o valor no objeto. Se desejarmos modificar uma propriedade, basta usar a
mesma notação, especificando uma chave já existente no objeto. Enquanto que, no
exemplo abaixo, iremos remover a propriedade idade do objeto pessoa

É possível também criar funções integradas ao objeto, onde se adiciona métodos
que serão utilizados como parte desse objeto. Para isso, atribui-se uma propriedade ao
objeto, e chama-se a função a partir dessa propriedade. Assim, quando se tem uma função
como propriedade de um objeto, chamamos essa condição de método. O código abaixo,
exemplifica o uso da função através da propriedade “falar” com função dizerOi().
