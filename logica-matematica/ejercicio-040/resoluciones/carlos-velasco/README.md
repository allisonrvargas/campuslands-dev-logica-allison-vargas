# Logica matematica 040 - simulaciones con formulas

## Sistema de Simulación de Ventas

Este script calcula el beneficio neto acumulado a lo largo de un periodo de tiempo determinado, aplicando un crecimiento porcentual diario a las ventas y deduciendo un costo fijo operativo cada día.

* **Descripción del proceso:**
* **Iteración Diaria**: El sistema recorre el número de días definidos, calculando la ganancia diaria como la diferencia entre las ventas actuales y el costo fijo.
* **Crecimiento Exponencial**: Al finalizar cada día, las ventas se incrementan según una tasa de crecimiento porcentual.
* **Clasificación de Rentabilidad**: Evalúa si el acumulado total es superior a cero para clasificar la operación como "Rentable" o "En pérdida".


* **Tecnologías:**
* JavaScript (bucle `for`, cálculos exponenciales, lógica condicional).

---

### Explicación técnica

1. **Efecto de Interés Compuesto**: La actualización de `ventasActuales` en cada iteración mediante `ventasActuales *= (1 + tasa)` simula el crecimiento exponencial de las ventas, capturando el impacto acumulativo del incremento diario.
2. **Acumulación de Flujo**: La variable `totalAcumulado` permite rastrear el flujo de caja neto día a día, proporcionando una visión clara de la viabilidad económica al final del periodo de simulación.
3. **Formateo de Salida**: La función `.toFixed(2)` asegura que los valores financieros presentados mantengan una precisión estándar, eliminando variaciones por coma flotante.

### Lógica del Código

```javascript
const simularVentas = (inicial, tasa, dias, costoFijo) => {
    let ventasActuales = inicial;
    let totalAcumulado = 0;

    // 1. Acumulación de ganancia diaria
    for (let i = 1; i <= dias; i++) {
        totalAcumulado += (ventasActuales - costoFijo);
        // 2. Aplicación de tasa de crecimiento diario
        ventasActuales *= (1 + tasa);
    }

    // 3. Determinación de rentabilidad
    const rentabilidad = totalAcumulado > 0 ? "Rentable" : "En pérdida";

    return {
        ganancia_neta_total: totalAcumulado.toFixed(2),
        clasificacion: rentabilidad,
        explicacion: `Simulación de ${dias} días con tasa del ${tasa * 100}% y costo fijo de ${costoFijo}.`
    };
};

```

### Salida Esperada

De acuerdo con la ejecución registrada en el archivo {2157DBE3-8AB6-4158-8255-D0C5BA8B1ED3}.png:

```text
{
  ganancia_neta_total: '210.51',
  clasificacion: 'Rentable',
  explicacion: 'Simulación de 5 días con tasa del 10% y costo fijo de 80.'
}
{
  ganancia_neta_total: '-52.38',
  clasificacion: 'En pérdida',
  explicacion: 'Simulación de 3 días con tasa del 5% y costo fijo de 70.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-040/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco