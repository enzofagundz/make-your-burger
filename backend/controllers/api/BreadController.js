const { Prisma } = require('@prisma/client');
const PrismaClass = require('../../prisma/PrismaClass');
const p = PrismaClass.getPrisma();

// Jamais descomente esse console.log. Passível de explosão.
// console.log(p);

class BreadController {

    // Criar uma função para retornar todos os pães

    index = async (req, res) => {
        try {
            const breads = await p.bread.findMany();
            PrismaClass.disconnect();
            return res.json(breads);
        } catch (e) {
            PrismaClass.disconnect();
            return res.json({ error: 'Ocorreu um erro ao buscar os pães' });
        }
    }

    // Criar uma função para retornar um pão pelo id

    // show = async (id) => {
    
    show = async (req, res) => {
        // const bread = await p.bread.findMany({
        //     where: {
        //         bread_id: Number(id)
        //     }
        // });

        // PrismaClass.disconnect();

        let id = req.params.id;

        try {
            const bread = await p.bread.findMany({
                where: {
                    bread_id: Number(id)
                }
            });

            PrismaClass.disconnect();
            return res.json(bread);
        } catch (e) {
            console.log(e);
            res.json({ error: 'Ocorreu um erro ao buscar o pão' });
        }

    }

    // Criar uma função para criar um novo pão

    store = async (name) => {
        const bread = await p.bread.create({
            data: {
                name: name
            }
        });

        PrismaClass.disconnect();
        return bread;
    }

    // Criar uma função para atualizar o nome de um pão

    update = async (id, name) => {
        const bread = await p.bread.update({
            where: {
                bread_id: Number(id)
            },
            data: {
                name: name
            }
        });

        PrismaClass.disconnect();
        return bread;
    }

    // Criar uma função para deletar um pão

    destroy = async (id) => {
        const bread = await p.bread.delete({
            where: { bread_id: Number(id) }
        });

        PrismaClass.disconnect();
    }
}

module.exports = new BreadController();