import Fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "../routes/routes";

const app = Fastify({ logger: true });

const start = async () => {
  await app.register(cors);
  await app.register(routes);
  try {
    await app.listen({ port: 3000 });
  } catch (error) {
    process.exit(1);
  }
};

start();