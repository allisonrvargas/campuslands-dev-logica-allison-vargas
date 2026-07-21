# Plantilla de solucion

## Analisis

- Entrada: El nombre de una cancion por ejemplo, "Plan A" y la duracion en segundos, 45 segundos.

- Proceso: El programa lee los datos de la playlist para buscar cosas raras. Si ve que una cancion tiene una duracion en cero o en numeros negativos,el programa se da cuenta de que el archivo esta dañado o mal registrado.

- Salida: Un mensaje que nos diga si la pista esta correcta o si tiene una inconsistencia.

## Reglas identificadas

1. Una cancion en una playlist tiene que durar mas de 0 segundos obligatoriamente.
2. Si el tiempo es menor o igual a cero, el programa debe marcarlo como un error de dato de inmediato.

## Pruebas

### Caso normal

Entrada: cancion: "Plan A", duracion: 180

Resultado esperado: estado: "valido", motivo: "La pista se puede reproducir sin problemas."

### Caso borde

Entrada: cancion: "Pista Fantasma", duracion: 0

Resultado esperado: estado: "inconsistencia", motivo: "Error: Una cancion no puede durar cero segundos o menos."

## Explicacion final

En esta solucion el programa lee la duracion de la musica antes de reproducirla. Si detecta que la duracion es una inconsistencia, el codigo frena la playlist y avisa del fallo en vez de intentar reproducir algo roto.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.
