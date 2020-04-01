<h1 align="center">
  <img 
    alt="Introdução ao React" src="https://user-images.githubusercontent.com/54601930/73386759-30e0c100-42ae-11ea-8587-fc4a40e63e6a.png" 
    width="200px"
  />
</h1>
<h2 align="center">
  Introdução ao React
</h2>

Neste módulo foi apresentado como configurar e criar um projeto simples utilizando Reacjs. 

Contéudo do módulo:

- Configuração do ambiente - Nessa seção do módulo, aprendi configurações mais intermediárias de um projeto React como criar um projeto configurado com um comando, estilização de código, roteamento e estilização de componentes. Essa seção foi dividida em 5 aulas, sendo:

  - Criando projeto do zero: como criar um projeto através do comando 'create-reat-app' já com as configurações básicas;

    https://github.com/phenriq694/base_de_conhecimento/blob/master/react/1.%20Criando%20um%20projeto/1.%20Criando%20um%20projeto.md

  - ESLint, Prettier & EditorConfig: como estilizar e padronizar o código de um projeto React e aprimorar o desenvolvimento em time com todo o time seguindo um padrão independente do seu ambiente. 

  - Roteamento no React: como utilizar a biblioteca 'react-router-dom' do React para configurar rotas e como declarar cada componente na sua rota. 

    https://github.com/phenriq694/base_de_conhecimento/blob/master/react/Rotas/Roteamento%20no%20React.md

  - Styled Components: como utilizar a biblioteca 'styled-components' para estilizar os componentes React deixando o CSS mais escopado com a criação de 'tags' próprias para cada componente. 

    https://github.com/phenriq694/base_de_conhecimento/blob/master/react/Styled%20Components/Styled%20Components.md

  - Estilos Globais: como definir um estilo global para todos os componentes Reac, também utilizando o 'styled-components'.

    https://github.com/phenriq694/base_de_conhecimento/blob/master/react/Styled%20Components/Global%20Style.md

- Desenvolvendo a aplicação - Nessa seção construimos uma aplicação simples, que é alimentado por uma API já pronto, do Github, mas que inclui os principais fundamentos do React como o estado e a sua imutabilidade, proptypes e class components. Essa seção foi dividida em 9 aulas, sendo: 

  - Estilizando página Main: nessa aula iniciamos a aplicação que foi desenvolvida no módulo. Começamos a criar a estrura base dos componentes e estilizar um dels, 'Main', utilizando o 'styled-components' com um contéudo novo sobre essa ferramenta onde inserimos um atributo no elemento HTML, no caso o tipo 'submit' em um botão. 

    https://github.com/phenriq694/base_de_conhecimento/blob/master/react/Styled%20Components/Styled%20Components.md

  - Adicionando repositórios: nessa aula foi configurado a chamada na api do Github utilizando o 'axios' e a estrutura final do componente 'Main' com algumas alterações na estilização onde foi apresentado como estilizar elementos de acordo com o valor de uma propriedade do elemento e como inserir animações como a de rotação dentro do 'styled-components' e fazê-la ser exibida também denpendendo de um valor de atributo do elemento. 

    https://github.com/phenriq694/base_de_conhecimento/blob/master/react/Styled%20Components/Styled%20Components.md
    https://github.com/phenriq694/base_de_conhecimento/blob/master/react/M%C3%B3dulos/react-icons/react-icons.md

  - Listando repositórios: nessa aula foi configurado a listagem do elementos retornados da API e a estilização deles. 

  - Utilizando LocalStorage: como utilizar o LocalStorage do navegador para fazer a troca de informações como o estado do componente sem violar a imutabilidade dele. 

  - Navegação de rotas: como utilizar o elemento 'Link' do 'react-router-dom' para fazer o roteamento de um componente para o outro e também como passar parâmetros para que possa ser utilizado pelo o outro componente. 

    https://github.com/phenriq694/base_de_conhecimento/blob/master/react/Rotas/Navega%C3%A7%C3%A3o%20de%20rotas/Navega%C3%A7%C3%A3o%20de%20rotas.md
    https://github.com/phenriq694/base_de_conhecimento/blob/master/react/Rotas/Navega%C3%A7%C3%A3o%20de%20rotas/Route%20Params.md

- Carregando dados da API: nessa aula recuperamos dados da API do Github que foram rederizados e estilizados para melhor visualização. Nessa aula foi apresentado como fazer a chamada na api usando duas rotas ao mesmo tempo, sem esperar uma terminar para a outra começar com o 'Promise.all'.

- Definindo PropTypes: utilizando o proptypes para validação dos dados retornados das chamadas na API. 

  https://github.com/phenriq694/base_de_conhecimento/blob/master/react/Propriedades/PropTypes.md

- Exibindo repositório: nessa aula separamos o elemento 'Container' de uma dos componentes para pode utilizar ele em outro componente também, configurando ele em uma pasta separada chamada 'components', reaproveitando código. Também finalizamos e estilizamos o 'header' do componente 'Repository'.

- Exibindo issues: finalização da aplicação do módulo listando as 'issues' retornadas de um 'repository' da API do Github. Foi feita toda a estilização e também renderização das 'labels' de cada 'issue'. 


<h3 align="center"> Aplicação desenvolvida no modúlo </h3>
Neste módulo desenvolvemos uma aplicação que conecta-se a API do Github e consome informações de repositórios adicionados pelo o usuário. 
Essa apliacão foi muito boa para fixar os conhecimentos básicos de uma aplicação React e também para ter uma visão de como é uma aplicação React completa do ínicio ao fim. 

<h3 align="center">
  <img src="https://user-images.githubusercontent.com/54601930/78100202-80309400-73ba-11ea-94b1-d139f7708503.gif" width="800px" />
</h3>

