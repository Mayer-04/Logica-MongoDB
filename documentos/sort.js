// * Clasifica los documentos de salida en orden ascendente o descendente.

// Ascendente
db.collection.find().sort({ name: 1 })
// Descendente
db.collection.find().sort({ name: -1 })
