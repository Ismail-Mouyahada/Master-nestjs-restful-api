import { PrismaClient } from '@prisma/client';
export declare class PrismaService {
    prisma: PrismaClient;
    constructor();
    onModuleDestroy(): Promise<void>;
}
