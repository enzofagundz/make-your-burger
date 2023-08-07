const { Prisma } = require('@prisma/client');
const PrismaClass = require('../../prisma/PrismaClass');
const p = PrismaClass.getPrisma();

class StatusController {

    async index(req, res) {
        try {
            const status = await p.status.findMany({
                orderBy: {
                    status_id: 'asc'
                }
            });
            PrismaClass.disconnect();
            return res.json(status);

        } catch (e) {
            PrismaClass.disconnect();
            return res.json({ error: e.message });
        }
    }

    async show(req, res) {
        const id = req.params.id;
        try {
            const status = await p.status.findMany({
                where: {
                    status_id: Number(id)
                }
            });
            PrismaClass.disconnect();
            return res.json(status);
        } catch (e) {
            PrismaClass.disconnect();
            res.json({ error: e.message });
        }
    }

    async store(req, res) {
        const { name } = req.body;
        try {
            const status = await p.status.create({
                data: {
                    name: name
                }
            });
            PrismaClass.disconnect();
            return res.json(status);
        } catch (e) {
            PrismaClass.disconnect();
            res.json({ error: e.message });
        }
    }
}

module.exports = new StatusController();