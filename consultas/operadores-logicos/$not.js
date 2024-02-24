/*
 * Not ($not) - Negar una condición
 * Devuelve todos los documentos donde la ciudad no sea igual a "Cali".
 */

db.collection.find({ ciudad: { $not: "Cali" } })
