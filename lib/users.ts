import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface CreateUserProps {
  name: string;
}

export async function getUsers() {
  return await prisma.user.findMany();
}

export async function createUser({ name }: CreateUserProps) {
  return await prisma.user.create({
    data: {
      name,
    },
  });
}
