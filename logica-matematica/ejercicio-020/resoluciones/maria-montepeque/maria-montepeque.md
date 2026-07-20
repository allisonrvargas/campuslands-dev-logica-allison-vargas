# Ejercicio 020: Motor de Ingeniería de Menú y Costeo Operativo con Mermas Gastronómicas

## Análisis del Problema

El objetivo es desarrollar un componente de software para la gestión financiera de restaurantes que procese el listado de platillos de un menú. El sistema calculará el costo real de preparación indexando las pérdidas por tasas de desperdicio operativo y el costo fijo de envío, determinará el porcentaje de margen neto por artículo y consolidará el balance general del negocio aplicando programación defensiva.

* **Entrada:** Un objeto contenedor con la siguiente firma:
    * `listadoMenu`: Array de Objetos (Cada objeto representa un platillo con las propiedades: `nombre` [String], `precioVenta` [Number], `costoIngredientes` [Number], y `tasaDesperdicio` [Number, expresada en formato flotante decimal de 0 a 1]).
    * `costoFijoEnvio`: Number (Valor numérico flotante que penaliza equitativamente cada platillo elaborado).
* **Proceso:** 1. Diseñar una cláusula de guarda para restringir la ejecución si la estructura externa del menú está vacía o es nula.
    2. Iterar ordenadamente sobre el lote de comidas utilizando un enfoque funcional inmutable mediante el método `.map()`.
    3. Validar de forma estricta mediante condicionales que no se admitan valores económicos incoherentes (precios negativos o tasas de merma fuera del rango de 0 a 1).
    4. Resolver el costo real de preparación aplicando la fórmula matemática de incremento por desperdicio operativo más la logística de envío.
    5. Obtener el porcentaje de margen neto por artículo y categorizarlo cualitativamente mediante operadores condicionales jerárquicos.
    6. Consolidar el balance total neto unificando los ingresos frente a los costos de producción acumulados en el lote.
* **Salida:** Un objeto con la estructura estricta: `{ balanceMacro: { totalPlatillos: number, ingresosTotales: number, costosTotales: number, utilidadNeta: number }, rendimientoMenu: [{ nombre: string, costoReal: number, margenPorcentaje: number, clasificacion: string }] }`.

---

## Reglas de Negocio

1. **Ecuación del Costo Real con Merma:** El costo operativo real de cada platillo obedece al siguiente modelo de simulación de insumos:
    $$\text{costoReal} = \text{costoIngredientes} \times (1 + \text{tasaDesperdicio}) + \text{costoFijoEnvio}$$
2. **Cálculo de Margen de Ganancia:** El porcentaje de margen neto se evalúa sobre el precio de venta final utilizando la siguiente relación:
    $$\text{margenPorcentaje} = \left( \frac{\text{precioVenta} - \text{costoReal}}{\text{precioVenta}} \right) \times 100$$
3. **Escala de Rendimiento Comercial:** Los artículos de la carta se clasifican en las siguientes categorías excluyentes basadas en su margen:
    * Margen $\ge 40\%$: `"Platillo Estrella (Alta Rentabilidad)"`
    * Margen $\ge 15\%$ y $< 40\%$: `"Platillo Rentable (Margen Estándar)"`
    * Margen $< 15\%$: `"Revisar Receta (Margen Crítico o Pérdida)"`
4. **Restricción de Valores Reales (Caso Borde):** Los valores de costos e ingresos deben ser estrictamente mayores a cero ($> 0$), y la tasa de desperdicio no puede exceder el $100\%$ ($1.0$). Cualquier anomalía interrumpe la ejecución devolviendo un error controlado para proteger la contabilidad.

---

## Casos de Prueba

### 1. Evaluación Financiera de Menú Estándar (Caso Normal)
* **Entrada:**
    ```json
    {
      "listadoMenu": [
        { "nombre": "Monster Burger XL", "precioVenta": 75.0, "costoIngredientes": 25.0, "tasaDesperdicio": 0.10 },
        { "nombre": "Tacos de Birria (Orden)", "precioVenta": 45.0, "costoIngredientes": 18.0, "tasaDesperdicio": 0.15 },
        { "nombre": "Papas Nativas Suprema", "precioVenta": 30.0, "costoIngredientes": 15.0, "tasaDesperdicio": 0.05 }
      ],
      "costoFijoEnvio": 5.0
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "balanceMacro": {
        "totalPlatillos": 3,
        "ingresosTotales": 150.00,
        "costosTotales": 79.15,
        "utilidadNeta": 70.85
      },
      "rendimientoMenu": [
        {
          "nombre": "Monster Burger XL",
          "costoReal": 32.50,
          "margenPorcentaje": 56.67,
          "clasificacion": "Platillo Estrella (Alta Rentabilidad)"
        },
        {
          "nombre": "Tacos de Birria (Orden)",
          "costoReal": 25.70,
          "margenPorcentaje": 42.89,
          "clasificacion": "Platillo Estrella (Alta Rentabilidad)"
        },
        {
          "nombre": "Papas Nativas Suprema",
          "costoReal": 20.95,
          "margenPorcentaje": 30.17,
          "clasificacion": "Platillo Rentable (Margen Estándar)"
        }
      ]
    }
    ```

### 2. Aborto por Tasa de Desperdicio Superior al Límite (Caso Borde)
* **Entrada:**
    ```json
    {
      "listadoMenu": [
        { "nombre": "Platillo Inviable Corrupto", "precioVenta": 50.0, "costoIngredientes": 20.0, "tasaDesperdicio": 1.20 }
      ],
      "costoFijoEnvio": 5.0
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "error": "Procesamiento suspendido. Se detectaron magnitudes económicas incoherentes o tasas de desperdicio superiores al 100%."
    }
    ```

### 3. Activación de Guarda por Estructura Vacía (Caso Borde)
* **Entrada:**
    ```json
    {
      "listadoMenu": [],
      "costoFijoEnvio": 5.0
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "error": "Procesamiento cancelado. El menú gastronómico no contiene elementos válidos para auditar."
    }
    ```

---

## Arquitectura de la Solución

La solución adopta el patrón de diseño de **Cláusulas de Guarda** coordinado con retornos anticipados (*Early Returns*) al inicio de la función para interceptar colecciones vacías o nulas, eliminando el anidamiento innecesario de bloques condicionales (*Arrow Anti-pattern*). Se emplea una transformación inmutable mediante métodos iterativos nativos para mapear los resultados y reducir las métricas estadísticas en una sola pasada de complejidad de tiempo lineal $O(n)$, manteniendo una eficiencia espacial de $O(n)$ dedicada exclusivamente a estructurar el arreglo del reporte individualizado exigido por la gerencia del restaurante.

---

## Ejecución del Módulo

1. Asegúrate de contar con [Node.js](https://nodejs.org/) instalado en tu estación de trabajo (versión LTS recomendada).
2. Abre la consola de comandos o terminal en el directorio raíz de este ejercicio.
3. Ejecuta el script de la solución utilizando el comando:
    ```bash
    node maria-montepeque.js
    ```