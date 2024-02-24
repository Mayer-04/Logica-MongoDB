/*
 * Igual o mayor que ($gte)
 * Devuelve todos los documentos donde la edad sea mayor o igual a 50.
 */

db.collection.find({ age: { $gte: 50 } })
