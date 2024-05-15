import { request } from "express";
import {
  FastifyReply,
  FastifyRequest,
  FastifyInstance,
  FastifyPluginOptions,
} from "fastify";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
      return { ok: true };
    });
}
