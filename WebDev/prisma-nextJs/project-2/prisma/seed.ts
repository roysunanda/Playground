import "dotenv/config";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "../generated/prisma/client";

const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL });
export const prisma = new PrismaClient({ adapter });

async function seed() {
  await prisma.user.createMany({
    data: [
      { name: "Sunanda", email: "sunanda@email.com" },
      { name: "Suparna", email: "suparna@email.com" },
    ],
  });
}

seed().then(() => {
  prisma.$disconnect();
});
