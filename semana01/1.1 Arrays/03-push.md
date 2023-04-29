Já o método dos arrays push(), é semelhante à função que aprendemos
anteriormente, já que, assim como a função pop() esta função é genérica e pode ser
utilizada em objetos que implementam arrays. Porém, diferentemente da função pop() que
remove o último elemento ao final de um array e o retorna, a função push() é usada
quando se quer realizar a adição de elementos ao final de um array e retornar este mesmo elemento.
É importante lembrarmos que a propriedade “length” é responsável por determinar o
“comprimento”, ou seja, quantos elementos há no array. Sendo assim, um array vazio
possui length igual a 0. À medida que adicionamos elementos, esse comprimento é
aumentado e remover elementos o reduz. Ou seja, existe uma relação de dependência
entre a função push() e a propriedade “length”.
Veja o exemplo abaixo em que criamos um array, adicionamos 2 elementos, e
criamos uma variável total com o novo comprimento do array.