# Plantilla de solucion

## Analisis

- Entrada: Una lista con los tamaños en pixeles de los lienzos creados por un ilustrador: [1200, 4500, 800, 3000]

- Proceso:mLa regla de negocio de la plataforma de arte dice que todo lienzo mayor a 2000px consume almacenamiento Premium. El ciclo lee los tamaños y acumula cuántos lienzos activos rompen la regla de la cuenta gratuita.

- Salida: Cantidad de archivos que aplican para cobro Premium según las reglas del negocio.

## Reglas identificadas

1. Un lienzo menor o igual a 2000px se considera estándar y entra en el plan gratuito.

2. Si el tamaño del lienzo supera los 2000px, el negocio exige que se acumule bajo el conteo de "Lienzo Premium".

3. Si la lista contiene resoluciones de 0 pixeles, se debe anular el conteo por archivo corrupto.

## Pruebas

### Caso normal
Entrada: lienzos: [1200, 4500, 800, 3000]
Resultado esperado: lienzosPremium: 2, mensaje: "Regla de negocio aplicada: Tienes 2 lienzos en categoria Premium."

### Caso borde
Entrada: lienzos: [1500, 0]

Resultado esperado: lienzosPremium: 0, mensaje: "Error de negocio: Hay un archivo corrupto con resolucion de 0 pixeles."

## Explicacion final

Este código evalua las dimensiones del lienzo en pixeles con un bucle for, va sumando al acumulador Premium solo las que rebasan el límite establecido. En el caso de un lienzo de 0 pixeles, el sistema protege el flujo deteniendo la ejecución si se detecta un archivo de 0 pixeles.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.
