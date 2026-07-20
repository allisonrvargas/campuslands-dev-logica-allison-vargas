# Ejercicio 010: Motor de División de Costos y Balance Contable de Precisión

## Análisis del Problema

El objetivo es desarrollar un componente de software para agencias de viajes y pasarelas de pago que divida de manera equitativa el costo de un paquete turístico entre un grupo de viajeros. El sistema calculará la cuota individual formateada a dos decimales y deducirá algebraicamente el residuo de precisión o desfase por redondeo (*ajuste de centavos*) para garantizar la conservación del valor total en el balance contable.

* **Entrada:** Un objeto contenedor con la siguiente firma:
    * `destino`: String (Especifica el lugar o destino del viaje).
    * `costoTotalPaquete`: Number (Valor numérico flotante que define el costo bruto original).
    * `cantidadViajeros`: Number (Número entero que representa el divisor del grupo).
* **Proceso:** 1. Validar la consistencia de las entradas mediante cláusulas de guarda condicionales para bloquear indeterminaciones matemáticas o parámetros negativos.
    2. Ejecutar la división aritmética del costo global sobre el total de viajeros para obtener una cuota continua.
    3. Aplicar el estándar monetario internacional fijando la precisión a exactamente dos cifras centesimales mediante el método `.toFixed(2)`.
    4. Multiplicar la cuota ajustada y parseada por el número total de integrantes para simular la recolección física del efectivo.
    5. Calcular el residuo de precisión (`ajusteCentavosCaja`) restando el costo total original del total recaudado redondeado.
* **Salida:** Un objeto con la estructura estricta: `{ destino: string, finanzas: { cuotaIndividual: number, totalRecaudado: number, ajusteCentavosCaja: number } }`.

---

## Reglas de Negocio

1. **Precisión Financiera Comercial:** Los cobros fraccionados no pueden procesar milésimas de unidad en pasarelas de pago estándar, por lo que se obliga un truncamiento o redondeo centesimal simétrico.
2. **Conservación del Valor Total:** Cualquier fracción de centavo perdida o ganada durante el redondeo individual debe ser identificada y registrada explícitamente como un saldo de ajuste para evitar desajustes contables en el consolidado final:
    $$\text{ajusteCentavosCaja} = (\text{cuotaIndividual} \times \text{cantidadViajeros}) - \text{costoTotalPaquete}$$
3. **Clausura por Cero Divisor (Caso Borde):** Si el grupo de viajeros es menor o igual a cero ($\le 0$), el flujo se cancela de inmediato mitigando excepciones en la terminal y devolviendo un estado de error controlado.

---

## Casos de Prueba

### 1. Distribución con Desfase de Centavos (Caso Normal)
* **Entrada:**
    ```json
    {
      "destino": "Isla de Flores",
      "costoTotalPaquete": 1000.55,
      "cantidadViajeros": 3
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "destino": "Isla de Flores",
      "finanzas": {
        "cuotaIndividual": 333.52,
        "totalRecaudado": 1000.56,
        "ajusteCentavosCaja": 0.01
      }
    }
    ```

### 2. Distribución Exacta Sin Residuo (Caso Alterno)
* **Entrada:**
    ```json
    {
      "destino": "Antigua Guatemala",
      "costoTotalPaquete": 1200.00,
      "cantidadViajeros": 4
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "destino": "Antigua Guatemala",
      "finanzas": {
        "cuotaIndividual": 300.00,
        "totalRecaudado": 1200.00,
        "ajusteCentavosCaja": 0.00
      }
    }
    ```

### 3. Activación de Guarda por Divisor Inválido (Caso Borde)
* **Entrada:**
    ```json
    {
      "destino": "Tikal",
      "costoTotalPaquete": 500.00,
      "cantidadViajeros": 0
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "error": "Cantidad de viajeros inválida. El divisor debe ser estrictamente mayor a cero."
    }
    ```

---

## Arquitectura de la Solución

La solución utiliza el patrón de diseño de **Cláusulas de Guarda** al inicio de la función para interceptar de inmediato valores que invaliden las operaciones matemáticas del negocio, evitando el anidamiento innecesario de bloques condicionales (*Arrow Anti-pattern*). Las transformaciones monetarias controlan el comportamiento impreciso del estándar IEEE 754 de coma flotante en JavaScript forzando un re-parseo numérico después de aplicar `.toFixed()`. La complejidad de tiempo y espacio se mantiene en un estricto $O(1)$, maximizando la velocidad de respuesta.

---

## Ejecución del Módulo

1. Asegúrate de contar con [Node.js](https://nodejs.org/) instalado en tu estación de trabajo (versión LTS recomendada).
2. Abre la consola de comandos o terminal en el directorio raíz de este ejercicio.
3. Ejecuta el script de la solución utilizando el comando:
    ```bash
    node maria-montepeque.js
    ```