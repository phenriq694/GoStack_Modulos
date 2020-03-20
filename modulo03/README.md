<h1 align="center">
  <img 
    alt="Introdução ao React" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" 
    width="200px"
  />
</h1>
<h2 align="center">
  Continuando API do GoBarber
</h2>

Neste módulo finalizamos a configuração da API da aplicação denvolvida durante o curso, GoBarber, utilizando conceitos avançados do node.js, adicionando novas funcionalidades e a apresentação de alguns serviços que complementam a aplicação. 

Contéudo do módulo:
- Envio de arquivos - Nessa seção do módulo, aprendi como configurar o upload de arquivos para a aplicação, como fazer o relacionamento de tabelas com o sequelize e adicionar a funcionalidade de avatar para um usuário. Ela foi divida em duas aulas, sendo:

  - Configurando o multer: como instalar e utilizar a biblioteca 'multer', necessária para lidar com outro tipo de corpo de requisições como nas de envio de arquivos.

    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Upload%20de%20arquivos/1.%20Configura%C3%A7%C3%A3o%20do%20multer.md

  - Avatar do usuário: como configurar uma tabela para receber as referências do arquivos utilizando o sequelize  Como criar uma migration para adicionar uma nova coluna no tabela no banco e adiocionar um relacionamento entre duas tabelas na migration e na model através do método 'belongsTo()'.

    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Upload%20de%20arquivos/2.%20Configura%C3%A7%C3%A3o%20no%20banco%20de%20dados.md
    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/ORMs/sequelize/3.%20Models/Relacionamentos.md
    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/ORMs/sequelize/2.%20migrations/Chave%20Estrangeira.md
    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/ORMs/sequelize/2.%20migrations/Query%20Interface%20Methods.md

- Funcionalidades de agendamentos - Nessa seção do módulo, aprendi bastante como trabalhar com datas, principalmente com o uso da biblioteca 'date-fns'. 
Ela foi dividida em 7 aulas, sendo:

  - Listagem de prestadores de serviço: Nessa aula adicionamos mais uma funcionalidade na aplicação e além dos conceitos já aprensentados nos módulos anteriores, neste utilizamos mais opções nos métodos das models dentro dos controllers para manipular os dados retornados utilizando filtros como o 'where' e quais informações queremos dos elementos e como queremos apresentas, utilizando o 'attributes' e o'include' e a configuração de um campo do tipo 'VIRTUAL', dentro da model que manipula as referências aos arquivos, utilizado apenas no código para servir as imagens ao frontend, por exemplo.

    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/ORMs/sequelize/3.%20Models/M%C3%A9todos.md
    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Upload%20de%20arquivos/2.%20Configura%C3%A7%C3%A3o%20no%20banco%20de%20dados.md
    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Upload%20de%20arquivos/3.%20Habilitar%20o%20acesso%20das%20imagens.md

  - Migration e model de agendamento: Nessa aula configuramos a criação da tabela 'appointments' para armazenamento dos agendamentos que os usúarios fazem em um prestador de serviço e utilizamos o conhecimento da seção anterior para relacionar essa tabela com a tabela dos 'users' através de migration e model.

  - Agendamento de serviço: Nessa aula foi configurado o controller de agendamentos com conteúdos já apresentados e apresentando como o sequelize lida com as datas. 

  - Validação de agendamento: Nessa aula aprendi bastante como trabalhar com datas, fazer comparações e cálculos usando a biblioteca date-fns;

    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/M%C3%B3dulos/date-fns/date-fns.md

  - Listando agendamentos do usuário: Nessa aula configuramos o método 'index' do controller dos agendamentos, para que um usuário possa listar todos os marcados. 

  - Aplicando paginação: Nessa aula utilizando as condições 'limit' e 'offset', aplicamos paginação nos resultados retornados na pesquisa. 

    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/M%C3%B3dulos/date-fns/date-fns.md

  - Listando agenda do prestador: Nessa aula foi apresentado o operador do sequelize 'between' para comparar dois valores e retornar caso o elemento esteja nesse intervalo. 

    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/M%C3%B3dulos/date-fns/date-fns.md

- Envio de notificações - Nessa seção do módulo, aprendi como configurar uma instância docker com o MongoDB, que foi escolhido para ser a base de dados das notificações da aplicação, uma vez que esses dados não vão ser estruturados ou ter um relacionamento, e também precisa ser performático. Também aprendi como utilizar o 'moongose' para configurar e fazer as consultas e inserções no MongoDB. Essa seção teve 4 aulas, sendo:

  - Configurando o MongoDB: Nessa aula foi apresentado como configurar uma instância do docker com MongoDB e as configurações iniciais na aplicação com o 'mongoose'. 

    https://github.com/phenriq694/base_de_conhecimento/blob/master/docker/MongoDB/Inst%C3%A2ncia%20do%20MongoDB.md
    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/ORMs/mongoose/1.%20Configura%C3%A7%C3%A3o%20do%20mongoose.md

  - Notificando novos agendamentos: Nessa aula foi apresentado como configurar um 'schema' que é o equivalente as models do sequelize e como importar esses 'schemas' nos controllers e usar os seus métodos como o 'create'. Foi utilizado a ferramenta Mongo Compass para visualização da base de dados. 

    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/ORMs/mongoose/2.%20Schemas.md
    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/ORMs/mongoose/M%C3%A9todos.md

  - Listando notificações do usuário: Nesta aula foi criado o controller para as notificações e o método 'index' para listar as notificação ao usuário. Foi apresentado um novo método dos 'schemas' o find' para a localização de todos os elementos com base em um filtro. 

    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/ORMs/mongoose/M%C3%A9todos.md#find

  - Marcar notificações como lidas: Nessa aula criamos o método 'update' do controller de notificações para atualizar quando uma notificação for lida. Foi apresentado um outro método dos 'schemas' o 'findAndUpdate', que localiza um elemento e já atualizar com um valor. 

    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/ORMs/mongoose/M%C3%A9todos.md#findbyidandupdate

