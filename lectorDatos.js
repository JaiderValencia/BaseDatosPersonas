const fs = require('fs');

let leerPersonas = fs.readFileSync(__dirname + "/datos/personas.json", "utf-8");

let leerPersonasConvertido = JSON.parse(leerPersonas);

module.exports = leerPersonasConvertido;