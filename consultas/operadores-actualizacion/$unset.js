/*
 * Operador $unset - Eliminar un campo específico de un documento
 * Elimina el campo "name" de todos los documentos
 */

db.collection.updateMany({}, { $unset: { name: "" } })
