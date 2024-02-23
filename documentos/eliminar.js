// * Eliminar un solo documento

db.collection.deleteOne({ name: "Andres" })

// * Eliminar varios documentos donde la edad sea igual a 50.

db.collection.deleteMany({ age: { $eq: 50 } })