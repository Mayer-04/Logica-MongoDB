/*
 * Operador $pop - Eliminar el primer o ultimo elemento de un array
 * Elimina el primer elemento de un array donde "name" sea "Mayer" y el campo o array "skills" se elimina
 */

db.collection.updateOne({ name: "Mayer" }, { $pop: { skills: 1 } })
