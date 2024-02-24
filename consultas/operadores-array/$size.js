/*
 * $size - Indica la longitud de un array
 * Devuelve todos los documentos donde el campo "skills" sea igual a 3
 */

db.collection.find({ skills: { $size: 3 } })
