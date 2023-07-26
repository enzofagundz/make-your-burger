const { Prisma } = require('@prisma/client');
const PrismaClass = require('../../prisma/PrismaClass');
const p = PrismaClass.getPrisma();

class IngredientController {

    async index(req, res) {
        try {
            const breads = await p.bread.findMany({
                orderBy: {
                    bread_id: 'asc'
                }
            });

            const meats = await p.meat.findMany({
                orderBy: {
                    meat_id: 'asc'
                }
            });

            const optionals = await p.optional.findMany({
                orderBy: {
                    optional_id: 'asc'
                }
            });

            PrismaClass.disconnect();
            return res.json({
                breads: breads,
                meats: meats,
                optionals: optionals
            });
        } catch (error) {
            PrismaClass.disconnect();
            return res.json({ error: error.message });
        }
    }

}

module.exports = new IngredientController();