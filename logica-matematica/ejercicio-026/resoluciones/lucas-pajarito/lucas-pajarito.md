# Plantilla de solución

## Análisis

### Entrada

- Una lista de autos hiperdeportivos.
- Modelo del automóvil.
- Velocidad máxima en kilómetros por hora (km/h).

### Proceso

1. Recorrer la lista de autos.
2. Convertir la velocidad de km/h a metros por segundo (m/s).
3. Convertir la velocidad de km/h a millas por hora (mph).
4. Mostrar los resultados.

### Salida

- Modelo del automóvil.
- Velocidad en km/h.
- Velocidad en m/s.
- Velocidad en mph.

---

## Reglas identificadas

1. La velocidad debe ser un valor positivo.
2. Para convertir de **km/h a m/s** se divide entre **3.6**.
3. Para convertir de **km/h a mph** se multiplica por **0.621371**.
4. Los resultados se muestran con dos decimales.

---

## Pruebas

### Caso normal

**Entrada**

```javascript
{
    modelo: "Bugatti Chiron",
    velocidadKmh: 420
}
```

**Cálculo**

```text
m/s = 420 ÷ 3.6

m/s = 116.67

mph = 420 × 0.621371

mph = 260.98
```

**Resultado esperado**

```text
Modelo: Bugatti Chiron
Velocidad: 420 km/h
Velocidad: 116.67 m/s
Velocidad: 260.98 mph
```

---

### Caso borde

**Entrada**

```javascript
{
    modelo: "Auto de Prueba",
    velocidadKmh: 0
}
```

**Cálculo**

```text
m/s = 0 ÷ 3.6

m/s = 0

mph = 0 × 0.621371

mph = 0
```

**Resultado esperado**

```text
Modelo: Auto de Prueba
Velocidad: 0 km/h
Velocidad: 0.00 m/s
Velocidad: 0.00 mph
```

> Este es un caso borde porque la velocidad del vehículo es **0 km/h**. El programa debe realizar correctamente las conversiones y obtener **0** en todas las unidades.

---

## Explicación final

La solución funciona porque aplica dos fórmulas de **conversión de unidades**. Primero convierte la velocidad de kilómetros por hora a metros por segundo dividiendo entre **3.6**. Después convierte la misma velocidad a millas por hora multiplicando por **0.621371**. Estas conversiones permiten expresar una misma magnitud en diferentes sistemas de unidades, facilitando la comparación internacional de las velocidades de los autos hiperdeportivos.

---

## Sugerencia

Cuando resuelvas ejercicios de **conversión de unidades**, identifica primero la unidad de origen y la unidad de destino. Luego aplica el factor de conversión adecuado y presenta los resultados con una precisión uniforme para facilitar su interpretación.