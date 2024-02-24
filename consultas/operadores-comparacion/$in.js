/*
 * Igual a ($in) - Trabajo con arrays
 * Devuelve todos los documentos donde la ciudad sea igual a "Cali".
 */

db.collection.find({ city: { $in: ["Cali"] } })
