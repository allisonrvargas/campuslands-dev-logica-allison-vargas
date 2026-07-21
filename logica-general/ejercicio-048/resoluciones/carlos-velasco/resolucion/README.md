# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo de objetos `peliculas` (con `titulo`, `subgenero`, `disponible`) y un string `preferencia`.
* **Proceso**: Filtrado de películas disponibles, búsqueda de coincidencia exacta con la preferencia y aplicación de una lógica de "fallback" (sugerencia) en caso de no hallar coincidencia.
* **Salida**: Un objeto que indica la `accion` (película recomendada) y el `motivo` de dicha recomendación.

## Reglas identificadas

1. Solo se pueden recomendar películas que tengan la propiedad `disponible` en `true`.
2. Si existe una película disponible con el mismo `subgenero` que la `preferencia` del usuario, esta debe ser la recomendada.
3. Si no hay coincidencias exactas pero existen películas disponibles, se recomienda la primera película encontrada en el catálogo filtrado.

## Pruebas

### Caso normal

* **Entrada**: `catalogo, "Cyberpunk"`
* **Resultado esperado**: `{ accion: "Ver Blade Runner 2049", motivo: "Coincidencia exacta con tu preferencia." }`

### Caso borde

* **Entrada**: `catalogo, "Space Opera"`
* **Resultado esperado**: `{ accion: "Ver Blade Runner 2049", motivo: "No hay coincidencias exactas, sugerencia basada en disponibilidad." }`

## Explicacion final

La solución funciona mediante una estrategia de filtrado y búsqueda jerárquica. Primero, se limpia el catálogo para trabajar únicamente con elementos válidos (`disponibles`), lo que evita errores de recomendación. Luego, utiliza `.find()` para intentar satisfacer la preferencia del usuario y, si no es posible, utiliza la posición inicial del arreglo resultante como una alternativa segura, garantizando siempre una respuesta coherente al usuario.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Disponibilidad**: `p.disponible === true`
* **Coincidencia**: `disponibles.find(p => p.subgenero === preferencia)`
* **Catálogo vacío**: `disponibles.length === 0`