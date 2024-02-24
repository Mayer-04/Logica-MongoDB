/*
 * $type - Indica el tipo de dato de un campo
 * Devuelve los documentos donde el campo "city" sea de tipo string.
 */

db.collection.find({ city: { $type: "string" } })
