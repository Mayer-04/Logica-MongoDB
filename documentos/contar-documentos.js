// * Contar todos los documentos de una colección

db.collection.countDocuments()

// * Contar documentos que coincidan con un filtro

db.users.countDocuments({ city: "Cali" })