// * Actualizar un documento de una colección

db.collection.updateOne({ name: "Mayer" }, { $set: { age: 31 } })

// * Actualizar varios documentos

db.collection.updateMany({ city: "Medellin" }, { $set: { city: "Cali" } })

// * Reemplazar un documento

db.collection.replaceOne({ name: "Mayer" }, { name: "Luis", age: 50, city: "Pasto" })