/*
 * No igual a ($nor) - Niega al menos una de varias condiciones.
 * Devuelve todos los documentos donde la ciudad no sea igual a "Cali" o la edad sea mayor o igual a 50.
 */

db.collection.find({
  $nor: [{ ciudad: "Cali" }, { edad: { $gte: 50 } }],
})
