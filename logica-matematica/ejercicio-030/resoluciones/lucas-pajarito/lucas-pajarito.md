# Plantilla de solución

## Análisis

### Entrada

- Una lista de viajes.
- Destino turístico.
- Distancia en kilómetros.
- Tiempo estimado en horas.

### Proceso

1. Recorrer la lista de viajes.
2. Redondear la distancia al entero más cercano.
3. Redondear el tiempo al entero más cercano.
4. Mostrar los valores exactos y los valores redondeados.

### Salida

- Nombre del destino.
- Distancia exacta y redondeada.
- Tiempo exacto y redondeado.

---

## Reglas identificadas

1. La distancia y el tiempo deben ser valores numéricos positivos.
2. Se utiliza `Math.round()` para redondear al entero más cercano.
3. Se utiliza `toFixed(3)` para mostrar tres decimales en los valores exactos.
4. Los valores redondeados facilitan la interpretación de la información.

---

## Pruebas

### Caso normal

**Entrada**

```javascript
{
    destino: "Antigua Guatemala",
    distancia: 45.678,
    tiempo: 1.256
}
```

**Cálculo**

```text
Math.round(45.678) = 46

Math.round(1.256) = 1
```

**Resultado esperado**

```text
Destino: Antigua Guatemala
Distancia exacta: 45.678 km
Tiempo exacto: 1.256 horas
Distancia redondeada: 46 km
Tiempo redondeado: 1 hora
```

---

### Caso borde

**Entrada**

```javascript
{
    destino: "Destino Cercano",
    distancia: 50.500,
    tiempo: 2.500
}
```

**Cálculo**

```text
Math.round(50.500) = 51

Math.round(2.500) = 3
```

**Resultado esperado**

```text
Destino: Destino Cercano
Distancia exacta: 50.500 km
Tiempo exacto: 2.500 horas
Distancia redondeada: 51 km
Tiempo redondeado: 3 horas
```

> Este es un caso borde porque los valores terminan exactamente en **0.500**. La función `Math.round()` redondea estos casos hacia el entero superior, por lo que es importante verificar que el programa aplique correctamente esta regla.

---

## Explicación final

La solución funciona porque utiliza herramientas de **redondeo y precisión numérica** de JavaScript. Con `toFixed(3)` se muestran los valores exactos con tres cifras decimales, mientras que `Math.round()` aproxima cada valor al entero más cercano. Estas operaciones son útiles para presentar información más clara en aplicaciones relacionadas con viajes, distancias y tiempos.

---

## Sugerencia

Cuando trabajes con **redondeo y precisión**, conserva los valores originales para realizar cálculos exactos y aplica el redondeo únicamente al momento de presentar los resultados. De esta manera se evita perder precisión durante el procesamiento de los datos.