# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) que contiene información de autos hiperdeportivos.
  - Cada auto contiene:
    - `modelo`: nombre del vehículo.
    - `velocidadKmh`: velocidad máxima en kilómetros por hora.
    - `potenciaHp`: potencia del motor en caballos de fuerza.

- **Proceso:**
  - Validar que existan autos registrados.
  - Verificar que la velocidad y potencia sean valores positivos.
  - Convertir unidades de rendimiento:
    - Kilómetros por hora a millas por hora:

      \[
      MPH = KMH \times 0.621371
      \]

    - Caballos de fuerza a kilovatios:

      \[
      KW = HP \times 0.7457
      \]

  - Clasificar cada automóvil según sus características de velocidad y potencia.
  - Guardar los resultados convertidos en un nuevo arreglo.

- **Salida:**
  - Un objeto con:
    - Cantidad de autos evaluados.
    - Información convertida de cada auto.
    - Categoría de rendimiento asignada.

## Reglas identificadas

1. Debe existir al menos un automóvil registrado.
2. La velocidad y potencia deben ser mayores que cero.
3. La conversión de velocidad utiliza el factor:

\[
1\ KM/H = 0.621371\ MPH
\]

4. La conversión de potencia utiliza el factor:

\[
1\ HP = 0.7457\ KW
\]

5. La clasificación del automóvil depende de sus características:
   - Velocidad **≥ 350 km/h** y potencia **≥ 800 HP** → **"Hiperdeportivo extremo"**.
   - Velocidad **≥ 300 km/h** y potencia **≥ 600 HP** → **"Superdeportivo"**.
   - Cualquier otro valor válido → **"Deportivo"**.

6. Si algún dato ingresado es inválido, el programa devuelve un mensaje de error.

## Pruebas

### Caso normal

Entrada:

```javascript
const autos = [
  {
    modelo: "Bugatti Chiron",
    velocidadKmh: 420,
    potenciaHp: 1500
  },
  {
    modelo: "Ferrari SF90",
    velocidadKmh: 340,
    potenciaHp: 986
  }
];
```

Resultado esperado:

```javascript
{
  autosEvaluados: 2,
  resultados: [
    {
      modelo: "Bugatti Chiron",
      velocidadOriginalKmh: 420,
      velocidadMph: 260.98,
      potenciaOriginalHp: 1500,
      potenciaKw: 1118.55,
      categoria: "Hiperdeportivo extremo"
    },
    {
      modelo: "Ferrari SF90",
      velocidadOriginalKmh: 340,
      velocidadMph: 211.27,
      potenciaOriginalHp: 986,
      potenciaKw: 735.26,
      categoria: "Superdeportivo"
    }
  ]
}
```

### Caso borde

Entrada:

```javascript
const autos = [
  {
    modelo: "Auto inválido",
    velocidadKmh: 0,
    potenciaHp: -200
  }
];
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "La velocidad y potencia deben ser valores positivos."
}
```

## Explicacion final

La solución procesa datos de autos hiperdeportivos aplicando conversiones de unidades y reglas de clasificación. Primero valida que los valores de entrada sean correctos para evitar cálculos incorrectos.

Después convierte la velocidad y potencia a nuevas unidades utilizando factores matemáticos establecidos. Posteriormente analiza las características del vehículo mediante condiciones para determinar su categoría de rendimiento.

El algoritmo utiliza arreglos para manejar múltiples vehículos, ciclos para recorrer la información, funciones para organizar la lógica y cálculos numéricos para transformar los datos originales. De esta forma se obtiene una evaluación completa y verificable del rendimiento de cada automóvil.