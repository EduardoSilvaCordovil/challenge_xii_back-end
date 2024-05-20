import {
  FastifyReply,
  FastifyRequest,
  FastifyInstance,
  FastifyPluginOptions,
} from "fastify";
import { CreateDriverController } from "../controllers/CreateDriverController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get(
    "/teste",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return { ok: true };
    }
  );

  fastify.post(
    "/driver",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateDriverController().handle(request, reply);
    }
  );
}
