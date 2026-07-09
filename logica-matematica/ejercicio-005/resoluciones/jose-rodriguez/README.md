# Plantilla de solucion

## Analisis

- Entrada:
    - `nivel_liquido_porcentaje` (float): Porcentaje del volumen actual detectado en el deposito del liquido de frenos.
    - `desgaste_pastillas_mm` (float): Medicion fisica en milimetros del grosor que ha perdido la pastilla de freno.

- Proceso:
    1. Definir los umbrales criticos del taller: una barrera minima para el liquido (40%) y una frontera maxima para el desgaste de pastillas (8.0 mm).
    2. Evaluar mediante operaciones de comparacion si el liquido esta por debajo del minimo **O** si el desgaste supero el limite.
    3. Utilizar una estructura condicional anidada para jerarquizar la gravedad:
        - Si se violan ambas fronteras simultaneamente (conjuncion `and`), el estado es critico.
        - Si se viola al menos una de las fronteras (Disyuncion `or`), se levanta una orden de mantenimiento preventivo.
        - Si ninguna regla de riesgo se activa, el vehiculo se declara apto.

    - Salida:
        - `diagnostivo` (Cadena de texto con la descripcion detallada del estado del vehiculo).
        - `apto_para_circular` (booleano: `True` o `False`).

## Reglas identificadas

1. **Control de minimo absoluto (Liquido):** El fluido hidraulico opera bajo presion. Si la variabled cae por debajo del minimo seguro ($Liquido < 40\%$), el sistema logico debe marcar el fallo inmediatamente para evitar perdidas de presion.
2. **Contorl del limite maximo fisico (Pastillas):** El desgaste es una variable acumulativa. Al rebasar la frontera maxima tolerada ($Desgaste > 8.0\text{ mm}$), el roce metal con metal es inminente, disparando la alerta de seguridad.
3. **Jeerarquia logica del riesgo.:** El algoritmo implementa un orden de evaluacion estricto. Primero busca el peor escenario posible (falla dobre usando `and`) antes de evaluar las fallas individuales (usando `or`), garantizando que un diagnnostico critico nunca sea enmascarado por una advertencia menor.

## Pruebass

### Caso normal

Entrada:
- `nivel_liquido_porcentaje`: 35.0
- `desgaste_pastillas_mm`: 4.5

Resultado esperado:
- `Resultado del Diagnóstico`: "PRECAUCIÓN: Se requiere mantenimiento preventivo inmediato de la pieza afectada."
- `¿Vehículo Apto?`: `False` *(Cálculo: 35.0 < 40 es Verdadero, pero 4.5 > 8.0 es Falso. El operador OR se satisface con que una sea verdadera, impidiendo que el carro circule pero sin llegar a estado crítico dual)*

### Caso borde

Entrada:
- `nivel_liquido_porcentaje`: 40.0
- `desgaste_pastillas_mm`: 8.0

Resultado esperado:
- `Resultado del Diagnóstico`: "ÓPTIMO: El sistema de frenos se encuentra dentro de los límites de seguridad."
- `¿Vehículo Apto?`: `True` *(Cálculo: Las reglas usan comparadores estrictos `<` y `>`. Al evaluar 40.0 < 40 da Falso y 8.0 > 8.0 da Falso. Al tocar exactamente las fronteras permitidas, el sistema lo considera el último punto seguro de operación)*

## Explicacion final 

Esta solucion funciona porque replica con totral fidelidad el fuincionamiento de los sensores fisicos industriales. Al mapear un limite inferior (minimo) y un limite superior (maximo), el software encierrra la operacion del vehiculo dentro de un "rango seguro". El uso de operadores booleanos (`and` / `or`) permite clasificar la severidad de los problemas detectados en el taller mecanico de manera automatizada y sin margen de error humano interpretativo.