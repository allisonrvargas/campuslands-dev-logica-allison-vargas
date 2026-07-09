## Analisis

- Entrada: `puntajeObtenido` y `puntajeMaximo` (datos crudos de la evaluación técnica).
- Proceso: Aplicar una regla de tres simple para convertir cualquier escala de evaluación a una base porcentual estándar (0-100).
- Salida: Un objeto con el puntaje normalizado y un estatus de aprobación basado en el umbral de 70 puntos.

## Reglas identificadas

1. Estandarización: $P_n = (\frac{P_o}{P_m}) \cdot 100$
2. Umbral de Calidad: Se considera "Aprobado" únicamente si el puntaje normalizado es $\ge 70$.
3. Integridad: Si el puntaje máximo es cero, el sistema retorna 0 para evitar errores de división por cero.



## Pruebas

### Caso normal

Entrada:
obtenido: 80, maximo: 100

Resultado esperado:
{ puntajeNormalizado: 80, aprobado: true }

### Caso borde

Entrada:
obtenido: 40, maximo: 80

Resultado esperado:
{ puntajeNormalizado: 50, aprobado: false }

## Explicacion final

La normalización es crítica en el control de calidad de soldadura, ya que diferentes pruebas (TIG, MIG, Electrodo) pueden tener diferentes rangos de puntos. Al convertir todo a una escala de 100, los instructores pueden tomar decisiones objetivas sobre qué soldadores están listos para certificación industrial.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.