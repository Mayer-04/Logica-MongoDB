/*
 * Menor que ($lt)
 * Devuelve todos los documentos donde la edad sea menor a 50.
 */

db.collection.find({ age: { $lt: 50 } })
