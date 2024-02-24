/*
 * Operador $all - Devuelve todos los documentos que contienen todos los elementos especificados en una matriz.
 * Devuelve todos los documentos donde el campo "skills" sea igual a ["MongoDB", "NodeJS"]
 */

db.collection.find({ skills: { $all: ["MongoDB", "NodeJS"] } })
