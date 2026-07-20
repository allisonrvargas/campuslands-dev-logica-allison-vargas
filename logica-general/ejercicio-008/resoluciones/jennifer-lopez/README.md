# Plantilla de solucion

## Analisis

- Entrada: El titulo de una pelicula Crímenes de tiempo y el paso actual en el que va su descarga o reproduccion procesando audio.

- Proceso: El programa simula el flujo de pasos que sigue una plataforma para proyectar la pelicula. Debe revisar en que paso va la lista y decidir si pasa al siguiente nivel o si se queda esperando.

- Salida: La accion que debe tomar el sistema de streaming.


## Reglas identificadas

1. El flujo para ver la pelicula es: 1. Descargar -> 2. Procesar audio -> 3. Listo para reproducir.

2. Si el paso actual es "procesando audio", el paso que sigue es cambiar el estado a "Listo".

## Pruebas

### Caso normal

Entrada: pelicula: Crímenes de tiempo, pasoActual: "procesando audio"

Resultado esperado: accion: "pasar a listo", motivo: "El audio ya fue procesada, la pelicula ya puede empezar."

### Caso borde

Entrada: pelicula: "Tron", pasoActual: "descargando"

Resultado esperado: accion: "esperar", motivo: "Aun se estan bajando los datos de la pelicula."

## Explicacion final

El programa va leyendo la pelicula paso a paso. Si el paso actual dice que esta descargando, el programa no dejara darle play; pero si ya paso el filtro de audio, el codigo avanza el flujo de manera automatica.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.
