import { FastifyReply, FastifyRequest } from "fastify";
import { CreateDriverService } from "../services/CreateDriverService";

class CreateDriverController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, email, city} = request.body as {name: string, email: string, city: string}
    const driverService = new CreateDriverService();
    const driver = await driverService.execute({ name, email, city });
    reply.send(driver);
  }
}

export { CreateDriverController };
