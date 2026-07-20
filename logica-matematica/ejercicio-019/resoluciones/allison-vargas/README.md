# Plantilla de solucion - Validaciones numericas (Formulas Quimicas)

## Analisis del problema

En la verificación de fórmulas y reacciones químicas, los coeficientes estequiométricos, pesos atómicos o subíndices de los elementos deben cumplir con ciertos rangos numéricos válidos (por ejemplo, ser números enteros positivos, mayores a cero y no superar un límite establecido de masa o de átomos en una molecula). El objetivo es recibir un listado de valores correspondientes a componentes de una fórmula química, filtrar aquellos que son válidos y calcular la masa o carga total acumulada.

## Reglas aplicadas

1. **Validación de Componentes Individuales:**
   - Un componente es **válido** si es un número finito, entero y mayor a $0$ ($\text{valor} \in \mathbb{Z}^+$).
   - Valores menores o iguales a $0$, decimales, flotantes no enteros, `NaN` o tipos de datos no numéricos se consideran **inválidos** y se descartan.
2. **Validación del Listado (Caso Borde):**
   - Si la entrada no es un arreglo o no contiene ningún componente válido tras la filtración, el resultado es `"invalido"`.
3. **Cálculo y Clasificación:**
   - **Suma Total (Acumulado):** Suma de todos los valores válidos.
   - **Clasificación según la masa o índice acumulado:**
     - **Estable:** Suma total menor o igual a 100.
     - **Reactivo:** Suma total entre 101 y 250.
     - **Inestable / Crítico:** Suma total mayor a 250.

## Solucion implementada

```javascript
/**
 * Ejercicio 019 - Logica Matematica: Validaciones Numericas (Formulas Quimicas)
 */

function validarFormulaQuimica(componentes) {
    // 1. Validar que la entrada sea un arreglo
    if (!Array.isArray(componentes) || componentes.length === 0) {
        return {
            componentes_validos: [],
            suma_total: 0,
            clasificacion: "invalido",
            explicacion: "La entrada debe ser un arreglo no vacio."
        };
    }

    const componentesValidos = [];
    let sumaTotal = 0;
    let elementosInvalidosCount = 0;

    // 2. Filtrar y validar cada componente
    for (let i = 0; i < componentes.length; i++) {
        const val = componentes[i];
        
        // Regla: Numero entero positivo estricto (> 0)
        if (typeof val === 'number' && Number.isInteger(val) && val > 0) {
            componentesValidos.push(val);
            sumaTotal += val;
        } else {
            elementosInvalidosCount++;
        }
    }

    // Caso Borde: Ningun componente valido
    if (componentesValidos.length === 0) {
        return {
            componentes_validos: [],
            suma_total: 0,
            clasificacion: "invalido",
            explicacion: "No se encontraron coeficientes o subindices validos (deben ser enteros mayores a 0)."
        };
    }

    // 3. Clasificar reactividad/estabilidad quimica
    let clasificacion = "";
    if (sumaTotal <= 100) {
        clasificacion = "estable";
    } else if (sumaTotal <= 250) {
        clasificacion = "reactivo";
    } else {
        clasificacion = "inestable";
    }

    return {
        componentes_validos: componentesValidos,
        suma_total: sumaTotal,
        clasificacion: clasificacion,
        explicacion: `Se procesaron ${componentesValidos.length} componentes validos (${elementosInvalidosCount} descartados). Suma total: ${sumaTotal}.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCION
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = validarFormulaQuimica([12, 18, 25, 30, -5, 2.5, "H2O"]);
console.log(caso1);

console.log("\n=== Caso Borde (Sin datos validos) ===");
const caso2 = validarFormulaQuimica([0, -10, 1.5, null, "3"]);
console.log(caso2);
```

## Pruebas y Resultados

### Caso normal
- **Entrada:** `componentes: [12, 18, 25, 30, -5, 2.5, "H2O"]`
- **Proceso:** 
  - Válidos: `[12, 18, 25, 30]` (Suma = 85)
  - Descartados: `-5` (negativo), `2.5` (decimal), `"H2O"` (string)
- **Resultado obtenido:**
  ```json
  {
    "componentes_validos": [12, 18, 25, 30],
    "suma_total": 85,
    "clasificacion": "estable",
    "explicacion": "Se procesaron 4 componentes validos (3 descartados). Suma total: 85."
  }
  ```

### Caso borde
- **Entrada:** `componentes: [0, -10, 1.5, null, "3"]`
- **Resultado obtenido:**
  ```json
  {
    "componentes_validos": [],
    "suma_total": 0,
    "clasificacion": "invalido",
    "explicacion": "No se encontraron coeficientes o subindices validos (deben ser enteros mayores a 0)."
  }
  ```

## Como revisar la solucion

1. Navegar a `logica-matematica/ejercicio-019/resoluciones/allison-vargas/`.
2. Ejecutar con Node.js:
   ```bash
   node allison-vargas.js
   ```

## Explicacion final

Se implementó un ciclo con verificaciones estrictas utilizando `Number.isInteger()` para garantizar que únicamente los coeficientes enteros positivos formen parte de la fórmula. Los datos incorrectos o corruptos se ignoran sin interrumplir el flujo del programa, devolviendo un reporte detallado con el nivel de estabilidad.