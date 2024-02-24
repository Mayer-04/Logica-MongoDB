/*
 * And ($and) - Todos los documentos deben cumplir con la condición
 * Devuelve todos los documentos donde la ciudad sea igual a "Cali" y la edad sea mayor o igual a 50.
 */

db.collection.find({
  $and: [{ ciudad: "Cali" }, { edad: { $gte: 50 } }],
})
