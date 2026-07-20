// Función principal para simular estados de películas de terror
function simularEstadoPelicula(items, prioridad, regla) {
    if (!validarPeliculas(items)) {
        return {
            accion: "sin accion inmediata",
            motivo: "no hay películas en la colección para simular."
        };
    }

    if (esPeliculaBloqueada(items, regla)) {
        return {
            accion: "revisar bloqueado",
            motivo: "toca revisar esta película primero porque el archivo de efectos está corrupto."
        };
    }

    return {
        accion: "revisar tareas normales",
        motivo: "todo bien con la colección, las películas están listas para el estreno."
    };
}

// Funciones pequeñas para organizar mejor
function validarPeliculas(items) {
    return items && Array.isArray(items) && items.length > 0;
}

function esPeliculaBloqueada(items, regla) {
    return regla === "revisar bloqueados primero" && items.includes("bloqueado");
}