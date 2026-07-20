## Analisis

- Entrada: Distancia total en píxeles de un dibujo y la velocidad de trazo del artista.
- Proceso: Calcular el tiempo dividiendo la distancia entre la velocidad ($Tiempo = Distancia / Velocidad$).
- Salida: El tiempo total estimado y el estado de la entrega.

## Reglas identificadas

1. Tiempo = Distancia / Velocidad.
2. Si el tiempo es 60 minutos o menos, la entrega es "entrega rapida".
3. Si el tiempo es mayor a 60 minutos, la entrega es "entrega extendida".

## Pruebas

### Caso normal

Entrada:
distanciaTotalPixels: 5000
velocidadPixelesPorMinuto: 50

Resultado esperado:
tiempo_estimado_minutos: 100
estado: entrega extendida

### Caso borde

Entrada:
distanciaTotalPixels: 2000
velocidadPixelesPorMinuto: 50

Resultado esperado:
tiempo_estimado_minutos: 40
estado: entrega rapida

## Explicacion final

Para resolver este reto, apliqué la fórmula básica de física para el tiempo. Utilicé una división simple para obtener el tiempo necesario. Luego, empleé una estructura condicional 'if-else' para comparar el tiempo obtenido con el límite de una hora (60 minutos), permitiendo clasificar el trabajo digital según su complejidad y velocidad de ejecución.