import prismaClient from "../prisma";

interface CreateCustomerProps {
  name: string;
  email: string;
  city: string;
}

class CreateDriverService {
  async execute({ name, email, city }: CreateCustomerProps) {
    if (!name || !email) {
      throw new Error("Preencha todoso os campos");
    }
    const driver = await prismaClient.driver.create({
      data: {
        name,
        email,
        city,
      },
    });
    return driver;
  }
}

export { CreateDriverService };
