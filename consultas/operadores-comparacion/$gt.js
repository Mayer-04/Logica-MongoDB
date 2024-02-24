/*
 * Mayor que ($gt)
 * Devuelve todos los documentos donde la edad sea mayor a 50.
 */

db.collection.find({ age: { $gt: 50 } })
