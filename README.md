<hgroup>
    <h1>
        Make Your Burger <img src="public/favicon.ico" />
    </h1>
    <h3>
        O seu lanche, do seu jeito! 😋
    </h3>
</hgroup>

<h1 align="center">
  <img src='https://i.postimg.cc/jSSvv0bd/Anima-o.gif' border='0' alt='Anima-o'/>
</h1>

## Índice

- [Sobre](#📕-sobre)
- [Por que vue JS?](#📕-porque-vue-js)
- [Ferramentas de desenvolvimento](#🪛-ferramentas-de-desenvolvimento)
- [Bibliotecas usadas](#📚-bibliotecas-usadas)
- [Para rodar em sua máquina](#💻-para-rodar-o-projeto-em-sua-máquina)
- [Estrutura de pastas](#🗂️-estrutura-de-pastas)
- [Funcionalidades](#🔧-funcionalidades-implementadas)
- [Licença](#📓-licença)

## 📕 Sobre

**Make Your Burger** é um projeto desenvolvido inicialmente durante o curso de Vue 3 do canal [Hora de Codar](https://www.youtube.com/playlist?list=PLnDvRpP8BnezDglaAvtWgQXzsOmXUuRHL). A ideia do projeto é colocar em prática conceitos teóricos do framework. Alguns dos conceitos aplicados aqui foram:

+ Instalação do Vue;
+ Estrutura de pastas de uma aplicação Vue;
+ Data-binding;
+ Componentes;
+ Lifecycle Hooks;
+ Consumo de API's etc.

## 📕 Porque Vue JS?

Uma das razões para escolher o **[Vue 3](https://vuejs.org/guide/introduction.html)** como framework para desenvolvimento de interfaces é a sua facilidade de uso e integração com outras ferramentas. O Vue 3 é baseado em uma arquitetura reativa e modular, que permite criar componentes reutilizáveis e dinâmicos, com uma sintaxe simples e declarativa. Além disso, o Vue 3 oferece suporte a TypeScript, JSX, Webpack e outras tecnologias populares no mercado, facilitando a compatibilidade e a escalabilidade dos projetos. O Vue 3 também se destaca pela sua performance e eficiência, graças ao seu sistema de renderização virtual (Virtual DOM) e ao seu mecanismo de compilação otimizado (Vue Compiler). Essas características tornam o Vue 3 uma opção moderna e robusta para o desenvolvimento de interfaces interativas e responsivas.

## 🪛 Ferramentas de desenvolvimento

Para o desenvolvimento do projeto foram usadas as seguintes tecnologias:

+ [VSCode](https://code.visualstudio.com/) 
+ [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
+ [Node LTS](https://nodejs.org/en)
+ [Vite](https://vitejs.dev/)

## 📚 Bibliotecas usadas

+ [Vue Router v4](https://router.vuejs.org/installation.html)
+ [PicoCSS v1.5.10](https://picocss.com/docs/)
+ [JSON-Server v0.17.3](https://www.npmjs.com/package/json-server#getting-started)
+ [Express v4](https://expressjs.com/pt-br/)
+ [Prisma v5](https://www.prisma.io/docs)
+ [Body-Parser v1.20.2](https://www.npmjs.com/package/body-parser)

## 💻 Para rodar o projeto em sua máquina

Rode os seguintes comandos:

### Clone o repositório

```sh
git clone git@github.com:enzofagundz/make-your-burger.git
```

### Entre na pasta onde clonou

```sh
cd ./make-your-burguer
```

### Instale as dependências

```sh
#Instalar as dependências com o npm

npm install
```
Ou

```sh
#Instalar as dependências com o yarn

yarn install
```

### Compilar e regarregar para desenvolvimento

```sh
npm run dev
```

### Iniciar o JSON-Server

```sh
npm run backend
```

## 🗂️ Estrutura de pastas

- A pasta `node_modules` é onde são salvas todas as dependências da aplicação.
- A pasta `public` guarda os arquivos estáticos da aplicação.
    - Dentro desta pasta há o `index.html` principal, onde possui a div com id “app” em que a aplicação está sendo montada.
- O arquivo `.gitignore` lista para o git quais são os arquivos que podem ser ignorados ao fazer o versionamento da aplicação
- O arquivo  `package-lock.json` é onde está as configurações do projeto
- O arquivo `package.json` possui os scripts e dependências, e serve como um “rg” do projeto
- A pasta `src` é onde estão os arquivos da aplicação. Dentro dela estão outras pastas, como:
    - A pasta `assets` há alguns outros arquivos estáticos
    - A pasta `components` é onde estão as partes da interface
    - O arquivo principal `App.vue` é o componente pai que monta os outros componentes
    - O arquivo `main.js` importa a instância de Vue, cria o aplicativo e monta ele na div com id “app”
    - A pasta `router` contém os arquivos responsáveis pelo roteamento da aplicação. Nela, você pode encontrar os arquivos que definem as rotas e a navegação entre as diferentes páginas do aplicativo. A biblioteca Vue Router foi usada para facilitar a configuração e gerenciamento das rotas.
    - A pasta `views` (ou páginas) contém os componentes que representam as diferentes páginas da aplicação. Cada arquivo dentro dessa pasta geralmente corresponde a uma página específica do aplicativo. Esses componentes podem conter outros componentes menores, como os da pasta components, para construir a estrutura da página. As views são montadas dentro do componente pai App.vue ou são referenciadas pelos arquivos de roteamento da pasta router.

## 🔧 Funcionalidades implementadas

Até então o projeto contém as seguintes funcionalidades:

+ Criar um pedido
+ Listar pedidos
+ Excluir pedidos
+ Mudar status de pedido

### Funcionalidades em desenvolvimento

+ Autenticação
+ Captura de erros
+ Novo layout com Tailwind CSS
+ State com Vuex
+ Banco de dados e back-end próprio

# 📓 Licença

Esse projeto usa a licensa MIT. Acesse o **[arquivo](./LICENSE)** para mais detalhes