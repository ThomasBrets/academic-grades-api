import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Academic Grades API",
      version: "1.0.0",
      description:
        "REST API para gestión de notas académicas con arquitectura en capas (Routes → Controllers → Services → Repositories → DAOs → Models)",
      contact: {
        name: "Thomas Bretschneider",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor de desarrollo",
      },
    ],
    components: {
      schemas: {},
      securitySchemes: {
        cookieAuth: {
          type: "apiKey",
          in: "cookie",
          name: "accessToken",
          description: "Cookie HTTP-only que contiene el JWT de autenticación",
        },
      },
    },
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;