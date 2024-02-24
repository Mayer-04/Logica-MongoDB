/*
 * Igual a ($eq)
 * Devuelve todos los documentos donde la edad sea igual a 50.
 */

db.collection.find({ age: { $eq: 50 } })
