# Búsqueda de Hiperdeportivos

## Descripción
Motor de búsqueda para catálogo de autos hiperdeportivos que permite filtrar por nombre (marca/modelo) o por desempeño (velocidad mínima requerida).

## Reglas Aplicadas
- **Búsqueda dinámica:** Detecta si la entrada es texto o número para aplicar el filtro correcto.
- **Normalización:** La búsqueda de texto es insensible a mayúsculas y minúsculas.

## Cómo ejecutar
Ejecuta el archivo `nombre-apellido.js`. La función `buscarHiperdeportivo` procesa el catálogo y devuelve los objetos coincidentes.

## Casos Probados
- **Texto:** Búsqueda de marcas como "Bugatti" o "Rimac".
- **Numérico:** Búsqueda de autos que superen los 400 km/h.