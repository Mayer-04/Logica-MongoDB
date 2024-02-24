/*
 * Operador $elemMatch - Devuelve todos los documentos que contienen al menos un elemento que coincide con los criterios de consulta especificados.
 * Devuelve todos los documentos donde el campo "skills" contenga al menos un elemento que coincida con el array ["MongoDB", "NodeJS"]
 */

db.collection.find({ skills: { $elemMatch: { $eq: "MongoDB" } } });
