Agora nós iremos desbravar o universo das funções em JavaScript, lembrando que,
em linguagens de programação, as funções podem ser definidas como subconjuntos de
linhas de códigos, como se fosse um subprograma, que pode ser chamado por outro. Ou
seja, assim como nos laços de repetição, que nos permite ter blocos de código que vão ser
repetidos, nas funções também podemos fazer blocos, que serão utilizados em diferentes
locais do código e até mesmo repetidas vezes. Além disso, as funções podem receber
argumentos, ou seja, receber dados para usar dentro dos blocos de código

É importante salientar que uma função pode ter várias linhas e não
necessariamente precisa retornar algo ou receber algum argumento. Para retornar a
função é necessário utilizar a palavra reservada function, e na sequência, o nome da
função, a lista de argumentos para a função entre parênteses e separados por vírgulas, e
por último as declarações JavaScript que definem a função entre chaves { }.

Agora que relembramos o conceito de função, vamos exemplificar a declaração de
uma função, seu escopo e o uso de objetos de argumento. Para que possamos declarar
uma função é necessário nomeá-la e chamá-la, sendo assim, teremos abaixo um exemplo
de definição de uma função square.

No exemplo pudemos perceber que a função declarada (square) recebe um
argumento nomeado como "número", o que significa que será retornado o argumento da
função multiplicado por si mesmo, "número"x"número", onde a declaração return (en-US)
citada anteriormente irá especificar o valor retornado pela função.

Agora que relembramos o conceito de função, iremos exemplificar o escopo de uma
função e o uso de objetos de argumento. O escopo pode ser entendido como a
acessibilidade das funções, objetos e variáveis em diversas partes do código, ou seja, o
escopo irá definir o que pode ser acessado em uma parte específica do código. Nesse
sentido, em termos de acessibilidade podemos utilizar as funções, uma vez que, uma
função possui capacidade para acessar todas variáveis, bem como, funções definidas fora
do escopo onde ela está definida.
Nesse sentido, vamos agora a partir do exemplo abaixo verificar a possibilidade de
acesso das variáveis definidas na função hospedeira e os demais acessos.

Além do que vimos com o exemplo anterior, podemos utilizar as funções também
para chamar a si mesma, o nome dado a esse tipo de função é Recursiva, e para que isso
seja possível, podemos usar o nome da função, arguments.callee (en-US), ou ainda, uma
variável no escopo que se refere a função.
Quando uma função é recursiva, existem situações em que similar a laços de
repetição, já que na função recursiva também se tem a execução do código por diversas
vezes, além do que, ambas necessitam de uma condição, para que não se tenha um laço
ou recursão infinita. No exemplo a seguir podemos observar o uso de uma função
Recursiva.
