import prismaClient from "../prisma";

class CreateDriverService {
  async execute() {
    console.log("ROTA CHAMADA");
    return { ok: true };
  }
}

export { CreateDriverService };
