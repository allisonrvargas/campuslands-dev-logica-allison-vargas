# Plantilla de solución

## Análisis

- **Entrada:**
  - Una lista de muestras químicas con:
    - Nombre del compuesto.
    - Valor de pH.

- **Proceso:**
  1. Recorrer la lista de muestras.
  2. Leer el valor de pH de cada compuesto.
  3. Verificar si el valor se encuentra dentro del rango permitido.
  4. Mostrar el resultado de la validación.

- **Salida:**
  - El nombre del compuesto.
  - El valor de pH.
  - El resultado de la validación.

---

## Reglas identificadas

1. El valor de pH debe ser un número.
2. El pH válido se encuentra entre **0 y 14**.
3. Si el valor está dentro del rango, la validación es correcta.
4. Si el valor está fuera del rango, la validación es incorrecta.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "compuesto": "Agua Destilada",
    "ph": 7.0
}
```

**Cálculo**

```text
0 ≤ 7.0 ≤ 14

Resultado: Válido
```

**Resultado esperado**

```text
Compuesto: Agua Destilada
Valor de pH: 7.0
Resultado: Valor de pH válido.
```

---

### Caso borde

**Entrada**

```python
{
    "compuesto": "Muestra Experimental",
    "ph": 14
}
```

**Cálculo**

```text
0 ≤ 14 ≤ 14

Resultado: Válido
```

**Resultado esperado**

```text
Compuesto: Muestra Experimental
Valor de pH: 14
Resultado: Valor de pH válido.
```

> Este es un caso borde porque el valor de pH es exactamente **14**, que corresponde al límite superior del rango permitido. El programa debe reconocer este valor como válido.

---

## Explicación final

La solución funciona porque realiza una **validación numérica** sobre el valor de pH de cada muestra química. El programa verifica que el valor se encuentre dentro del intervalo permitido de **0 a 14**, que es la escala estándar del pH. Si el valor pertenece a ese rango, la muestra es válida; de lo contrario, se considera inválida.

---

## Sugerencia

Cuando desarrolles **validaciones numéricas**, identifica primero el rango de valores aceptados. Luego compara cada dato con los límites mínimo y máximo para determinar si cumple con las condiciones establecidas antes de continuar con cualquier cálculo o análisis.