Analisis

    Entrada: Un objeto con el destino, costoBase por persona, numeroPersonas y tasaImpuesto (porcentaje).

    Proceso: Calcular el costo total incluyendo impuestos, aplicar una política de descuento por volumen (si excede 5000) y aplicar un redondeo estándar al entero más cercano para facilitar la gestión contable.

    Salida: Un objeto con el destino, el presupuesto final redondeado y la moneda.

Reglas identificadas

    Cálculo de Impuestos: Aplicar el porcentaje de impuesto sobre el subtotal acumulado.

    Descuento por Volumen: Si el monto total resultante tras impuestos supera los 5000 USD, se otorga un descuento del 5% sobre el total.

    Redondeo: Uso de Math.round() para obtener un valor entero, evitando problemas de precisión de punto flotante en la facturación.

Pruebas
Caso normal

Entrada: viaje: {destino: "Paris", costoBase: 1200, numeroPersonas: 2, tasaImpuesto: 10}

Resultado esperado: presupuesto_total: 2508, moneda: "USD"
Caso borde

Entrada: viaje: {destino: "Tokio", costoBase: 3000, numeroPersonas: 2, tasaImpuesto: 10}

Resultado esperado: presupuesto_total: 6270, moneda: "USD"
(Cálculo: 30002 = 6000. + 10% = 6600. - 5% = 6270)*
Explicacion final

La solución asegura precisión contable al separar el cálculo del subtotal del procesamiento final. La regla de descuento por volumen es clave para incentivar viajes grupales o de larga duración. Al utilizar Math.round(), garantizamos que los valores monetarios entregados al cliente sean limpios y manejables, cumpliendo con las normas estándar de facturación donde no se suelen manejar fracciones de unidad monetaria.

**Sugerencia**

Verifica cada operacion con calculos manuales antes de confiar en el codigo.
