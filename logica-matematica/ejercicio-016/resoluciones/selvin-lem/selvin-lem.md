# Logica matematica 016 - presupuestos y descuentos

## Como se planteo el problema
Se interpreto el array de participantes como costos de assets o escenas de un proyecto de animacion 3D. Con un ciclo y acumulador se sumo el presupuesto_total, y se definio un esquema de descuento por volumen segun ese total (a mayor presupuesto, mayor porcentaje de descuento). El puntaje_final se mantuvo con la formula ya validada (mediana redondeada + bono - penalizacion), y el umbral de clasificacion se baso en el propio descuento_porcentaje obtenido, para que el ejemplo (15%) diera "competitivo".

## Reglas aplicadas
1. Acumular `presupuesto_total = suma(participantes)` con un ciclo.
2. Definir `descuento_porcentaje`: `>=80` → 15%; `>=50` → 10%; si no → 5%.
3. Calcular `presupuesto_con_descuento = presupuesto_total - (presupuesto_total * descuento_porcentaje)`.
4. Ordenar el array y calcular `mediana`.
5. `puntaje_final = round(mediana) + bono - penalizacion`.
6. Clasificar: si `descuento_porcentaje >= 15%` → competitivo; si `>= 10%` → intermedio; si no → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → presupuesto_total 85, descuento_porcentaje 15, presupuesto_con_descuento 72.25, puntaje_final 27, clasificacion competitivo.
- Caso borde (presupuesto bajo): `[5,10,8]`, bono 0, penalizacion 0 → descuento_porcentaje 5, clasificacion principiante.
- Caso borde (array vacio): retorna error controlado.