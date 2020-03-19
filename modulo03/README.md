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

Bibliotecas:
- Multer;
- date-fns;

ORMs:
- Sequelize;
