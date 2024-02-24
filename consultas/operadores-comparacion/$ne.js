/*
 * No igual a ($ne)
 * Devuelve todos los documentos donde la edad no sea igual a 50.
 */

db.collection.find({ age: { $ne: 50 } })
