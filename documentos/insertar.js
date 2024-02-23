// * Insertar un nuevo documento en una colección

db.collection.insertOne({ name: "Andres", lastname:"Chaves",age: 24 })


// * Insertar varios documentos

db.collection.insertMany([
    { name: "Andres", lastname:"Chaves",age: 24 },
    { name: "Mayer", lastname:"Chaves",age: 23 } 
])
