/*
 * distinct() -  El método se utiliza para obtener registros únicos.
 * Devuelve un arreglo con los valores unicos de un campo.
 */

db.collection.distinct("name")

// Obtener todos los nombres únicos de productos de una categoría específica.

db.productos.distinct("nombre", { categoria: "Electrónicos" })
