# Analisis

## Entrada: 
- Un objeto con el nombre de la película, cantidad_sustos (total de sobresaltos) y duracion_minutos.

- Proceso: Calcular la densidad de sustos por segmento de 10 minutos, verificar divisibilidad para detectar patrones rítmicos y clasificar según la intensidad.

- Salida: Un objeto que resume la frecuencia, si cumple el patrón rítmico y su nivel de intensidad.

## Reglas identificadas.

**Frecuencia:** Cálculo de la tasa de sustos normalizada cada 10 minutos: $frecuencia = \frac{sustos}{duracion/10}$.

**Patrón de divisibilidad (Módulo):** Una película tiene "ritmo cardíaco" si la cantidad de sustos es un múltiplo exacto de 5 y supera los 10 sustos.

**Clasificación:** Basada en la frecuencia resultante:
- 8: "Terror Extremo".
- 4 a 8: "Terror Psicológico".
- < 4: "Suspenso".

## PruebasCaso

**normalEntrada:** pelicula: {nombre: "El Conjuro", cantidad_sustos: 30, duracion_minutos: 110}

**Resultado esperado:** frecuencia: 2.73, es_ritmo_cardiaco: true, nivel_intensidad: "Suspenso"

**Caso borde** 

**Entrada:** pelicula: {nombre: "Terror Silencioso", cantidad_sustos: 2, duracion_minutos: 90}

**Resultado esperado:** frecuencia: 0.22, es_ritmo_cardiaco: false, nivel_intensidad: "Suspenso"

## Explicacion final

La solución utiliza el operador de módulo (%) para identificar patrones matemáticos en la estructura de la película. Esto permite detectar si el director ha diseñado los sustos bajo una cadencia específica (múltiplos de 5). Al normalizar la duración a bloques de 10 minutos, podemos comparar películas de distintas duraciones bajo una misma métrica de "intensidad por tiempo".

**Sugerencia**

Verifica cada operacion con calculos manuales antes de confiar en el codigo.