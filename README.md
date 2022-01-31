# 💬 Bate Papo UOL API
## 🚀 Descrição do Projeto
Que tal voltar aos anos 2000 e conversar com seus amigos e desconhecidos através de uma bate papo igualzinho ao do UOL? Com essa API esse sonho será realidade!

<br/>


## 🔍 Sobre
Com a API do bate papo da UOL você terá seu próprio servidor em MongoDB e poderá hostear uma sala de chat para que as pessoas possam mandar mensagens a todos e também de forma privada! Só cuidado para não fechar a aba, se não você será desconectado, hein!. Na API, podemos encontrar as seguintes funcionalidades:

### Features
- [x] [Verificar se o server está funcionando](#get-health)
- [x] [`Verificar a lista de participantes`](#get-participants)
- [x] [`Adicionar participantes ao chat`](#post-participants)
- [x] [`Buscar as mensagens que o participante pode ver`](#get-messages)
- [x] [`Mandar uma nova mensagem a todos ou a outro usuário`](#post-messages)
- [x] [`Manter um usuário laggado à aplicação`](#post-status)
- [x] [`Desconectar participantes inativos`](#disconnect-participants)

<br/>


## ✔️ Tabela de conteúdo
<!--ts-->
- [💬 Bate Papo UOL API](#-bate-papo-uol-api)
	- [🚀 Descrição do Projeto](#-descrição-do-projeto)
	- [🔍 Sobre](#-sobre)
		- [Features](#features)
	- [✔️ Tabela de conteúdo](#️-tabela-de-conteúdo)
	- [🖥 Tecnologias](#-tecnologias)
	- [⚙ Como usar](#-como-usar)
		- [Instalando a API](#instalando-a-api)
		- [Preparando setup](#preparando-setup)
		- [Inicializando a API](#inicializando-a-api)
	- [📜 Documentação](#-documentação)
		- [`GET /health`](#get-health)
		- [`GET /participants`](#get-participants)
		- [`POST /participants`](#post-participants)
		- [`GET /messages`](#get-messages)
		- [`POST /messages`](#post-messages)
		- [`POST /status`](#post-status)
		- [`Disconnect participants`](#disconnect-participants)
	- [👨🏼‍💻 Autor](#-autor)
<!--te-->

<br/>


## 🖥 Tecnologias
<p align="center">
  <img alt="mongodb" src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img alt="nodejs" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img alt="npm" src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/>
  <img alt="expressjs" src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img alt="eslinter" src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white"/>
</p>

<br/>


## ⚙ Como usar

Para utilizar essa API, será necessário ter nas suas máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [MongoDB]((https://www.mongodb.com/)).
Além disso recomendo fortemente a utilização de um bom ter um editor de código, como o [VSCode](https://code.visualstudio.com/)!


### Instalando a API
```bash

# Clone este repositório
$ git clone https://github.com/TiagoVota/bate-papo-uol-api

# Acesse a pasta do projeto no terminal/cmd
$ cd bate-papo-uol-api

# Instale as dependências
$ npm install

```

### Preparando setup
Na pasta principal da API, crie um arquivo `.env.dev` aos mesmos moldes do arquivo [`.env.example`](https://github.com/TiagoVota/bate-papo-uol-api/blob/main/.env.example).

### Inicializando a API
```bash

# Execute a aplicação em modo de desenvolvimento
$ npm run start:dev

# O servidor inciará na porta:PORT (escolhida no arquivo .env) - acesse http://localhost:PORT 

```

<br/>


## 📜 Documentação
Agora veremos quais os principais end points dessa aplicação

### `GET /health`

### `GET /participants`

### `POST /participants`

### `GET /messages`

### `POST /messages`

### `POST /status`

### `Disconnect participants`

<br/>


## 👨🏼‍💻 Autor

<img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/56308226?v=4" width="100px;" alt="Foto de perfil Tiago Vota Cucco"/>

Feito por Tiago Vota Cucco. Entre em contato!

[![Gmail Badge](https://img.shields.io/badge/-tiagovotacucco@gmail.com-c14438?style=flat&logo=Gmail&logoColor=white&link=mailto:tiagovotacucco@gmail.com)](mailto:tiagovotacucco@gmail.com)
[![Linkedin Badge](https://img.shields.io/badge/-Tiago-Vota?style=flat&logo=Linkedin&logoColor=white&color=blue&link=https://www.linkedin.com/in/tiago-vota-cucco-394916204)](https://www.linkedin.com/in/tiago-vota-cucco-394916204) 

<br/><br/>
