// import prisma from "@/prisma/db.client";
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()


async function list() {
  return prisma.tasks.findMany();
}

async function generate() {
  return prisma.tasks.createMany({
    data: {
      body: 'body',
      title: 'title',
      type: 'test'
    }
  })
}


export default {
  ...prisma.tasks,
  list,
  generate
}
