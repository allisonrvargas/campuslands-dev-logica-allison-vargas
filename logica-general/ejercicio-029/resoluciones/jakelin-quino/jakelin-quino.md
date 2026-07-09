## Analisis

- Entrada: Un arreglo con los estados de la película (ej. suspenso, susto) y una cadena que indica el ambiente (oscuro/luz).
- Proceso: Recorrer el arreglo para detectar si existe el estado "susto" y verificar si el ambiente es "oscuro".
- Salida: La acción a realizar y el motivo de la decisión.

## Reglas identificadas

1. Si el ambiente es "oscuro" Y se detecta "susto" en la trama, se activa el "modo supervivencia".
2. En cualquier otro caso, se mantiene la visualización normal.

## Pruebas

### Caso normal

Entrada:
estados: ["suspenso", "susto", "final"]
ambiente: "oscuro"

Resultado esperado:
accion: activar modo supervivencia
motivo: el ambiente oscuro potencia el impacto del susto.

### Caso borde

Entrada:
estados: ["suspenso", "final"]
ambiente: "oscuro"

Resultado esperado:
accion: continuar visualizacion
motivo: el ambiente es seguro para ver la pelicula.

## Explicacion final

Mi solucion utiliza un ciclo 'for' para buscar la palabra 'susto' dentro del arreglo. He guardado el resultado en una variable booleana 'haySusto'. Luego, utilizo un condicional 'if' para comprobar si se cumplen las dos condiciones necesarias (ambiente oscuro y presencia de susto). Si ambas son ciertas, cambio los valores de las variables de salida para reflejar la alerta de supervivencia.