# Ejercicio 017: Motor de Auditoría Técnica y Control de Calidad de Modelos Arquitectónicos 3D

## Análisis del Problema

El objetivo es desarrollar un componente de software para estudios de arquitectura digital o plataformas de modelado que procese un lote de diseños 3D, evalúe sus propiedades técnicas mediante una ecuación ponderada de calidad, clasifique los planos en rangos cualitativos de viabilidad e identifique el modelo óptimo del ranking aplicando programación defensiva.

* **Entrada:** Un objeto contenedor con la siguiente firma:
    * `loteModelos`: Array de Objetos (Cada objeto representa un plano 3D con las propiedades: `nombre` [String], `optimizacionMalla` [Number], `rigorEscala` [Number], y `fidelidadTextura` [Number]).
* **Proceso:** 1. Verificar preventivamente mediante cláusulas de guarda que el arreglo contenga datos válidos antes de inicializar operaciones matemáticas.
    2. Inicializar los acumuladores y variables auxiliares necesarios (`sumaViabilidadGlobal`, `maxViabilidad`, el objeto contador para el desglose de clasificaciones y la ficha del ganador).
    3. Ejecutar un ciclo estructurado lineal ($O(n)$) para examinar de extremo a extremo las propiedades de cada plano.
    4. Descartar mediante compuertas lógicas cualquier plano con métricas fuera del espectro válido ($0$ a $100$).
    5. Calcular el puntaje final compuesto usando pesos específicos balanceados para priorizar la estabilidad técnica del archivo sobre el aspecto visual.
    6. Clasificar cualitativamente el plano e incrementar el acumulador correspondiente.
    7. Aislar el modelo con la puntuación más alta para definir el diseño ganador.
* **Salida:** Un objeto con la estructura estricta: `{ resumen: { totalProcesados: number, promedioViabilidad: number }, clasificaciones: { premium: number, estandar: number, bajoUmbral: number }, modeloGanador: { nombre: string, scoreFinal: number } }`.

---

## Reglas de Negocio

1. **Ponderación del Vector de Calidad:** El índice definitivo de viabilidad responde a la ecuación matemática de asignación por pesos, dándole mayor relevancia a la estabilidad poligonal y dimensional del archivo:
    $$\text{Score} = (\text{optimizacionMalla} \times 45\%) + (\text{rigorEscala} \times 30\%) + (\text{fidelidadTextura} \times 25\%)$$
2. **Segmentación de Rangos de Viabilidad:**
    * $\text{Score} \ge 85$: Clasificación `"Premium"` (Planos listos para producción/impresión 3D real).
    * $\text{Score} \ge 60$ y $< 85$: Clasificación `"Estándar"` (Requiere leves ajustes de optimización).
    * $\text{Score} < 60$: Clasificación `"Bajo Umbral"` (Rechazado debido a sobrecarga poligonal o desescalado).
3. **Invariabilidad de Límites (Caso Borde):** Cualquier métrica por debajo de 0 o por encima de 100 se considera un dato corrupto o anomalía de software y anula de inmediato la operación completa mediante un retorno anticipado por consistencia de auditoría.

---

## Casos de Prueba

### 1. Auditoría de Lote Estándar (Caso Normal)
* **Entrada:**
    ```json
    {
      "loteModelos": [
        { "nombre": "Eco-Rascacielos Alfa", "optimizacionMalla": 92, "rigorEscala": 88, "fidelidadTextura": 80 },
        { "nombre": "Centro Comercial Sostenible", "optimizacionMalla": 70, "rigorEscala": 95, "fidelidadTextura": 85 },
        { "nombre": "Pabellón de Cristal", "optimizacionMalla": 55, "rigorEscala": 60, "fidelidadTextura": 50 }
      ]
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "resumen": {
        "totalProcesados": 3,
        "promedioViabilidad": 75.13
      },
      "clasificaciones": {
        "premium": 1,
        "estandar": 1,
        "bajoUmbral": 1
      },
      "modeloGanador": {
        "nombre": "Eco-Rascacielos Alfa",
        "scoreFinal": 87.80
      }
    }
    ```

### 2. Aborto por Inconsistencia de Límites (Caso Alterno - Fuera de Rango)
* **Entrada:**
    ```json
    {
      "loteModelos": [
        { "nombre": "Plaza Central Corrupta", "optimizacionMalla": 105, "rigorEscala": 90, "fidelidadTextura": 80 }
      ]
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "error": "Auditoría suspendida. Se detectaron parámetros fuera del espectro porcentual válido (0 a 100)."
    }
    ```

### 3. Activación de Guarda por Estructura Vacía (Caso Borde)
* **Entrada:**
    ```json
    {
      "loteModelos": []
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "resumen": {
        "totalProcesados": 0,
        "promedioViabilidad": 0.00
      },
      "clasificaciones": {
        "premium": 0,
        "estandar": 0,
        "bajoUmbral": 0
      },
      "modeloGanador": {
        "nombre": "Ninguno",
        "scoreFinal": 0.00
      }
    }
    ```

---

## Arquitectura de la Solución

La solución adopta el patrón de diseño de **Cláusulas de Guarda** coordinado con retornos anticipados (*Early Returns*) al inicio y durante la ejecución del módulo para interceptar de inmediato colecciones vacías o parámetros nulos, eliminando el anidamiento innecesario de bloques condicionales (*Arrow Anti-pattern*). Siguiendo las restricciones de negocio, se implementa una sola pasada iterativa cuya complejidad de tiempo escala de forma estrictamente lineal $O(n)$ respecto al número de planos a auditar, manteniendo una complejidad espacial de $O(1)$ al operar directamente sobre tipos de datos primitivos en memoria.

---

## Ejecución del Módulo

1. Asegúrate de contar con [Node.js](https://nodejs.org/) instalado en tu estación de trabajo (versión LTS recomendada).
2. Abre la consola de comandos o terminal en el directorio raíz de este ejercicio.
3. Ejecuta el script de la solución utilizando el comando:
    ```bash
    node maria-montepeque.js
    ```