/*
 * Los validadores de esquema en MongoDB son reglas que se pueden definir en una nueva colección para garantizar que los documentos que se insertan en la colección cumplan con ciertos criterios o restricciones.
 */

// * Crear una colección "users" con un validador de esquema.

db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age"],
      properties: {
        name: {
          bsonType: "string",
        },
        lastname: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        age: {
          bsonType: "int",
          minimum: 18,
        },
        city: {
          enum: ["Medellin", "Cali", "Bogota"],
        },
      },
    },
  },
})
