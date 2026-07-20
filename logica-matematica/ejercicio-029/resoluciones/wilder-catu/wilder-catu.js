// =========================================
// Reto Campuslands - Películas de Miedo
// =========================================

// 1. Crear un arreglo de películas de miedo
const peliculas = [
    {
      titulo: "El Conjuro",
      duracion: 112
    },
    {
      titulo: "La Monja",
      duracion: 96
    },
    {
      titulo: "It",
      duracion: 135
    },
    {
      titulo: "Scream",
      duracion: 111
    },
    {
      titulo: "Actividad Paranormal",
      duracion: 86
    }
  ];
  
  // 2. Función para clasificar la duración de una película
  function clasificarPelicula(titulo, duracion) {
  
    if (duracion < 0) {
      return {
        titulo: titulo,
        clasificacion: "Dato inválido",
        mensaje: "La duración no puede ser negativa."
      };
    }
  
    let clasificacion = "";
  
    if (duracion >= 120) {
      clasificacion = "Película muy larga";
    } else if (duracion >= 100) {
      clasificacion = "Película estándar";
    } else {
      clasificacion = "Película corta";
    }
  
    return {
      titulo: titulo,
      duracion: duracion,
      clasificacion: clasificacion
    };
  }
  
  // 3. Procesar todas las películas
  const resultados = peliculas.map(pelicula =>
    clasificarPelicula(pelicula.titulo, pelicula.duracion)
  );
  
  // 4. Mostrar resultados
  console.log("=== Clasificación de Películas de Miedo ===\n");
  
  resultados.forEach(resultado => {
    console.log(
      `${resultado.titulo} (${resultado.duracion} min) -> ${resultado.clasificacion}`
    );
  });
  
  // =========================================
  // Casos de prueba
  // =========================================
  
  console.log("\n=== Caso de prueba normal ===");
  console.log(clasificarPelicula("Insidious", 103));
  
  console.log("\n=== Caso de prueba extremo ===");
  console.log(clasificarPelicula("Película Desconocida", -15));