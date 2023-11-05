# Desafio Rentcars

Desafio proposto pela empresa Rentcars para uma vaga de estágio.
O projeto consiste em um aplicativo CRUD (Create, Read, Update, Delete) desenvolvido em Node.js, que permitirá a gestão de veículos em uma locadora de carros. Cada veículo terá informações detalhadas, incluindo ID, locadora, modelo, marca, ano, motor, número de portas, tipo de câmbio, presença de ar-condicionado e datas de criação e atualização.

### 🔧 Instalação

O primeiro passo para a utilização desse código é copiar esse repositório para alguma pasta. Depois disso, é necessário abrir um terminal e executar os seguintes comandos para a criação do banco de dados pelo Docker:

```
mkdir /tmp/mysql-data
docker run --name basic-mysql --rm -v /tmp/mysql-data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=ANSKk08aPEDbFjDO -e MYSQL_DATABASE=testing -p 3307:3306 -it mysql:8.0
```
Feito isso, é preciso acessar a pasta em que você salvou esse projeto pelo terminal e executar os seguintes comandos:

```
npm init -y
```
Inicia o npm, possibilitando a instalação de módulos externos;

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

Por último, para concluir a parte de configuração, resta apenas modificar o conteúdo do package.json que foi criado, adicionando a seguinte estrutura na parte de scripts:

```
...
"scripts": {
    "start": "./node_modules/nodemon/bin/nodemon.js index.js "
},
"dependencies": {
"express": "^4.18.2",
...
```

Feito isso, basta digitar no terminal o comando
```
npm start
```
e, no navegador, acessar a url
```
localhost:3000
```
para poder utilizar o aplicativo CRUD de gestão de veículos desenvolvido para concorrer à vaga de estágio da Rentcars!

## 🛠️ Construído com

[HTML](https://html.com), [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) e [JavaScript](https://www.javascript.com) - Desenvolvimento da Front-End;
[Node.js](https://nodejs.org/en) - Linguagem escolhida pela empresa para o Back-End;
[Express.js](https://expressjs.com) - Framework utilizado para o projeto;
[Sequelize](https://sequelize.org) - ORM utilizada para fazer a interface com o banco de dados;
[MySQL](https://www.mysql.com) e [Docker](https://hub.docker.com) - Criação de containers a partir do MySQL através do Docker.


