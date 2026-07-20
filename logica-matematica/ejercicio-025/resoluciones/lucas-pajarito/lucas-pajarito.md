# Plantilla de solución

## Análisis

### Entrada

- Una lista de vehículos.
- Placa del vehículo.
- Espesor del disco de freno (mm).

### Proceso

1. Recorrer la lista de vehículos.
2. Identificar el espesor mínimo registrado.
3. Comparar cada espesor con el límite mínimo permitido.
4. Calcular la diferencia entre el espesor y el límite.
5. Mostrar los resultados.

### Salida

- Placa del vehículo.
- Espesor del disco.
- Estado del disco.
- Espesor mínimo registrado.

---

## Reglas identificadas

1. El espesor del disco debe ser un valor positivo.
2. El límite mínimo permitido es de **6.0 mm**.
3. Si el espesor es mayor o igual a **6.0 mm**, el disco cumple con el límite.
4. Si el espesor es menor a **6.0 mm**, el disco debe reemplazarse.

---

## Pruebas

### Caso normal

**Entrada**

```javascript
{
    placa: "P321JKL",
    espesorDisco: 6.5
}
```

**Cálculo**

```text
Diferencia = 6.5 - 6.0

Diferencia = 0.5 mm
```

**Resultado esperado**

```text
Placa: P321JKL
Espesor del disco: 6.5 mm
Estado: Dentro del límite permitido.
Diferencia respecto al límite: 0.50 mm
```

---

### Caso borde

**Entrada**

```javascript
{
    placa: "P111XYZ",
    espesorDisco: 6.0
}
```

**Cálculo**

```text
Diferencia = 6.0 - 6.0

Diferencia = 0 mm
```

**Resultado esperado**

```text
Placa: P111XYZ
Espesor del disco: 6.0 mm
Estado: Dentro del límite permitido.
Diferencia respecto al límite: 0.00 mm
```

> Este es un caso borde porque el espesor del disco es **exactamente igual al límite mínimo permitido**. El programa debe considerarlo válido y no indicar un reemplazo.

---

## Explicación final

La solución funciona porque analiza el espesor de los discos de freno de cada vehículo y lo compara con un **límite mínimo de seguridad**. Además, identifica el espesor más pequeño registrado y calcula la diferencia entre cada medición y el límite establecido. Esto permite determinar si un disco aún puede utilizarse o si debe ser reemplazado para garantizar la seguridad del vehículo.

---

## Sugerencia

Cuando resuelvas ejercicios de **mínimos y límites**, define primero el valor mínimo permitido. Luego compara cada dato con ese límite y calcula la diferencia para conocer cuánto margen de seguridad existe o cuánto falta para cumplir con el valor establecido.