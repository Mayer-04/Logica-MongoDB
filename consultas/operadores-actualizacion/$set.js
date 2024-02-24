/*
 * Operador $set - Actualizar un campo
 * Actualiza el valor de un campo donde "name" sea "Mayer" y el campo "age" se acualice a 31
 */

db.collection.updateOne({ name: "Mayer" }, { $set: { age: 31 } })
