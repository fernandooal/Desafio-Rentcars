# Desafio Rentcars

Desafio proposto pela empresa Rentcars para uma vaga de estágio.

O projeto consiste em um aplicativo CRUD (Create, Read, Update, Delete) desenvolvido em Node.js, que permitirá a gestão de veículos em uma locadora de carros. Cada veículo terá informações detalhadas, incluindo ID, locadora, modelo, marca, ano, motor, número de portas, tipo de câmbio, presença de ar-condicionado e datas de criação e atualização.

## 🔧 Instalação

O primeiro passo para a utilização desse código é copiar esse repositório para alguma pasta. Depois disso, é necessário abrir um terminal e executar os seguintes comandos para a criação do banco de dados pelo Docker:

```
mkdir /tmp/mysql-data
docker run --name basic-mysql --rm -v /tmp/mysql-data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=ANSKk08aPEDbFjDO -e MYSQL_DATABASE=testing -p 3307:3306 -it mysql:8.0
```
Feito isso, instale os módulos externos necessários através dos seguintes comandos: 

```
npm install express
```
Instala o Express.js, framework que será utilizado durante esse projeto;

```
npm install sequelize
```
Instala a lib Sequelize, que é uma ORM utilizada para facilitar a conexão com o banco de dados;

```
npm install --save-dev nodemon
```
Instala o nodemon, uma biblioteca que torna possível fazer alterações sem precisar encerrar e iniciar a API toda vez. Por ser uma utilidade apenas para o dev, foi adicionado no seu comando de instalação o --save -dev.

Agora, basta digitar no terminal o comando:
```
npm start
```
e, no navegador, acessar a url:
```
localhost:3000
```
para poder utilizar o aplicativo CRUD de gestão de veículos desenvolvido para concorrer à vaga de estágio da Rentcars!

## 📚 Como funciona

### 💻 Servidor (Node.js e Express)
O código usa Node.js e Express para criar um servidor web.

Rotas são definidas para lidar com diferentes tipos de requisições, como criação, leitura, atualização e exclusão de veículos.

O servidor se comunica com o banco de dados para executar operações como salvar, buscar e modificar informações de veículos.

### 🧩 Páginas HTML
Existem várias páginas HTML no diretório "views" que são servidas para o navegador.

Essas páginas contêm formulários e elementos de interface para interagir com a aplicação.

### 👨‍💻 Interatividade com JavaScript
JavaScript é usado nas páginas HTML para adicionar funcionalidades interativas.

Por exemplo, ao adicionar um veículo, os dados do formulário são coletados, validados e enviados para o servidor usando JavaScript.

Respostas do servidor são tratadas, e mensagens de sucesso ou erro são exibidas no navegador.

### 📡 Conexão com o Banco de Dados
O código estabelece uma conexão com um banco de dados, que permite salvar e recuperar informações sobre veículos.

## 🛠️ Construído com

[HTML](https://html.com), [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) e [JavaScript](https://www.javascript.com) - Desenvolvimento da Front-End;

[Node.js](https://nodejs.org/en) - Linguagem escolhida pela empresa para o Back-End;

[Express.js](https://expressjs.com) - Framework utilizado para o projeto;

[Sequelize](https://sequelize.org) - ORM utilizada para fazer a interface com o banco de dados;

[MySQL](https://www.mysql.com) e [Docker](https://hub.docker.com) - Criação de containers a partir do MySQL através do Docker.

## ❤️ Agradecimentos

Agradeço a empresa e a equipe da Rentcars pela oportunidade! 

Independente do resultado, foi uma experiência única. Através desse projeto, consegui expandir meus conhecimentos e dar mais um passo na sonhada carreira de desenvolvedor,
tendo em vista que só possuia conhecimentos em Java.

Agradeço novamente pela consideração e pela oportunidade de participar do processo seletivo. Fico à disposição para qualquer eventualidade e espero que possamos nos encontrar novamente no futuro. Desejo muito sucesso à equipe da Rentcars e que continuem prosperando no mercado. 

Atenciosamente, Fernando Alonso.
