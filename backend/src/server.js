const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const BreadController = require('../controllers/api/BreadController');

app.get('/breads', (req, res) => BreadController.index(req, res));

app.get('/breads/:id?', (req, res) => {
    const id = req.params.id;

    BreadController.show(id)
        .then(async (bread) => {
            // await prisma.$disconnect();
            res.json(bread);
        })
        .catch(async (e) => {
            console.log(e);
            // await prisma.$disconnect();
            res.json({ error: 'Ocorreu um erro ao buscar o pão' });
        });
});

app.post('/createBread', (req, res) => {
    const name = req.body.name;

    BreadController.store(name)
        .then(async (bread) => {
            // await prisma.$disconnect();
            res.json(bread);
        })
        .catch(async (e) => {
            console.log(e);
            // await prisma.$disconnect();
            res.json({ error: 'Ocorreu um erro ao criar o pão' });
        });
});

app.put('/updateBread', async (req, res) => {
    const id = req.body.id;
    const name = req.body.name;

    // Verificar se o id existe com o getById

    const bread = await BreadController.show(id);

    if (!bread) {
        res.json({ error: 'O pão não existe' });
    } else {
        BreadController.update(id, name)
            .then(async (bread) => {
                // await prisma.$disconnect();
                res.json(bread);
            })
            .catch(async (e) => {
                console.log(e);
                // await prisma.$disconnect();
                res.json({ error: 'Ocorreu um erro ao criar o pão' });
            });
    }
});


app.delete('/deleteBread/:id', async (req, res) => {

    const id = req.params.id;

    // Verificar se o id existe com o getById

    const bread = await BreadController.show(id);

    if (!bread) {
        console.log('O pão não existe');
    } else {
        BreadController.destroy(id)
            .then(async (bread) => {
                // await prisma.$disconnect();
                res.json(bread);
            })
            .catch(async (e) => {
                console.log(e);
                // await prisma.$disconnect();
                res.json({ error: 'Ocorreu um erro ao deletar o pão' });
            });
    }
});

app.listen(3333, () => console.log('Server is running on port 3333 🚀'));