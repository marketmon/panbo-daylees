import { PrismaClient } from '@prisma/client';

// Assert global to have any type to avoid TypeScript error
declare const global: {
    prisma?: PrismaClient;
};

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
}

export default prisma;
