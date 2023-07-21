const { Prisma } = require('@prisma/client');
const PrismaClass = require('../../prisma/PrismaClass');
const p = PrismaClass.getPrisma();

class MeatController {
    async index(req, res) {
        try {
            const meats = await p.meat.findMany({
                orderBy: {
                    meat_id: 'asc'
                }
            });
            PrismaClass.disconnect();
            return res.json(meats);

        } catch (e) {
            PrismaClass.disconnect();
            return res.json({ error: 'Ocorreu um erro ao buscar os carnes' });
        }
    }

    async show(req, res) {
        const id = req.params.id;
        try {
            const meat = await p.meat.findMany({
                where: {
                    meat_id: Number(id)
                }
            });
            PrismaClass.disconnect();
            return res.json(meat);
        } catch (e) {
            PrismaClass.disconnect();
            res.json({ error: 'Ocorreu um erro ao buscar o carne' });
        }
    }

    async store(req, res) {
        const name = req.body.name;
        try {
            const meat = await p.meat.create({
                data: {
                    name: name
                }
            });
            PrismaClass.disconnect();
            return res.json(meat);
        } catch (e) {
            PrismaClass.disconnect();
            res.json({ error: 'Ocorreu um erro ao salvar a carne' });
        }
    }

    async update(req, res) {
        const { id, name } = req.body;
        try {
            const meat = await p.meat.update({
                where: {
                    meat_id: Number(id)
                },
                data: {
                    name: name
                }
            });
            PrismaClass.disconnect();
            return res.json(meat);
        } catch (e) {
            PrismaClass.disconnect();
            res.json({ error: 'Ocorreu um erro ao atualizar a carne' });
        }
    }

    async destroy(req, res) {
        const id = req.params.id;
        try {
            await p.meat.delete({
                where: {
                    meat_id: Number(id)
                }
            });
            PrismaClass.disconnect();
            return res.json({ message: 'Carne deletada com sucesso' });
        } catch (e) {
            PrismaClass.disconnect();
            res.json({ error: 'Ocorreu um erro ao deletar a carne' });
        }
    }
}

module.exports = new MeatController();