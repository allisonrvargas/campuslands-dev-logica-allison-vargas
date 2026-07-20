# Plantilla de solucion

## Analisis

- Entrada: El nombre de un equipo de fútbol sala (por ejemplo, "Los Cracks FC").
Los puntos que tiene en el ranking (por ejemplo, 45).

- Proceso: El programa tiene que ponerse a leer si los datos que nos dieron son reales o válidos. Primero revisa si nos pasaron un nombre de equipo de verdad o si lo dejaron vacío. Luego, mira los puntos: no pueden ser números negativos y tampoco pueden pasarse de un límite exagerado. Si todo está correcto, el equipo puede entrar al ranking.

- Salida: Un mensaje que nos avise si el equipo pasó la validación con éxito y se registró en el ranking, o si hubo algún error con sus datos.

## Reglas identificadas

1. El nombre del equipo no puede estar vacío ni ser solo espacios en blanco. Si está vacío, se rechaza.

2. Los puntos en el ranking tienen que ser un número mayor o igual a cero. Los puntos negativos no son validos.

3. Si los puntos o el nombre están mal, el programa debe avisar exactamente cuál fue el error en vez de dejar pasar el dato dañado.

## Pruebas

### Caso normal

Entrada:
equipo: "Futsal Scorpion"
puntos: 12

Resultado esperado:
estado: registrado
mensaje: El equipo Futsal Scorpion entro al ranking correctamente con 12 puntos.

### Caso borde

Entrada:
(caso de que coloquen un equipo sin nombre y putos negativos)
equipo: ""
puntos: -5

Resultado esperado:
estado: error
mensaje: No se puede registrar. El nombre esta vacio o los puntos son negativos.

## Explicacion final

En esta solución el programa no registra a cualquier equipo, sino que primero verifica si los datos tienen sentido. Usa un if para ver si el nombre no esta vacío y si los puntos son de cero para arriba. Si encuentra que el usuario se equivocó y mandó un campo en blanco o un puntaje negativo, el código salta de una vez a la sección de error para proteger el ranking y avisa qué está mal en lugar de trabarse.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.
