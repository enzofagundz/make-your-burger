const { Prisma } = require('@prisma/client');
const PrismaClass = require('../../prisma/PrismaClass');
const p = PrismaClass.getPrisma();

class CustomerController {

    async index(req, res) {
        try {
            const customers = await p.customer.findMany({
                orderBy: {
                    customer_id: 'asc'
                }
            });
            PrismaClass.disconnect();
            return res.json(customers);
        } catch (e) {
            PrismaClass.disconnect();
            return res.json({ error: error.message });
        }
    }

    async show(req, res) {
        const id = Number(req.params.id);
        try {
            const customer = await p.customer.findMany({
                where: {
                    customer_id: id
                }
            });
            PrismaClass.disconnect();
            return res.json(customer);
        } catch (e) {
            PrismaClass.disconnect();
            return res.json({ error: error.message });
        }
    }

    async store(req, res) {
        const { name, table } = req.body;

        try {
            const customer = await p.customer.create({
                data: {
                    name: name,
                    table_number: Number(table)
                }
            });
            PrismaClass.disconnect();
            return res.json(customer);
        } catch (e) {
            PrismaClass.disconnect();
            return res.json({ error: error.message });
        }
    }

    async update(req, res) {
        const id = Number(req.body.id);
        const { name, table } = req.body;

        try {
            const customer = await p.customer.update({
                where: {
                    customer_id: Number(id)
                },
                data: {
                    name: name,
                    table_number: Number(table)
                }
            });
            PrismaClass.disconnect();
            res.json(customer);
        } catch (e) {
            PrismaClass.disconnect();
            return res.json({ error: error.message });
        }
    }

    async destroy(req, res) {
        const id = Number(req.params.id);
        try {
            const customer = await p.customer.delete({
                where: {
                    customer_id: id
                }
            });
            PrismaClass.disconnect();
            return res.json({ message: 'Cliente deletado com sucesso' });
        } catch (e) {
            PrismaClass.disconnect();
            return res.json({ error: error.message });
        }
    }
}

module.exports = new CustomerController();