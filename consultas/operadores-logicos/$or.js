/*
 * Or ($or) - Por lo menos uno debe cumplir con la condición
 * Devuelve todos los documentos donde la ciudad sea igual a "Cali" o la edad sea mayor o igual a 50.
 */

db.collection.find({
  $or: [{ ciudad: "Cali" }, { edad: { $gte: 50 } }],
})
