const { Prisma } = require('@prisma/client');
const PrismaClass = require('../../prisma/PrismaClass');
const p = PrismaClass.getPrisma();

class OptionalController {
    async index(req, res) {
        try {
            const optionals = await p.optional.findMany({
                orderBy: {
                    optional_id: 'asc'
                }
            });
            PrismaClass.disconnect();
            return res.json(optionals);
        } catch (e) {
            PrismaClass.disconnect();
            return res.json({ error: 'Ocorreu um erro ao buscar os opcionais' });
        }
    }

    async show(req, res) {
        const id = req.params.id;
        try {
            const optional = await p.optional.findMany({
                where: {
                    optional_id: Number(id)
                }
            });
            PrismaClass.disconnect();
            return res.json(optional);
        } catch (e) {
            PrismaClass.disconnect();
            return res.json({ error: 'Ocorreu um erro ao buscar o opcional' });
        }
    }

    async store(req, res) {
        const name = req.body.name;
        try {
            const optional = await p.optional.create({
                data: {
                    name: name
                }
            });
            PrismaClass.disconnect();
            return res.json(optional);
        } catch (e) {
            PrismaClass.disconnect();
            return res.json({ error: 'Ocorreu um erro ao salvar o opcional' });
        }
    }

    async update(req, res) {
        const { id, name } = req.body;
        try {
            const optional = await p.optional.update({
                where: {
                    optional_id: Number(id)
                },
                data: {
                    name: name
                }
            });
            PrismaClass.disconnect();
            return res.json(optional);
        } catch (e) {
            PrismaClass.disconnect();
            return res.json({ error: 'Ocorreu um erro ao atualizar o opcional' });
        }
    }

    async destroy(req, res) {
        const id = req.params.id;
        try {
            await p.optional.delete({
                where: {
                    optional_id: Number(id)
                }
            });
            PrismaClass.disconnect();
            return res.json({ message: 'Opcional excluído com sucesso' });
        } catch (e) {
            PrismaClass.disconnect();
            return res.json({ error: 'Ocorreu um erro ao excluir o opcional' });
        }
    }
}

module.exports = new OptionalController();