/*
 * Operador $push - Insertar un elemento en un array
 * Inserta un elemento en un array donde "name" sea "Mayer" y el campo o array "skills" se inserta "MongoDB"
 */

db.collection.updateOne({ name: "Mayer" }, { $push: { skills: "MongoDB" } })
