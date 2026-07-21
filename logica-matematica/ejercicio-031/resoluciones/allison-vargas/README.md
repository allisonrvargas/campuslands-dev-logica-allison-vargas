# Plantilla de solucion - Conteo combinatorio simple (Kickboxing)

## Analisis del problema

En la organización de un torneo de kickboxing, es necesario calcular el número total de enfrentamientos o combinaciones posibles entre peleadores de distintas categorías, aplicando el principio multiplicativo del conteo combinatorio. Además, se deben aplicar restricciones como la exclusión de combates no autorizados o la posibilidad de enfrentamientos estilo "todos contra todos" dentro de un mismo grupo.

## Reglas aplicadas

1. **Validación de Entradas (Caso Borde):**
   - Si la cantidad de peleadores por grupo es menor a 2 (para combates internos) o alguno de los grupos está vacío/inválido, se determina la clasificación `"invalido"`.
2. **Cálculo Combinatorio:**
   - **Entre dos categorías distintas (Principio Multiplicativo):** $\text{Total Combates} = \text{Grupo A} \times \text{Grupo B}$.
   - **Combates internos "todos contra todos" ($\binom{n}{2}$):** $\frac{n \times (n - 1)}{2}$.
3. **Clasificación del Evento:**
   - **Gran Torneo:** $\ge 20$ combates posibles.
   - **Velada Estándar:** Entre $8$ y $19$ combates posibles.
   - **Exhibición:** Menos de $8$ combates posibles.

## Solucion implementada

```javascript
/**
 * Ejercicio 031 - Logica Matematica: Conteo Combinatorio Simple (Kickboxing)
 */

function calcularCombatesKickboxing(grupoA, grupoB = 0) {
    // 1. Validar entradas
    if (typeof grupoA !== 'number' || grupoA < 0 || typeof grupoB !== 'number' || grupoB < 0) {
        return {
            total_combates: 0,
            clasificacion: "invalido",
            explicacion: "El numero de peleadores debe ser un valor entero no negativo."
        };
    }

    let totalCombates = 0;

    // 2. Determinar si es torneo inter-grupo o interno (todos contra todos)
    if (grupoB > 0) {
        // Principio multiplicativo entre dos grupos
        totalCombates = grupoA * grupoB;
    } else {
        // Combates internos: n * (n - 1) / 2
        if (grupoA < 2) {
            return {
                total_combates: 0,
                clasificacion: "invalido",
                explicacion: "Se necesitan al menos 2 peleadores para organizar combates internos."
            };
        }
        totalCombates = (grupoA * (grupoA - 1)) / 2;
    }

    // 3. Clasificar el evento
    let clasificacion = "";
    if (totalCombates >= 20) {
        clasificacion = "gran torneo";
    } else if (totalCombates >= 8) {
        clasificacion = "velada estandar";
    } else {
        clasificacion = "exhibicion";
    }

    const tipoEvento = grupoB > 0 ? "inter-grupo" : "todos contra todos";

    return {
        total_combates: totalCombates,
        clasificacion: clasificacion,
        explicacion: `Modalidad ${tipoEvento}. Se pueden realizar ${totalCombates} combates en total.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCION
// ==========================================

console.log("=== Caso Normal (Inter-grupo) ===");
const caso1 = calcularCombatesKickboxing(5, 4);
console.log(caso1);

console.log("\n=== Caso Borde (Peleadores insuficientes) ===");
const caso2 = calcularCombatesKickboxing(1, 0);
console.log(caso2);
```

## Pruebas y Resultados

### Caso normal
- **Entrada:** `grupoA: 5`, `grupoB: 4`
- **Proceso:**
  - Aplicando principio multiplicativo: $5 \times 4 = 20$ combates posibles.
  - Como es $\ge 20 \rightarrow$ **gran torneo**.
- **Resultado obtenido:**
  ```json
  {
    "total_combates": 20,
    "clasificacion": "gran torneo",
    "explicacion": "Modalidad inter-grupo. Se pueden realizar 20 combates en total."
  }
  ```

### Caso borde
- **Entrada:** `grupoA: 1`, `grupoB: 0`
- **Resultado obtenido:**
  ```json
  {
    "total_combates": 0,
    "clasificacion": "invalido",
    "explicacion": "Se necesitan al menos 2 peleadores para organizar combates internos."
  }
  ```

## Como revisar la solucion

1. Navegar a `logica-matematica/ejercicio-031/resoluciones/allison-vargas/`.
2. Ejecutar con Node.js:
   ```bash
   node allison-vargas.js
   ```

## Explicacion final

Creamos un programa que evalúa cuántos cruces o enfrentamientos de kickboxing se pueden organizar según la cantidad de peleadores disponibles. Si son de dos categorías distintas multiplica las listas, y si es dentro del mismo grupo calcula las combinaciones sin repetición.