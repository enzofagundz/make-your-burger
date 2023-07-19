const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class PrismaClass {
    disconnect = async () => {
        await prisma.$disconnect();
    }

    constructor(prisma) {
        this.p = prisma;
    }

    // Criar um método para passar a instância do prisma
    
    getPrisma = () => {
        return this.p;
    }
}

module.exports = new PrismaClass(prisma);