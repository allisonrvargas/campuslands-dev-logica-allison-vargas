## Analisis

- Entrada: Dos objetos con coordenadas cartesianas `{x, y}`: la posición actual del paracaidista y el punto objetivo.
- Proceso: Cálculo de la distancia vectorial mediante el Teorema de Pitágoras.
- Salida: Un objeto con la distancia calculada y un booleano que indica si el paracaidista está fuera del margen de seguridad.

## Reglas identificadas

1. Geometría: La distancia entre dos puntos en un plano 2D sigue la fórmula $d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.
2. Margen de error: Si la distancia al objetivo es mayor a 50 unidades, se activa una alerta de "requiere corrección".
3. Precisión: El resultado se redondea a dos decimales para facilitar la lectura de los instrumentos de vuelo.

## Pruebas

### Caso normal

Entrada:
posicionActual: {x: 0, y: 0}, zonaAterrizaje: {x: 30, y: 40}

Resultado esperado:
{ distancia: 50, requiereCorreccion: false } (Justo en el límite)

### Caso borde

Entrada:
posicionActual: {x: 100, y: 100}, zonaAterrizaje: {x: 100, y: 100}

Resultado esperado:
{ distancia: 0, requiereCorreccion: false } (Aterrizaje perfecto)

## Explicacion final

Para comprender la trayectoria de un objeto en el espacio 2D, utilizamos el principio de la distancia euclidiana. Este cálculo es la base de los sistemas de navegación de los paracaidistas para asegurar que no se alejen de la zona de aterrizaje segura.