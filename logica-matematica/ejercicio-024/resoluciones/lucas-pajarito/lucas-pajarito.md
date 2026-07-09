# Plantilla de solución

## Análisis

### Entrada

- Una lista de motos.
- Modelo de la moto.
- Velocidad máxima de cada moto.

### Proceso

1. Recorrer la lista de motos.
2. Identificar la velocidad máxima registrada.
3. Identificar la velocidad mínima registrada.
4. Calcular el rango de velocidades.
5. Mostrar los resultados.

### Salida

- Modelo de cada moto.
- Velocidad máxima registrada.
- Velocidad mínima registrada.
- Rango de velocidades.

---

## Reglas identificadas

1. Todas las velocidades deben ser valores numéricos positivos.
2. El valor máximo corresponde a la mayor velocidad registrada.
3. El valor mínimo corresponde a la menor velocidad registrada.
4. El rango se calcula mediante:

**Rango = Velocidad máxima − Velocidad mínima**

---

## Pruebas

### Caso normal

**Entrada**

```javascript
{
    modelo: "Kawasaki Z400",
    velocidadMaxima: 190
}
```

**Cálculo**

```text
Velocidad máxima = 190 km/h

Velocidad mínima = 140 km/h

Rango = 190 - 140

Rango = 50 km/h
```

**Resultado esperado**

```text
Velocidad máxima registrada: 190 km/h
Velocidad mínima registrada: 140 km/h
Rango de velocidades: 50 km/h
```

---

### Caso borde

**Entrada**

```javascript
[
    {
        modelo: "Moto Única",
        velocidadMaxima: 160
    }
]
```

**Cálculo**

```text
Velocidad máxima = 160

Velocidad mínima = 160

Rango = 160 - 160

Rango = 0
```

**Resultado esperado**

```text
Velocidad máxima registrada: 160 km/h
Velocidad mínima registrada: 160 km/h
Rango de velocidades: 0 km/h
```

> Este es un caso borde porque el inventario contiene una sola moto. En esta situación, la velocidad máxima y la velocidad mínima son iguales, por lo que el rango es **0 km/h**.

---

## Explicación final

La solución funciona porque analiza las velocidades máximas de todas las motos del inventario para encontrar el valor más alto y el más bajo. Después calcula el **rango**, que representa la diferencia entre ambas velocidades. Este análisis permite conocer la variación de rendimiento entre los modelos disponibles.

---

## Sugerencia

Cuando resuelvas ejercicios de **rangos y máximos**, identifica primero el valor mayor y el valor menor del conjunto de datos. Luego calcula la diferencia entre ambos para obtener el rango, una medida útil para analizar la dispersión de los datos.