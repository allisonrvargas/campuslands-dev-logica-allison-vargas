# Plantilla de solucion

## Analisis
El problema se diseñó para implementar un motor de validación estricta de planillas de arbitraje e informes de partidos en un torneo de fútbol sala. Antes de actualizar la tabla general de posiciones y el ranking de juego limpio de los equipos, el sistema debe inspeccionar que los datos reportados por la mesa técnica no tengan contradicciones físicas o matemáticas básicas (como registrar más goles que tiros totales, o reportar tarjetas sin faltas), garantizando la integridad estadística del campeonato.

- Entrada: Goles anotados (entero), tiros a puerta totales (entero), tarjetas rojas (entero) y faltas acumuladas del equipo (entero).
- Proceso: 
  1. Verificar que ninguno de los valores sea negativo.
  2. Evaluar la consistencia lógica de los goles frente a los tiros a puerta.
  3. Evaluar la consistencia de las sanciones disciplinarias (una tarjeta roja directa o por acumulación requiere que exista al menos una falta registrada en la planilla).
- Salida: Un objeto que indica si la planilla de datos es válida (booleano) y una descripción corta del error detectado en caso de fallar.

## Reglas identificadas
1. Límite Físico del Gol: Es imposible anotar más goles que los tiros directos a puerta ejecutados por el equipo ($\text{goles} \leq \text{tirosAPuerta}$).
2. Correlación Disciplinaria: Las faltas colectivas son el origen de las sanciones directas en fútbol sala. Si el equipo registra una o más tarjetas rojas, la cantidad de faltas acumuladas debe ser estrictamente mayor a cero ($\text{tarjetasRojas} > 0 \implies \text{faltas} > 0$).
3. Integridad de Valores Naturales: Todos los parámetros numéricos de entrada deben pertenecer al conjunto de los números enteros no negativos. Cualquier valor menor a cero invalida automáticamente el reporte.

## Pruebas

### Caso válido
Entrada: goles = 3, tirosAPuerta = 8, tarjetasRojas = 1, faltas = 4
Resultado esperado: { "planillaValida": true, "motivoError": "Ninguno" }

### Caso inválido por goles imposibles
Entrada: goles = 5, tirosAPuerta = 2, tarjetasRojas = 0, faltas = 3
Resultado esperado: { "planillaValida": false, "motivoError": "Inconsistencia entre goles y tiros" }

### Caso inválido por sanción sin faltas
Entrada: goles = 1, tirosAPuerta = 4, tarjetasRojas = 1, faltas = 0
Resultado esperado: { "planillaValida": false, "motivoError": "Sanción disciplinaria sin faltas registradas" }

## Explicacion final
La solución funciona porque actúa como un filtro de aserciones lógicas secuenciales, deteniendo la cadena de inserción de datos ante cualquier violación de los principios reglamentarios del deporte.