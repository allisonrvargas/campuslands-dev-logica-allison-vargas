# Analisis

- **Entrada:** `nombre` (string), `victorias` (number), `partidasTotales` (number), `nivelExperiencia` (number).
- **Proceso:** Cálculo de porcentaje mediante división y multiplicación simple. Se usan bloques `if` independientes para determinar la categoría.
- **Salida:** Un objeto con el nombre del jugador y su categoría.

## Reglas aplicadas

1. **Elite:** Porcentaje de victorias del 70% o más y nivel 50 o superior.
2. **Veterano:** Porcentaje de victorias del 50% o más y nivel 20 o superior.
3. **Principiante:** Jugadores que no cumplen los criterios anteriores.

## Como ejecutar o revisar

1. Asegúrate de tener instalado Node.js.
2. Ejecuta el archivo en la terminal con: `node nombre-apellido.js`.
3. Los resultados se mostrarán directamente en la consola.

## Casos probados

### Caso normal
- **Entrada:** "ProPlayer", 80, 100, 60
- **Resultado:** { jugador: "ProPlayer", categoria: "Elite" }

### Caso borde
- **Entrada:** "Newbie", 5, 20, 5
- **Resultado:** { jugador: "Newbie", categoria: "Principiante" }

## Explicacion final

Al calcular el porcentaje de forma manual y evaluar cada condición por separado, eliminamos la necesidad de estructuras `else` complejas.