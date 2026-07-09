## Analisis

- Entrada: Un arreglo de objetos, donde cada objeto contiene el `titulo` de la película y su `duracion` en minutos.
- Proceso: Determinar cuántos bloques de 120 minutos son necesarios para proyectar cada película y calcular el tiempo residual (desperdiciado) usando el operador módulo (`%`).
- Salida: Un nuevo arreglo que detalla el número de bloques requeridos y el tiempo sobrante por bloque.

## Reglas identificadas

1. Bloque base: Cada franja de tiempo tiene una duración fija de 120 minutos.
2. Divisibilidad: Si la duración de la película es divisible exactamente por 120, no queda tiempo desperdiciado.
3. Residuo: Si existe un residuo al dividir por 120, se requiere un bloque adicional y el tiempo desperdiciado es la diferencia entre el bloque y dicho residuo.

## Pruebas

### Caso normal

Entrada:
{ titulo: "El Conjuro", duracion: 130 }

Resultado esperado:
{ titulo: "El Conjuro", totalBloques: 2, tiempoDesperdiciado: 110 }

### Caso borde

Entrada:
{ titulo: "IT", duracion: 240 }

Resultado esperado:
{ titulo: "IT", totalBloques: 2, tiempoDesperdiciado: 0 }

## Explicacion final

La solución utiliza el operador módulo (`%`) para detectar si existe un remanente de tiempo que no llena un bloque de proyección completo. Esta lógica de divisibilidad es fundamental en sistemas de planificación para optimizar el uso de recursos técnicos (en este caso, los bloques de proyección).

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.