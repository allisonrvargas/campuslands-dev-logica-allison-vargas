# Ejercicio 016: Motor de Auditoría Contable y Presupuestación de Proyectos de Animación Digital

## Análisis del Problema

El objetivo es desarrollar un componente de software para estudios de animación y productoras multimedia que procese los metadatos de un proyecto audiovisual y su listado de escenas. El sistema calculará el costo total sumando recargos por complejidad de renderizado a la base de cada escena, evaluará la jerarquía de descuentos comerciales de forma progresiva y generará una auditoría contable final aplicando programación defensiva.

* **Entrada:** Un objeto contenedor con la siguiente firma:
    * `proyecto`: Un objeto que posee el `nombre` [String] y un array de objetos `escenas` (Cada escena contiene: `identificador` [String], `costoBase` [Number], y `elementosComplejos` [Number]).
* **Proceso:** 1. Validar rigurosamente mediante cláusulas de guarda que el objeto contenga una lista poblada de escenas para evitar excepciones en tiempo de ejecución.
    2. Definir constantes financieras estables como la tarifa fija por elemento complejo ($120.00$).
    3. Inicializar acumuladores aritméticos en cero para el presupuesto bruto total y la cantidad de elementos de complejidad.
    4. Utilizar un ciclo `for` tradicional o métodos iterativos nativos ($O(n)$) para calcular el costo individualizado de cada escena sumando su base y sus recargos correspondientes.
    5. Evaluar mediante lógica condicional jerárquica los topes financieros y de volumen para asignar el porcentaje de descuento comercial adecuado (0%, 10% o 18%).
    6. Calcular los importes de descuento y costo final neto aplicando formateo restrictivo a dos decimales.
* **Salida:** Un objeto con la estructura estricta: `{ nombreProyecto: string, resumenTecnico: { totalEscenas: number, totalElementosComplejos: number }, contabilidad: { presupuestoBruto: number, porcentajeDescuento: string, ahorroDescuento: number, presupuestoNeto: number } }`.

---

## Reglas de Negocio

1. **Recargo por Complejidad Vectorial:** Cada personaje, entorno dinámico o accesorio complejo configurado en una escena añade un costo incremental directo de $120.00 al presupuesto base de dicho fragmento:
    $$\text{Costo Escena} = \text{costoBase} + (\text{elementosComplejos} \times 120.00)$$
2. **Jerarquía de Descuentos Progresivos:** Los beneficios financieros no son acumulables y se evalúan de forma jerárquica y mutuamente excluyente bajo los siguientes criterios:
    * Si el proyecto tiene $\ge 8$ escenas **o** el monto acumulado total supera los $\$10,000$, se aplica un **18% de descuento**.
    * Si el proyecto tiene entre $4$ y $7$ escenas **o** el monto acumulado total supera los $\$5,000$, se aplica un **10% de descuento**.
    * En cualquier otra combinación inferior, no se concede descuento financiero (0%).
3. **Restricción de Negatividad Financiera (Caso Borde):** Los costes de infraestructura no admiten saldos negativos ($c < 0$ o $e < 0$). Valores anómalos detienen el cálculo arrojando un reporte de error controlado.

---

## Casos de Prueba

### 1. Presupuestación con Descuento del 18% por Monto (Caso Normal)
* **Entrada:**
    ```json
    {
      "proyecto": {
        "nombre": "Neo-Guatemala 2026",
        "escenas": [
          { "identificador": "Escena 1", "costoBase": 2500, "elementosComplejos": 5 },
          { "identificador": "Escena 2", "costoBase": 4000, "elementosComplejos": 12 },
          { "identificador": "Escena 3", "costoBase": 1800, "elementosComplejos": 3 }
        ]
      }
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "nombreProyecto": "Neo-Guatemala 2026",
      "resumenTecnico": {
        "totalEscenas": 3,
        "totalElementosComplejos": 20
      },
      "contabilidad": {
        "presupuestoBruto": 10700.00,
        "porcentajeDescuento": "18%",
        "ahorroDescuento": 1926.00,
        "presupuestoNeto": 8774.00
      }
    }
    ```

### 2. Activación de Guarda por Datos Negativos (Caso Borde)
* **Entrada:**
    ```json
    {
      "proyecto": {
        "nombre": "Proyecto Invalido",
        "escenas": [
          { "identificador": "Escena Intro", "costoBase": -500, "elementosComplejos": 2 }
        ]
      }
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "error": "Error de telemetría financiera. Se detectaron costos base o elementos de complejidad menores a cero."
    }
    ```

### 3. Activación de Guarda por Ausencia de Escenas (Caso Borde)
* **Entrada:**
    ```json
    {
      "proyecto": {
        "nombre": "Cortometraje Vacio",
        "escenas": []
      }
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "nombreProyecto": "Cortometraje Vacio",
      "resumenTecnico": {
        "totalEscenas": 0,
        "totalElementosComplejos": 0
      },
      "contabilidad": {
        "presupuestoBruto": 0.00,
        "porcentajeDescuento": "0%",
        "ahorroDescuento": 0.00,
        "presupuestoNeto": 0.00
      }
    }
    ```

---

## Arquitectura de la Solución

La solución implementa el patrón de diseño de **Cláusulas de Guarda** coordinado con retornos anticipados (*Early Returns*) al inicio de la ejecución para interceptar lotes vacíos, nulos o con datos corruptos, lo que evita la indentación profunda y destructiva de bloques condicionales (*Arrow Anti-pattern*). La recolección de los costos parametrizados y la sumatoria aritmética lineal se efectúan en una única iteración con una complejidad de tiempo de $O(n)$ respecto al número total de escenas, manteniendo una complejidad espacial de $O(1)$ para optimizar el consumo de recursos en entornos Cloud de alta concurrencia.

---

## Ejecución del Módulo

1. Asegúrate de contar con [Node.js](https://nodejs.org/) instalado en tu estación de trabajo (versión LTS recomendada).
2. Abre la consola de comandos o terminal en el directorio raíz de este ejercicio.
3. Ejecuta el script de la solución utilizando el comando:
    ```bash
    node maria-montepeque.js
    ```