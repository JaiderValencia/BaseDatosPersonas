const personas = require('./lectorDatos');

let personasFuncionalidades = {
    personas,

    listadoPersonas: function () {
        console.log("-- Estas son las personas registradas --");
        console.log();

        this.personas.forEach(persona => {

            console.log("Nombre: " + persona.nombre);
            console.log("Apellido: " + persona.apellido);
            console.log("Celular: " + persona.celular);
            console.log("Dirección: " + persona.direccion);
            console.log("Género: " + persona.genero);

            console.log();
        });
    },

    busquedaNombre: function (nombre) {
        return this.personas.filter(persona => persona.nombre === nombre)
    },

    busquedaApellido: function (apellido) {
        return this.personas.filter(persona => persona.apellido === apellido)
    },

    busquedaNombreApellido: function (nombre, apellido) {
        return this.personas.filter(persona => persona.nombre === nombre && persona.apellido === apellido)
    },

    filtrarGenero: function (genero) {
        if (genero === "Hombre" || genero === "hombre" || genero === "male" || genero === "Male") {
            return this.personas.filter(persona => persona.genero === "M");
        } else if (genero === "Mujer" || genero === "mujer" || genero === "Female" || genero === "female") {
            return this.personas.filter(persona => persona.genero === "F");
        } else {
            return "Ingresa un genero disponible";
        }
    },

    nombreIniciaPor: function (letra) {
        const personas = this.personas;

        let personasEncontradas = [];

        for (const persona of personas) {
            if (persona.nombre[0] == letra) {
                personasEncontradas.push(persona);
            }
        }

        return personasEncontradas;
    },

    nombresQueFinalicenPor: function (letra) {
        const personas = this.personas;

        let personasEncontradas = []

        for (const persona of personas) {
            if (persona.nombre[persona.nombre.length - 1] == letra) {
                personasEncontradas.push(persona);
            }
        }

        return personasEncontradas;
    },

    nombresQueContengan: function (palabra) {
        const personas = this.personas;

        let personasEncontradas = [];

        for (const persona of personas) {
            if (persona.nombre.includes(palabra)) {
                personasEncontradas.push(persona)
            }
        }

        return personasEncontradas;
    }
}

console.log(personasFuncionalidades.nombresQueFinalicenPor("n"))