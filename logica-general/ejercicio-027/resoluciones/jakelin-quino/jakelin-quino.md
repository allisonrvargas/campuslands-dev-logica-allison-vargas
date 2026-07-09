## Analisis

- Entrada: Un arreglo de canciones, donde cada una tiene un título y una duración.
- Proceso: Recorrer el arreglo para verificar si alguna canción tiene una duración de 0.
- Salida: Una acción a realizar ("reproducir" o "reparar metadata") y el motivo correspondiente.

## Reglas identificadas

1. Si una canción tiene duración de 0, se considera una inconsistencia.
2. Si se encuentra una inconsistencia, la acción debe ser "reparar metadata".
3. Si todas las canciones tienen una duración mayor a 0, la acción es "reproducir".

## Pruebas

### Caso normal

Entrada:
playlist: [{titulo: "Cancion A", duracion: 200}, {titulo: "Cancion C", duracion: 180}]

Resultado esperado:
accion: reproducir
motivo: La playlist no tiene problemas.

### Caso borde

Entrada:
playlist: [{titulo: "Cancion B", duracion: 0}]

Resultado esperado:
accion: reparar metadata
motivo: Se detectó una canción con duración cero: Cancion B

## Explicacion final
Utilizo un ciclo 'for' para revisar cada objeto dentro del arreglo 'playlist'. Si encuentro una duración igual a 0, cambio los valores de las variables 'accion' y 'motivo' para indicar que hay un error. Al finalizar el ciclo, el código simplemente muestra el resultado final.