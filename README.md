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
+ [Express v4](https://expressjs.com/pt-br/)
+ [Prisma v5](https://www.prisma.io/docs)
+ [Body-Parser v1.20.2](https://www.npmjs.com/package/body-parser)
+ [MySQL Server v8](https://dev.mysql.com/downloads/mysql/8.0.html)

## 💻 Para rodar o frontend do projeto em sua máquina

Rode os seguintes comandos:

### Clone o repositório

```sh
git clone git@github.com:enzofagundz/make-your-burger.git
```

### Entre na pasta onde clonou

```sh
cd ./make-your-burguer
```

### Entre na pasta frontend

```sh
cd ./frontend
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

## 💻 Para rodar o backend do projeto em sua máquina

### Entre na pasta backend
```sh 
cd ./backend
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

### Configure o arquivo .ent com as informações do seu banco de dados

`DATABASE_URL="mysql://root:root@localhost:/backend"`

[Visite a documentação do Prisma](https://www.prisma.io/docs/concepts/database-connectors)

### Rode o migrate do Prisma

```sh
npx prisma migrate dev --name init
```

### Compilar e regarregar para desenvolvimento

```sh
npm run dev
```

## 🗂️ Estrutura de pastas

A pasta raiz do repositório possui 3 arquivos: `.gitignore`, `LICENSE` e o `README.md`.

Além disso, a pasta raiz do repositório possui outras duas pastas: `frontend` e `backend`. 

**Dentro da pasta frontend você encontrará:**

- A pasta `public` guarda os arquivos estáticos da aplicação.
    - Dentro desta pasta há o `index.html` principal, onde possui a div com id “app” em que a aplicação está sendo montada.

- O arquivo  `package-lock.json` é onde está as configurações do projeto

- O arquivo `package.json` possui os scripts e dependências, e serve como um “rg” do projeto

- A pasta `src` é onde estão os arquivos da aplicação. Dentro dela estão outras pastas, como:

    - A pasta `assets` há alguns outros arquivos estáticos

    - A pasta `components` é onde estão as partes da interface
    - O arquivo principal `App.vue` é o componente pai que monta os outros componentes

    - O arquivo `main.js` importa a instância de Vue, cria o aplicativo e monta ele na div com id “app”

    - A pasta `router` contém os arquivos responsáveis pelo roteamento da aplicação. Nela, você pode encontrar os arquivos que definem as rotas e a navegação entre as diferentes páginas do aplicativo. A biblioteca Vue Router foi usada para facilitar a configuração e gerenciamento das rotas.

    - A pasta `views` (ou páginas) contém os componentes que representam as diferentes páginas da aplicação. Cada arquivo dentro dessa pasta geralmente corresponde a uma página específica do aplicativo. Esses componentes podem conter outros componentes menores, como os da pasta components, para construir a estrutura da página. As views são montadas dentro do componente pai App.vue ou são referenciadas pelos arquivos de roteamento da pasta router.

**Dentro da pasta backend você encontrará:**

+ A pasta `controllers`, que contém os controladores (controllers) da aplicação. Os controladores são responsáveis por receber as requisições HTTP, processar os dados e retornar as respostas adequadas. A pasta api dentro dela pode conter os controladores específicos relacionados à API da aplicação.

+ A pasta `prisma`, utilizada para armazenar arquivos relacionados ao Prisma, que é um ORM (Object-Relational Mapping) usado para facilitar a interação com o banco de dados. Nela, há a pasta migrations, que contém o histórico de migrações em SQL. As migrações são usadas para versionar e aplicar as mudanças no esquema do banco de dados de forma controlada.

+ A pasta `routes`, onde ficam os arquivos que definem as rotas e endpoints da API do backend. Aqui, é usado o framework de roteamento Express.js, para facilitar a criação das rotas e o gerenciamento das requisições.

+ O arquivo `index.js` é o ponto de entrada principal do backend. É a partir deste arquivo que o servidor é iniciado e as configurações iniciais da aplicação são definidas.

+ O arquivo `package-lock.json` é gerado automaticamente pelo npm para travar as versões exatas das dependências instaladas no projeto. Isso garante que todos os membros da equipe tenham as mesmas versões de pacotes, evitando possíveis problemas de compatibilidade.

+ O arquivo `package.json` é o "rg" (registro geral) do projeto, tanto no frontend quanto no backend. Ele contém informações sobre o projeto, suas dependências, scripts personalizados, autor, versão, licença e outras configurações relevantes. Além disso, é usado para instalar e gerenciar as dependências do projeto por meio do gerenciador de pacotes.

## 🔧 Funcionalidades implementadas

Até então o projeto contém as seguintes funcionalidades:

+ ~~Criar um pedido~~
+ ~~Listar pedidos~~
+ ~~Excluir pedidos~~
+ ~~Mudar status de pedido~~
+ ~~Banco de dados e back-end próprio~~

### Funcionalidades em desenvolvimento

+ Autenticação
+ Captura de erros
+ Novo layout com Tailwind CSS
+ State com Pinia

# 📓 Licença

Esse projeto usa a licensa MIT. Acesse o **[arquivo](./LICENSE)** para mais detalhes