# Plantilla de solucion

## Análisis

### Entrada

Un arreglo de motos almacenadas en un inventario.

Cada moto contiene:

- `marca`: fabricante de la moto.
- `modelo`: nombre del modelo.
- `cilindrada`: capacidad del motor en cc.
- `precio`: valor unitario.
- `stock`: cantidad disponible.


---

## Proceso

1. Validar que los datos sean correctos.
2. Clasificar motos por rango de cilindrada.
3. Determinar disponibilidad del inventario.
4. Calcular valor total almacenado.
5. Identificar la moto con mayor valor de inventario.


---

## Salida

El programa entrega:

- cantidad total de motos.
- motos disponibles.
- valor total del inventario.
- moto con mayor valor acumulado.
- detalle de cada moto.


---

# Fórmulas utilizadas


## Valor del inventario


\[
ValorInventario =
Precio \times Stock
\]


Ejemplo:


\[
85000 \times 3 = 255000
\]


---

# Reglas de clasificación


## Rango de cilindrada


| Cilindrada | Categoría |
|-|-|
| 1000 cc o más | Alta cilindrada |
| 500 cc a 999 cc | Media cilindrada |
| Menor de 500 cc | Baja cilindrada |


---

# Reglas de stock


| Cantidad | Estado |
|-|-|
| 0 | Agotada |
| 1 a 5 | Stock limitado |
| Mayor a 5 | Disponible |


---

# Validaciones


Una moto es válida si:


\[
Cilindrada > 0
\]


\[
Precio > 0
\]


\[
Stock \geq 0
\]


Si no cumple:

```text
Datos inválidos
```


---

# Caso normal


Entrada:

```javascript
{
 marca:"Yamaha",
 modelo:"R1",
 cilindrada:1000,
 precio:85000,
 stock:3
}
```


Proceso:


\[
85000 \times 3 = 255000
\]


Resultado:


```text
Categoría:
Alta cilindrada


Estado:
Stock limitado
```


---

# Caso borde


Entrada:


```javascript
{
 marca:"MotoX",
 modelo:"Sin stock",
 cilindrada:600,
 precio:30000,
 stock:0
}
```


Resultado:


```text
Estado:
Agotada
```


---

# Explicación final

La solución representa un sistema básico de inventario para una tienda de motos. El programa analiza características del producto, aplica reglas de clasificación y calcula valores económicos del inventario.

La implementación utiliza funciones, arreglos, ciclos, acumuladores y operaciones matemáticas para transformar datos de motos en información útil para la administración del inventario.