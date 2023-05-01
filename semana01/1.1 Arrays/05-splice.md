Seguimos agora para o método splice(): este tem o objetivo de alterar os conteúdos
presentes na lista, inserindo elementos novos ao mesmo tempo que remove os elementos
antigos. Para utilizarmos essa função devemos respeitar algumas condições em relação ao
índice a qual deve iniciar a alterar a lista, como por exemplo: se o índice for negativo será
iniciado a partir daquele número de elementos a partir do fim. Além disso, caso o índice
seja maior que o tamanho total da função, nenhum elemento será alterado.
É importante também que se tenha um inteiro assinalando o número de elementos
que serão removidos, e para isso é importante especificar o parâmetro deleteCount, já que
existem também condições em relação a ele, pois caso, maior que o número de elementos
restantes na lista iniciando pelo índice, todos os elementos serão deletados desde o início
até o final da lista, além disso, caso o deleteCount seja 0 nenhum elemento é removido.
Ademais, quanto aos elementos que serão adicionados a lista, caso não se especifique o
elemento a função Splice() removerá elementos da lista. Quanto ao retorno do elemento 
removido da lista, é importante nos atentarmos a algumas condições, como, caso nenhum
elemento seja removido é retornada uma lista vazia, porém, se removermos apenas um
elemento, irá retornar uma lista contendo apenas um elemento.
Como já entendemos as condições associadas ao uso da função splice(), vejamos a
aplicação a partir do exemplo abaixo.