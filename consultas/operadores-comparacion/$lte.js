/*
 * Menor o igual que ($lte)
 * Devuelve todos los documentos donde la edad sea menor o igual a 50.
 */

db.collection.find({ age: { $lte: 50 } })
