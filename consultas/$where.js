/*
 * $where - Crea una consulta basada en una expresión JavaScript
 * Devuelve todos los documentos donde el campo "name" sea igual a "Mayer"
 */

db.collection.find({
  $where: function () {
    return this.name == "Mayer";
  },
})
