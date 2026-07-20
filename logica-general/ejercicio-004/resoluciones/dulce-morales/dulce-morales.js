function filtrarInventarioMotos(inventarioMotos, criteriosFiltro) {
    // Caso borde: Inventario vacío, nulo o criterios de búsqueda no definidos
    if (!inventarioMotos || inventarioMotos.length === 0 || !criteriosFiltro) {
        return {
            motosFiltradas: [],
            motivo: "El inventario de motocicletas se encuentra vacío o los criterios de búsqueda no están inicializados."
        };
    }

    const { cilindrajeMinimo = 0, precioMaximo = Infinity } = criteriosFiltro;

    // Proceso: Aplicar filtros condicionales por stock, cilindraje y presupuesto
    const resultadoMotos = inventarioMotos.filter(moto => {
        // 1. Validar que esté disponible en tienda
        if (!moto.disponible) return false;
        
        // 2. Validar que cumpla con las especificaciones del motor y precio
        const cumpleCilindraje = moto.cilindraje >= cilindrajeMinimo;
        const cumplePrecio = moto.precio <= precioMaximo;

        return cumpleCilindraje && cumplePrecio;
    });

    // Mapear el resultado para extraer únicamente los nombres de los modelos aptos
    const modelosAptos = resultadoMotos.map(moto => moto.modelo);

    return {
        motosFiltradas: modelosAptos,
        motivo: `Filtrado completado con éxito. Se encontraron ${modelosAptos.length} modelos que cumplen con los requisitos de rendimiento, costo y disponibilidad.`
    };
}

// Ejecución de pruebas para verificar consola
const stockConcesionario = [
    { modelo: "Yamaha R3", cilindraje: 321, precio: 5500, disponible: true },
    { modelo: "Honda CB190R", cilindraje: 184, precio: 3200, disponible: true },
    { modelo: "Kawasaki Ninja 400", cilindraje: 399, precio: 6200, disponible: false }
];

const misCriterios = { 
    cilindrajeMinimo: 250, 
    precioMaximo: 6000 
};

console.log(filtrarInventarioMotos(stockConcesionario, misCriterios)); // Caso Normal
console.log(filtrarInventarioMotos([], misCriterios));               // Caso Borde