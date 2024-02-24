/*
 * No igual a ($nin) - Trabajo con arrays
 * Devuelve todos los documentos donde la ciudad no sea igual a "Cali".
 */

db.collection.find({ city: { $nin: ["Cali"] } })
