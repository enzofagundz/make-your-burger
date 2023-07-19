const express = require('express');

// Importar o prisma client

const { PrismaClient } = require('@prisma/client');

// Instanciar o prisma client com o construtor

const prisma = new PrismaClient();

const app = express();

// Função assíncrona main para realizar consultas no banco de dados

async function main() {

    // A função findMany() retorna todos os registros da tabela, funciona como um SELECT * FROM tabela

    const allUsers = await prisma.user.findMany()
    console.log(allUsers)
}

async function create() {

    // A função create() cria um novo registro na tabela, funciona como um INSERT INTO tabela VALUES()

    await prisma.user.create({
        data: {
            name: 'Alice',
            email: 'alice@prisma.io',
            posts: {
                create: { title: 'Hello World' },
            },
            profile: {
                create: { bio: 'I like turtles' },
            },
        },
    })

    // A função findMany() retorna todos os registros da tabela, funciona como um SELECT * FROM tabela

    const allUsers = await prisma.user.findMany({
        include: {
            posts: true,
            profile: true
        }
    })

    console.dir(allUsers, { depth: null })

}

async function createUser(name, email) {
    
        // A função create() cria um novo registro na tabela, funciona como um INSERT INTO tabela VALUES()

        await prisma.user.create({
            data: {
                name: name,
                email: email
            }
        })

        // A função findMany() retorna todos os registros da tabela, funciona como um SELECT * FROM tabela

        const oneUser = await prisma.user.findMany({
            where: {
                name: name
            }
        });

        console.dir(oneUser, { depth: null })
}

app.get('/', (req, res) => {

    // Chamar a função main() para realizar a consulta no banco de dados e imprimir o resultado no console

    main()
        .then(async () => {
            await prisma.$disconnect();
        })
        .catch(async (e) => {
            console.log(e);
            await prisma.$disconnect();
            process.exit(1);
        })
        
        // Enviar o array de objetos para o front-end

        res.send('<h1>Home</h1>');
})

app.get('/create', (req, res) => {
    // Chamar a função create() para criar um novo registro no banco de dados

    create()
        .then(async () => {
            await prisma.$disconnect();
        })
        .catch(async (e) => {
            console.log(e);
            await prisma.$disconnect();
            process.exit(1);
        })

        res.send('<h1>Create</h1>');
})

app.get('/createUser/:name/:email', (req, res) => {

    // Chamar a função createUser() para criar um novo registro no banco de dados

    const name = req.params.name;
    const email = req.params.email;

    createUser(name, email);

    res.send('<h1>Create User</h1>');

})

// Rota para listar todos os Pães cadastrados no banco de dados

app.get('/breads', async (req, res) => {

    // A função findMany() retorna todos os registros da tabela, funciona como um SELECT * FROM tabela

    const breads = await prisma.breads.findMany();

    // Enviar o array de objetos para o front-end

    res.json(breads);
});

app.listen(3333, () => console.log('Server is running on port 3333 🚀'));