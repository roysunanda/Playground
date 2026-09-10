import "dotenv/config";
import express from "express";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "../generated/prisma/client.js";

const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL });
export const prisma = new PrismaClient({ adapter });

const app = express();

app.use(express.json());

app.get("/", (_, res) => {
  res.send("hello world");
});

app.get("/users", async (_, res) => {
  const users = await prisma.user.findFirst();
  res.json(users);
});

app.listen(3010, () => {
  console.log(`server is running on PORT:3010`);
});
