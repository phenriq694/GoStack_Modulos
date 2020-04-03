<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>
<h2 align="center">
  Desafio do Módulo 5
</h2>

Este desafio tem como objetivo complementar a aplicação desenvolvida durante o módulo com novas funcionalidades que podem ser desenvolvidas com o conhecimento passado.

Proposta do desafio: https://github.com/Rocketseat/bootcamp-gostack-desafio-05#desafio-05-apliacação-com-reacjs

### Funcionalidades adicionadas:

1. Captando Erros:

Utilizando um try/catch na chamada a API do Github é possível saber quando um repositório informado não existe e alterar a cor do campo de input para mostrar ao usuário que houve um problema e o repositório não foi adicionado.

<p align="center">
  <img src="https://user-images.githubusercontent.com/54601930/78409288-a4b98580-75df-11ea-93c9-800e065d3ad2.gif" width="800px">
</p>

2. Repositório duplicado:

Fazendo uma pesquisa no estado dos repositórios armazenados utilizando o valor do input como comparação foi possível verificar se o repositório já estava cadastrado ou não, disprando um erro e ativando a função de aleterar a cor do campo de input, configurada acima.

<p align="center">
  <img src="https://user-images.githubusercontent.com/54601930/78410461-c36d4b80-75e2-11ea-9ac1-16b5fecf9e5e.gif" width="800px">
</p>

3. Filtro de estado:

Essa funcionalidade alterar as issues exibidas em tela de acordo com o estado delas (open, all, closed). Para fazer essa alteração foi criado mais dois estados no componente 'Repository' para armazenar as informações do estado atual de cada filtro, e assim saber qual filtro estava ativo e passar a informação correta de quais issues deveria ser retornado. Foi adicionado três botões para controlar qual filtro estaria ativo, chamando uma função que altera o estado 'filterIndex' que é o estado que armazena qual o index dos dados armazenado no estado 'filter' que esta ativo momento e chama outra função responsável por fazer o load dos novos dados retornados da API passando como parâmetro de filtro o elemento do estado 'filter' que foi escolhido pelo o usuário apertando o seu botão correspondente.

<p align="center">
  <img src="https://user-images.githubusercontent.com/54601930/78411067-c701d200-75e4-11ea-9f55-578be1c95ae4.gif" width="800px">
</p>

4. Paginação:

Foi adicionado dois botões na parte inferior da página para permitir que o usuário troque de página e encontre as outras issue do repositório de acordo com o filtro. Para isso foi adicionado também um novo estado no componente chamado 'page' que por padrão já começa com o valor 1. Quando um botão é acionado ele chamada uma função que utiliza a função para alterar o estado 'page' de acordo com qual botão foi acionado (next ou back), fazendo o cálculo para saber qual o número da página será armazenado no estado. Depois chamada a mesma função que faz o load das issues passando também como parâmetro a página que deve ser retornada. Lembrando que também passamos como parâmetro na requisição que deve ser retornado 5 issues por página.

<p align="center">
  <img src="https://user-images.githubusercontent.com/54601930/78411365-d2093200-75e5-11ea-9324-a938b99e9f39.gif" width="800px">
</p>
