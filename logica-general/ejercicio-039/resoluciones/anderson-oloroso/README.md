# Plantilla de solucion

## Analisis

- Entrada:
- Proceso:
- Salida:

## Reglas identificadas

1.
2.
3.

## Pruebas

### Caso normal

Entrada:

Resultado esperado:

### Caso borde

Entrada:

Resultado esperado:

## Explicacion final

Escribe aqui por que tu solucion funciona.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.
# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) con la información de los reactivos químicos.
  - Cada reactivo contiene:
    - `nombre`: nombre del compuesto químico.
    - `cantidad`: unidades disponibles en inventario.
    - `minimo`: cantidad mínima permitida.
    - `vencido`: indica si el reactivo se encuentra vencido.

- **Proceso:**
  - Validar la información de cada reactivo.
  - Revisar si el producto está vencido.
  - Comparar la cantidad disponible con el mínimo permitido.
  - Clasificar el reactivo según su estado.
  - Contabilizar los reactivos disponibles, en reposición y vencidos.

- **Salida:**
  - Un objeto con:
    - Número de reactivos evaluados.
    - Cantidad de reactivos disponibles.
    - Cantidad de reactivos en reposición.
    - Cantidad de reactivos vencidos.
    - Estado individual de cada reactivo.

## Reglas identificadas

1. Todo reactivo debe tener un nombre válido.

2. La cantidad disponible y el stock mínimo deben cumplir:

\[
Cantidad \ge 0
\]

\[
Minimo \ge 0
\]

3. Si un reactivo está vencido:

```text
Estado = "Vencido"
```

independientemente de la cantidad almacenada.

4. Si el reactivo no está vencido y:

\[
Cantidad \le Minimo
\]

su estado será:

```text
Reposición
```

5. Si:

\[
Cantidad > Minimo
\]

el reactivo se considera:

```text
Disponible
```

6. Los registros con datos inválidos no participan en las estadísticas del inventario.

## Pruebas

### Caso normal

Entrada:

```javascript
const reactivos = [
  {
    nombre: "Ácido Clorhídrico",
    cantidad: 25,
    minimo: 10,
    vencido: false
  },
  {
    nombre: "Sulfato de Cobre",
    cantidad: 5,
    minimo: 10,
    vencido: false
  },
  {
    nombre: "Etanol",
    cantidad: 18,
    minimo: 5,
    vencido: true
  }
];
```

Resultado esperado:

```javascript
{
  reactivosEvaluados: 3,
  disponibles: 1,
  reposicion: 1,
  vencidos: 1,
  resultados: [
    {
      nombre: "Ácido Clorhídrico",
      cantidad: 25,
      estado: "Disponible"
    },
    {
      nombre: "Sulfato de Cobre",
      cantidad: 5,
      estado: "Reposición"
    },
    {
      nombre: "Etanol",
      cantidad: 18,
      estado: "Vencido"
    }
  ]
}
```

### Caso borde

Entrada:

```javascript
const reactivos = [
  {
    nombre: "",
    cantidad: -5,
    minimo: -2,
    vencido: false
  }
];
```

Resultado esperado:

```javascript
{
  reactivosEvaluados: 1,
  disponibles: 0,
  reposicion: 0,
  vencidos: 0,
  resultados: [
    {
      nombre: "",
      estado: "Datos inválidos"
    }
  ]
}
```

## Explicacion final

La solución implementa un sistema lógico de inventario para reactivos utilizados en un laboratorio químico. Cada elemento es validado antes de evaluar su estado, verificando si el producto se encuentra vencido o si su cantidad ha alcanzado el nivel mínimo permitido.

Mediante reglas de negocio jerárquicas, el algoritmo clasifica cada reactivo como **Disponible**, **Reposición** o **Vencido**, además de generar estadísticas generales del inventario. También controla registros con información incorrecta para evitar resultados inconsistentes.

La implementación utiliza funciones, arreglos, ciclos, acumuladores y estructuras condicionales, permitiendo desarrollar una solución organizada, reutilizable y fácil de comprobar mediante distintos casos de prueba.