const { Prisma } = require('@prisma/client');
const PrismaClass = require('../../prisma/PrismaClass');
const p = PrismaClass.getPrisma();

class OrderController {

    async index(req, res) {
    
        try {
            const orders = await p.order.findMany({
                include: {
                    bread: true,
                    meat: true,
                    status: true
                }
            });
            PrismaClass.disconnect();
            return res.json(orders);
        } catch (error) {
            PrismaClass.disconnect();
            return res.json({ error: error.message });
        }
    }

    async show(req, res) {
        const { id } = req.params;
        try {
            const order = await p.order.findUnique({
                where: {
                    order_id: Number(id)
                },
                include: {
                    bread: true,
                    meat: true,
                    status: true
                }
            });
            PrismaClass.disconnect();
            return res.json(order);
        } catch (error) {
            PrismaClass.disconnect();
            return res.json({ error: error.message });
        }
    }

    async store(req, res) {
        const { bread_id, meat_id, status_id, customer, optional_json } = req.body;
        try {
            const order = await p.order.create({
                data: {
                    bread_id: Number(bread_id),
                    meat_id: Number(meat_id),
                    status_id: Number(status_id),
                    customer_name: customer,
                    optional_json: optional_json
                }
            });
            PrismaClass.disconnect();
            return res.json(order);
        } catch (error) {
            PrismaClass.disconnect();
            return res.json({ error: error.message });
        }
    }

    async update(req, res) {
        
        const { order_id, bread_id, meat_id, status_id, customer_id, optional_id } = req.body;

        try {
            const order = await p.order.update({
                where: {
                    order_id: Number(order_id)
                },
                data: {
                    bread_id: Number(bread_id),
                    meat_id: Number(meat_id),
                    status_id: Number(status_id),
                    customer_id: Number(customer_id),
                    optional_id: Number(optional_id)
                }
            });
            PrismaClass.disconnect();
            return res.json(order);
        } catch (error) {
            PrismaClass.disconnect();
            return res.json({ error: error.message });
        }
    }

    async destroy(req, res) {
        const id = req.params.id;
        try {
            await p.order.delete({
                where: {
                    order_id: Number(id)
                }
            });
            PrismaClass.disconnect();
            return res.json({ message: 'Pedido excluído com sucesso' });
        } catch (error) {
            PrismaClass.disconnect();
            return res.json({ error: error.message });
        }
    }
}

module.exports = new OrderController();