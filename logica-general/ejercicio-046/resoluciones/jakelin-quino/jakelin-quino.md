# Analisis

- **Entrada:** `catalogo` (arreglo de objetos), `nombreBuscado` (string).
- **Proceso:** Se utiliza un ciclo `for` para recorrer el arreglo. Al encontrar una coincidencia de nombre, se compara la propiedad `hp` contra un umbral constante (1000 hp) para validar su categoría.
- **Salida:** Un objeto con el estado de búsqueda y el resultado de la clasificación.

## Reglas aplicadas

1. **Búsqueda por Nombre:** El sistema requiere una coincidencia exacta de la cadena de texto.
2. **Clasificación de Potencia:** Se define como "Hiperdeportivo" todo vehículo con 1000 caballos de fuerza o más.
3. **Validación de Existencia:** Si el nombre no existe tras recorrer todo el arreglo, se devuelve un mensaje de error.

## Casos probados

### Caso normal
- **Entrada:** "Rimac Nevera"
- **Resultado:** { encontrado: true, nombre: "Rimac Nevera", esHiperdeportivo: true, ... }

### Caso borde
- **Entrada:** "Tesla Model S"
- **Resultado:** { encontrado: false, mensaje: "Auto no localizado en catálogo." }

## Explicacion final

Al separar la búsqueda del elemento de la validación de sus reglas de negocio (potencia), el código mantiene una clara separación de responsabilidades.