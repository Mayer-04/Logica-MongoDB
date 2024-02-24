/*
 * Operador $inc - Incrementar un campo
 * Incrementa el valor de un campo donde "name" sea "Mayer" y el campo "age" se incrementa en 1
 */

db.collection.updateOne({ name: "Mayer" }, { $inc: { age: 1 } })
