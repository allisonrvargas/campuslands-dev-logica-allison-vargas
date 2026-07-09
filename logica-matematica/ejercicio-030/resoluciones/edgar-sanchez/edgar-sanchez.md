# Plantilla de solucion

## Analisis
El problema se diseñó para resolver la división equitativa de gastos multi-moneda y comisiones operativas en paquetes de viajes y turismo. Cuando un grupo de turistas contrata un itinerario internacional, los costos de transporte, hospedaje y guías locales se consolidan en una sola cuenta que debe dividirse de forma exacta. Debido a que las operaciones bancarias exigen transacciones con centavos reales, el sistema debe controlar los errores de redondeo acumulado, determinando quién absorbe los decimales remanentes para que el balance contable de la agencia de viajes cuadre a la perfección.

- Entrada: El costo total del paquete turístico (flotante), la cantidad de viajeros en el grupo (entero) y el porcentaje de impuesto turístico aplicable (flotante entre 0.0 y 1.0).
- Proceso: 
  1. Calcular el costo total con impuestos incluidos.
  2. Dividir el total entre el número de viajeros aplicando un truncamiento estricto a dos decimales para obtener la cuota base por persona.
  3. Multiplicar la cuota base por el número de viajeros y compararla con el costo total con impuestos para calcular el residuo o centavos de desfase acumulados debido al redondeo.
- Salida: Un objeto que contiene la cuota exacta que pagará la mayoría de los viajeros, el monto especial ajustado para el primer viajero (líder del grupo que absorbe el desfase) y el residuo total controlado.

## Reglas identificadas
1. Precisión de Moneda e Impuestos: El costo total con impuestos se calcula multiplicando el precio base por ($1 + \text{porcentajeImpuesto}$), aproximado a dos decimales de forma financiera.
2. Truncamiento de Cuota Base: Para asegurar que nadie pague de más por un error de redondeo hacia arriba, la cuota individual base se trunca estrictamente a dos cifras decimales utilizando factores de potencia ($\lfloor valor \times 100 \rfloor / 100$).
3. Absorción del Desfase (Ajuste de Grupo): La suma de los centavos perdidos en el redondeo se le asigna al primer pasajero de la lista de reservas. Su cuota final se define como: $\text{cuotaBase} + (\text{totalConImpuestos} - (\text{cuotaBase} \times \text{viajeros}))$.

## Pruebas

### Caso normal (Con desfase de centavos)
Entrada: costoTotal = 1000.00, cantidadViajeros = 3, impuesto = 0.05
Total con impuesto: 1050.00. División exacta: 350.00 cada uno. Sin desfase.
Entrada alternativa con desfase: costoTotal = 1000.00, cantidadViajeros = 3, impuesto = 0.00
Total: 1000.00. 1000 / 3 = 333.3333... Cuota base: 333.33. Acumulado: 999.99. Desfase: 0.01.
Resultado esperado: { "cuotaBase": 333.33, "cuotaLider": 333.34, "desfaseCentavos": 0.01 }

### Caso borde (Inconsistencia de pasajeros)
Entrada: costoTotal = 500.00, cantidadViajeros = 0, impuesto = 0.12
Resultado esperado: { "cuotaBase": 0.0, "cuotaLider": 0.0, "desfaseCentavos": 0.0 }

## Explicacion final
La solución funciona porque previene la pérdida flotante de capital en micro-transacciones turísticas, aislando el residuo fraccionario matemático y liquidándolo de manera segura en la factura del líder de la reserva del tour.