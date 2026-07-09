## Analisis

- Entrada: Un arreglo con los niveles de aceite de distintos vehículos y un límite mínimo de seguridad.
- Proceso: Identificar el valor más bajo del arreglo (mínimo) y compararlo con el límite establecido.
- Salida: El valor mínimo detectado y el estado de seguridad del taller.

## Reglas identificadas

1. El nivel mínimo se obtiene comparando todos los niveles del inventario.
2. Si el nivel mínimo detectado es menor al 'limiteMinimo', el taller está en alerta.
3. Si el nivel mínimo es igual o mayor, el taller es operativo.

## Pruebas

### Caso normal

Entrada:
nivelesAceite: [3.5, 4.2, 2.8, 5.0, 3.2]
limiteMinimo: 3.0

Resultado esperado:
nivel_minimo_detectado: 2.8
estado: alerta: vehiculos en riesgo

### Caso borde

Entrada:
nivelesAceite: [3.0, 4.0, 5.0]
limiteMinimo: 3.0

Resultado esperado:
nivel_minimo_detectado: 3.0
estado: operativo: niveles seguros

## Explicacion final

Utilicé la función `Math.min()` con el operador de propagación (`...`) para obtener el valor más crítico del arreglo de forma eficiente. Luego, mediante un condicional `if-else`, comparé este valor crítico contra el límite de seguridad. Esto permite automatizar la detección de riesgos en el taller sin necesidad de iterar manualmente sobre todos los vehículos.