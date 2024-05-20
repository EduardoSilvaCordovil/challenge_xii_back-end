# challenge_xii_back-end

## Stack
<div align="left">
 <img src="https://img.shields.io/badge/MongoDB-47A248.svg?style=for-the-badge&logo=MongoDB&logoColor=white" />
 <img src="https://img.shields.io/badge/Prisma-2D3748.svg?style=for-the-badge&logo=Prisma&logoColor=white" />
 <img src="https://img.shields.io/badge/Postman-FF6C37.svg?style=for-the-badge&logo=Postman&logoColor=white" />
 <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" />
</div>

## Dependências necessárias:

```json
  "dependencies": {
    "@fastify/cors": "^9.0.1",
    "@prisma/client": "^5.14.0",
    "body-parser": "^1.20.2",
    "fastify": "^4.27.0",
    "module-alias": "^2.2.3",
    "mongodb": "^6.6.2",
    "react-router-dom": "^6.23.1",
    "router": "^1.3.8",
    "routes": "^2.1.0",
    "tsx": "^4.10.2"
  }
```

## Iniciando a aplicação:

No seu terminal, digite o seginte comando:


```bash
npm run dev
```


## Testando via Postman

## Rota Driver

| Rota                             | HTTP(verbo) | Descrição         |
| -------------------------------- | ----------- | ----------------- |
| http://127.0.0.1:3000/driver     | POST        | Criar Driver      |

```json
{
    "name": "Eduardo",
    "email": "eduardo@email.com",
    "city": "Belém"
}
```
