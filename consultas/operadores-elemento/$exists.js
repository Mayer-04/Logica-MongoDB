/*
 * $exists - Indica si un campo existe o no
 * Devuelve los documentos donde el campo "city" exista o no.
 */

db.collection.find({ city: { $exists: true } })
