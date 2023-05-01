Objetivos
Nesta semana entenderemos como é estruturado o DOM, e
estudar como modificar elementos visuais em uma página da
web utilizando JavaScript.

2.1 O que é o “Document Object Mode” (DOM)
Com os conhecimentos básicos em linguagem de programação sabemos que uma
página web é um documento, e que este documento pode ser manipulado e exibido como
fonte HTML, ou ainda na janela de um navegador.
Seguiremos agora para a manipulação do visual, para isso é importante entendermos
o conceito de “Document Object Mode” (DOM), e algumas de suas aplicações. Nesse
sentido, temos o DOM como a representação dos dados que vão constituir a estrutura,
bem como, o assunto que estará presente no documento da Web.
Podemos pensar no DOM como uma interpretação orientada aos objetos da página
da web, onde se pode fazer alterações a partir de uma linguagem de programação como
JavaScript.
Para que possamos manipular o visual é necessário que tenhamos acesso à árvore
DOM do navegador. Neste caso, o grande responsável em JavaScript é o objeto
document. Sendo assim, quando algo for criado pelo navegador Web, podemos acessá-lo
a partir do objeto Javascript document. Existem diversos métodos que o objeto document
permite o acesso, podemos ver alguns destes e suas execuções no quadro a seguir:

Método                    Executa
createElement             Cria um nodo elemento na página.
documentElement           Captura o elemento raiz <html> de um documento HTML.
getElementsByTagName      Retorna um array dos elementos com o mesmo nome.
getElementById            Busca um elemento da página Web com o uso do atributo id do elemento.
Tabela 1 - Métodos básicos para manipulação do DOM.

Para entendermos melhor a relação entre DOM e o JavaScript pense da seguinte
maneira: Página Web = DOM + JavaScript. Podemos observar que o conteúdo das
páginas Web são armazenados no DOM e são acessados via JavaScript, logo a junção de
ambos constituem a representação estrutural de toda a aplicação.
Na figura abaixo, temos um exemplo de árvore DOM de uma página Web, e nele
conseguimos observar que os elementos da página Web estão todos acessíveis para
serem manipulados.

No geral, podemos pensar nas páginas Web como árvores, sendo assim, teríamos
como raiz o elemento HTML e seus “brotos” como head e o body, que geram outros brotos
sucessivamente. Aqueles elementos que não possuem “brotos”, são chamados de nós
folhas, sendo entendidos como elementos de apresentação, que no caso da figura acima
são os elementos: “titulo”; “meu texto”, “meu link”, “meu cabeçalho”.
Até então podemos percorrer uma árvore utilizando a variável document, e que
existem conexões,“brotos” e “folhas”, que possibilitam percorrer essa árvores DOM subindo
e descendo a partir dessas conexões. Lembrando que, os elementos “meu texto”, “meu
link”, “meu cabeçalho”, e “titulo”, são elementos especiais de nós mas também são nós,
sendo portanto, também agrupados pelo DOM.

# 2.1 Acessando e modificando o DOM
A partir dos conhecimentos acumulados até agora vamos entender como modificar
HTML a partir do JavaScript. Para que seja possível navegar através do código é
importante que se tenha uma identificação única, e para isso se atribui um ID. Nesse
sentido, cada elemento no documento terá uma identificação específica, ou seja, seu
próprio ID. Utilizamos, o “getElementById” para optar por um elemento tomando como
referência a identificação ID, sendo possível buscar e retornar o elemento a partir do seu
identificador, como podemos observar no código abaixo:

<html>
<head>
<title>Cadastro</title>
</head>
<body>
<label>Digite o seu nome</label>
<input id="nome">
<script>
let inputNome = document.getElementById("nome");
console.log(inputNome);
</script>
</body>
</html>
 
No código será exibido no console “<input id="nome">”, que é o elemento HTML
que tem o id “nome”, retornando, portanto o elemento a partir do seu identificador.
Devemos ficar atentos em relação ao uso do parâmetro ID, uma vez que este possui
sensibilidade em relação a letras maiúsculas e minúsculas, sendo necessária atenção para
que não seja retornado valor nulo.

Dando continuidade, para que possamos fazer alterações do conteúdo ao longo de
uma página Web (DOM), utilizando o document.getElementById associado a innerHTML
ou ao innerText. Apesar do innerHTML e innerText serem entendidos como elementos
de modificação, eles possuem notáveis diferenças, o innerHTML é responsável por alterar o
conteúdo do elemento a partir do elemento HTML, enquanto que o innerText altera o
conteúdo do elemento apenas como texto, iremos entender melhor essas diferenças a
partir do exemplo abaixo,

<html>
<head>
<title>Teste</title>
</head>
<body>
<p id="texto">Texto aqui</p>

<p id="conteudo">Nada aqui</p>

<button onclick="mudar()">Mudar</button>

<script>
function mudar(){
document.getElementById("texto").innerText = "Novo texto";
document.getElementById("conteudo").innerHTML = "Texto com <b>HTML</b>";
}
</script>

</body>
</html>