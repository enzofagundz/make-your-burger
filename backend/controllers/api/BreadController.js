const { Prisma } = require('@prisma/client');
const PrismaClass = require('../../prisma/PrismaClass');
const p = PrismaClass.getPrisma();

// Jamais descomente esse console.log. Passível de explosão.
// console.log(p);

class BreadController {
    async index(req, res) {
        try {
            const breads = await p.bread.findMany({
                orderBy: {
                    bread_id: 'asc'
                }
            });
            PrismaClass.disconnect();
            return res.json(breads);
        } catch (e) {
            PrismaClass.disconnect();
            return res.json({ error: error.message });
        }
    }

    async show(req, res) {
        const id = req.params.id;
        try {
            const bread = await p.bread.findMany({
                where: {
                    bread_id: Number(id)
                }
            });
            PrismaClass.disconnect();
            return res.json(bread);
        } catch (e) {
            PrismaClass.disconnect();
            res.json({ error: error.message });
        }
    }

    async store(req, res) {
        const name = req.body.name;
        try {
            const bread = await p.bread.create({
                data: {
                    name: name
                }
            });
            PrismaClass.disconnect();
            return res.json(bread);
        } catch (e) {
            PrismaClass.disconnect();
            res.json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const { id, name } = req.body;
            const bread = await p.bread.update({
                where: {
                    bread_id: Number(id)
                },
                data: {
                    name: name
                }
            });
            PrismaClass.disconnect();
            return res.json(bread);
        } catch (e) {
            PrismaClass.disconnect();
            res.json({ error: error.message });
        }
    }

    async destroy(req, res) {
        try {
            const id = req.params.id;
            await p.bread.delete({
                where: { bread_id: Number(id) }
            });
            PrismaClass.disconnect();
            return res.json({ message: 'Pão deletado com sucesso' });
        } catch (e) {
            PrismaClass.disconnect();
            res.json({ error: error.message });
        }
    }
}

module.exports = new BreadController();