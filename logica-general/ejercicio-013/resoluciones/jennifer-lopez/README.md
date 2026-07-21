# Plantilla de solucion

## Analisis

- Entrada: Una lista con las alturas en metros registradas por un grupo de paracaidistas: [1500, 900, 1200, 850].

- Proceso: El programa evalúa los casos uno a uno mediante un ciclo. Si la altura de apertura es menor a 1000 metros, se acumula como un "caso de riesgo" por abrir el paracaídas muy abajo.

- Salida: El recuento total de casos de riesgo detectados.

## Reglas identificadas

1. Un salto se considera seguro si la altura de apertura es mayor o igual a 1000 metros.

2. Si la altura de apertura es inferior a 1000 metros, el caso se resuelve acumulándose como "Alerta de Riesgo".

3. Si el registro tiene alturas con valores negativos o en cero, el sistema debe marcarlo como una inconsistencia crítica en el sensor.

## Pruebas

### Caso normal
Entrada: alturas: [1500, 900, 1200, 850]

Resultado esperado: casosRiesgo: 2, mensaje: "Analisis terminado. Se detectaron 2 casos de riesgo por apertura baja."

### Caso borde
Entrada: alturas: [1200, -50, 1500]

Resultado esperado: casosRiesgo: 0, mensaje: "Error: Se encontro un valor de altura imposible en los registros."

## Explicacion final
Esta solución el programa analiza la seguridad en el paracaidismo examinando un arreglo de datos. El ciclo permite evaluar cada caso individualmente; si se topa con una altura negativa, el flujo se interrumpe por seguridad para alertar sobre la falla del sensor.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.
