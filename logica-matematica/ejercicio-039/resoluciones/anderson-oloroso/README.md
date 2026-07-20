# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) con fórmulas químicas para validar.
  - Cada fórmula contiene:
    - `nombre`: identificación de la fórmula.
    - `elementos`: lista de elementos químicos.
    - `masaMolecular`: masa molecular indicada.
    - `atomosTotales`: cantidad total de átomos esperados.

  - Cada elemento contiene:
    - `simbolo`: símbolo químico.
    - `cantidad`: número de átomos del elemento.
    - `masaAtomica`: peso atómico del elemento.

- **Proceso:**
  - Validar que los datos tengan estructura correcta.
  - Calcular la masa molecular real de la fórmula.
  - Contar la cantidad total de átomos.
  - Comparar los valores calculados con los valores ingresados.
  - Clasificar la fórmula como válida o inválida.

- **Salida:**
  - Cantidad total de fórmulas evaluadas.
  - Número de fórmulas válidas.
  - Número de fórmulas inválidas.
  - Detalle de validación de cada fórmula.

## Reglas identificadas

### 1. Validación básica

Una fórmula debe cumplir:

\[
Nombre \neq vacío
\]

\[
Elementos \neq vacío
\]

\[
MasaMolecular > 0
\]

\[
AtomosTotales > 0
\]


### 2. Cálculo de masa molecular

La masa calculada se obtiene:

\[
Masa =
\sum(MasaAtomica \times Cantidad)
\]


Ejemplo:

Para H₂O:

\[
(1 \times 2) + (16 \times 1)=18
\]


### 3. Validación de cantidad de átomos

La cantidad calculada debe coincidir:

\[
AtomosCalculados = AtomosEsperados
\]


### 4. Validación de masa

La diferencia entre la masa calculada y registrada debe ser mínima:

\[
|MasaCalculada - MasaRegistrada| \leq 0.01
\]


### 5. Resultado

Si todas las reglas se cumplen:

```text
Fórmula válida
```

En caso contrario:

```text
Validación fallida
```


## Pruebas

### Caso normal

Entrada:

```javascript
[
  {
    nombre: "Agua",
    elementos: [
      {
        simbolo: "H",
        cantidad: 2,
        masaAtomica: 1
      },
      {
        simbolo: "O",
        cantidad: 1,
        masaAtomica: 16
      }
    ],
    masaMolecular: 18,
    atomosTotales: 3
  }
]
```

Resultado esperado:

```javascript
{
  totalFormulas: 1,
  formulasValidas: 1,
  formulasInvalidas: 0,
  resultados: [
    {
      nombre: "Agua",
      estado: "Fórmula válida",
      masaMolecular: "18.00",
      atomos: 3
    }
  ]
}
```


### Caso borde

Entrada:

```javascript
[
  {
    nombre: "Formula incorrecta",
    elementos: [
      {
        simbolo: "X",
        cantidad: -2,
        masaAtomica: 0
      }
    ],
    masaMolecular: 20,
    atomosTotales: 2
  }
]
```

Resultado esperado:

```javascript
{
  totalFormulas: 1,
  formulasValidas: 0,
  formulasInvalidas: 1
}
```


## Explicacion final

La solución implementa un validador de fórmulas químicas mediante reglas numéricas. El sistema analiza la composición de cada fórmula, calcula valores derivados y compara los resultados contra los datos proporcionados.

El programa utiliza validaciones, ciclos, acumuladores y operaciones matemáticas para detectar inconsistencias en masas moleculares y cantidades de átomos.

La estructura permite revisar múltiples fórmulas y generar un reporte claro sobre cuáles cumplen las condiciones establecidas.