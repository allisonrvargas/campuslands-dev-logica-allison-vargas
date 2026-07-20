# Plantilla de solucion

## Analisis

- Entrada: Una lista con las marcas de los autos disponibles: ["Bugatti ", "Koenigsegg", "Ferrari","McLaren","Mercedes"].
El carro que el cliente está buscando; busqueda: "Ferrari".

- Proceso: El programa lee la lista de autos guardados. Va a ir comparando lo que busca el cliente con lo que hay en el inventario. Si encuentra la palabra exacta, detiene la búsqueda y avisa que el carro sí está en el garaje. Si revisa todo y no ve nada, avisa que no se encuentra.

- Salida: Un mensaje que diga si el auto fue encontrado o no encontrado y en qué estado quedó el cliente.

## Reglas identificadas

1. Si el auto que busca el cliente está escrito en la lista, el programa debe marcarlo como disponible de inmediato.

2. Si la lista está vacía, no se puede poner a buscar nada y debe mandar un aviso de error de inventario.

3. Si el auto no está en la lista, el código debe decir que no está, en vez de quedarse callado o dar un error.

## Pruebas

### Caso normal

Entrada: 
listaAutos:["Bugatti ", "Koenigsegg", "Ferrari","McLaren","Mercedes"]
busqueda: "Ferrari"

Resultado esperado:
resultado: encontrado
mensaje: El auto Ferrari si esta en el inventario, esta listo para mostrarse.

### Caso borde

Entrada:
listaAutos:["Bugatti ", "Koenigsegg", "Ferrari","McLaren","Mercedes"]
busqueda: "Tsuru tuneado"

Resultado esperado:
resultado: no encontrado
mensaje: Lo sentimos, el auto Tsuru tuneado no esta disponible en nuestra coleccion.

## Explicacion final

En esta solución el programa se encargara de revisar el grupo de datos antes de dar una respuesta. Se hara uso de un if junto con .includes() para que revise si el auto que quiere el cliente está anotado en la lista. Si lo encuentra, el programa avisa que ya está listo para la venta, y si busca algo que no está, el código mandara el mensaje de que no se encuentra el auto.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.
