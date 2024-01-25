import {PrismaClient} from '@prisma/client/edge'

declare global {
  var prisma: PrismaClient
}

const prisma: PrismaClient = global.prisma || new PrismaClient()

export default prisma
