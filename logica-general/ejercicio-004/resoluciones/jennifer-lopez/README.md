# Plantilla de solucion

## Analisis

- Entrada: El modelo o marca de la moto (por ejemplo, "Kawasaki ninja 400").
El cilindraje de la moto (por ejemplo, 399).
La condición del filtro (por ejemplo, buscar solo motos de "alto cilindraje" que tengan más de 250cc).

- Proceso: El programa tiene que ponerse a leer los datos de la moto para ver si pasa el filtro. Mira el número de cilindraje y revisa la regla: si los centímetros cúbicos (cc) son mayores a 250, significa que la moto cumple con la condición de alto cilindraje y la deja pasar. Si tiene menos de eso, la ignora porque no es lo que estamos buscando.


- Salida: Un mensaje que nos diga si la moto pasó el filtro si lo paso sera incluida o si quedó descartada era no incluida, junto con el motivo de porque no fue incluida.

## Reglas identificadas

1. Para que una moto pase el filtro de "alto cilindraje", su número de cc debe ser estrictamente mayor a 250.

2. Si la moto tiene un cilindraje de 250 o menos, se considera de bajo cilindraje y el filtro la tiene que rechazar.

3. Si por error nos pasan un cilindraje de cero o un número negativo, el programa debe marcarlo como un dato que está mal.

## Pruebas

### Caso normal

Entrada:
moto: "Kawasaki Ninja"
cilindraje: 400
filtro: "alto cilindraje"

Resultado esperado:
resultado: incluida
motivo: La moto Kawasaki Ninja tiene 400cc, asi que pasa el filtro de alto cilindraje.

### Caso borde

Entrada:
moto: "Scooter Suzuki"
cilindraje: 250
filtro: "alto cilindraje"

Resultado esperado:
Tiene exactamente 250cc, por lo tanto no califica como alto cilindraje.

## Explicacion final

En esta solución el programa revisa el número exacto del cilindraje antes de tomar una decisión. Usamos un if para poner la regla clara de que sea mayor a 250. Si cumple, la moto se incluye en la lista de resultados; y si nos dan una moto de menor cilindraje o que tiene exactamente el límite, el código se da cuenta de que no pasa la regla y la deja fuera de manera ordenada.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.