- Cancelamento e envio de e-mail: Nessa seção do módulo fui aprensetado a algumas funções avançados do node.js como o envio de e-mail utilizando a biblioteca 'nodemailer', criação de templates para esses e-mails, utilização de banco chave-valor com Redis e filas com o BeeQueue. Essa seção teve 7 aulas, sendo:

   - Cancelamento de agendamento: Nessa aula criamos o método 'delete' do controller de agendamentos para o cancelamento deles. Utilizamos conceitos já apresentados nas seções e módulos anteriores como o cálculo e comparações entre datas junto com a biblioteca 'date-fns'. 

  - Configurando Nodemailer: Nessa aula utilizamos a biblioteca 'nodemailer' para o envio de e-mails. Foi apresentado um serviço para criação de caixas de entrada para teste em desenvolvimento, Mailtrap. 

    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Envio%20de%20e-mails/1.%20Configurando%20o%20Nodemailer.md

  - Configurando templates de e-mail: Nessa aula fui apresentado uma template engine para a configuração de templates de e-mails. Utilizando as bibliotecas 'express-handlerbars' e 'nodemailer-express-handlerbars' configuramos uma template de e-mail que importa dados das bases de dados da aplicação para compor o e-mail. 

    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Envio%20de%20e-mails/Templates%20de%20e-mail.md

  - Configurando fila com Redis: Nessa aula aprendi como enviar e-mail utilizando o conceito de fila que utiliza um banco de chave-valor para ser muito performático e não afetar no desempenho da aplicação. Foi criado uma instância no docker com o Redis e a configuração de uma fila com a biblioteca 'bee-queue' para a execução dos 'jobs' paralelo a execução da apliação.

    https://github.com/phenriq694/base_de_conhecimento/blob/master/docker/Redis/Inst%C3%A2ncia%20do%20Redis.md
    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Configurando%20Fila/1.%20Configurando%20o%20BeeQueue.md

  - Monitorando falhas na fila: Nessa aprendi como configurar a fila para imprimir erros que ocorreram durante a sua execução no terminal do node. 

    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Configurando%20Fila/2.%20Monitorando%20falhas%20na%20fila.md

  - Listando horários disponíveis: Nessa aula foi configurado um controller para verificar se uma data para um agendamento em um prestador de serviço estava ou não disponível. Para isso foram utilizados conceitos já apresentados nas seções e módulos anteriores, principalmente o uso da biblioteca 'date-fns' que neste módulo foi fundamental para o cálculo e comparações das datas.  

  - Campos virtuais no agendamento: Nessa aula foi apresentado como criar um método dentro de um campo em uma model para calcular se a data já passou ou se ele é cancelável.

    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/ORMs/sequelize/3.%20Models/Cria%C3%A7%C3%A3o%20de%20uma%20model.md#adicionando-fun%C3%A7%C3%B5es-dentro-dos-campos

- Configurações avançadas: Nessa seção deste módulo aprendi como monitorar erros em produção com o serviço do Sentry e também um conceito muito importante que o de variáveis de ambiente, para esconder informações sensíveis do código. Essa seção teve duas aulas, sendo:

  - Tratamento de exceções: Nessa aula foi apresentado o serviço Sentry, para tratamento de erros em produção. Foi mostrado como criar uma conta no serviço e configuração um novo projeto e também a configuração no código. Também foi apresentado uma biblioteca, 'express-async-erros', para retornar erros ocorridos em funções assíncronas e outra biblioteca para tratar o modo como os erros são exibidos com o 'youch'. 

    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Monitoramento%20de%20erros/Tratamento%20de%20exce%C3%A7%C3%B5es.md

  - Variáveis de ambiente: Nessa aula configuramos um arquivo contendo variáveis de ambiente para a proteção de dados sensíveis do código e também um arquivo modelo que deve acompanhar o código para que outro desenvolvedor possa saber o que é necessário para executar a aplicação. Para carregar essas variáveis na aplicação, foi utilizado a biblioteca 'dotenv'. 

    https://github.com/phenriq694/base_de_conhecimento/blob/master/node/Vari%C3%A1veis%20de%20Ambiente/Vari%C3%A1veis%20de%20ambiente.md

## Bibliotecas:
- Multer;
- date-fns;
- nodemailer;
- express-handlerbars;
- nodemailer-express-handlerbars;
- beequeue;
- express-async-erros;
- youch;
- dotenv.

## ORMs:
- Sequelize;
- Mongoose.

## Feramentas e serviços:
- Mongo Compass;
- Mailtrap;
- Sentry;
