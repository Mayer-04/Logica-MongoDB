/*
 * Operador $regex - Buscar por una expresión regular
 * Devuelve todos los documentos donde el campo "name" comience con "A"
 */

db.collection.find({ name: { $regex: "^A" } })
