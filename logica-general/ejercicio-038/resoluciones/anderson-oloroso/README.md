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
  - Un arreglo (`Array<Object>`) con la información de los operarios de soldadura.
  - Cada operario contiene:
    - `nombre`: nombre del trabajador.
    - `experiencia`: años de experiencia.
    - `disponibilidad`: puede ser **Completa** o **Parcial**.
    - `certificado`: indica si posee certificación de soldadura.

- **Proceso:**
  - Validar que la información del operario sea correcta.
  - Evaluar cada trabajador mediante un conjunto de reglas.
  - Asignar un turno de trabajo (Mañana, Tarde o Noche).
  - Contabilizar la cantidad de operarios asignados a cada turno.
  - Generar un reporte con los resultados.

- **Salida:**
  - Un objeto con:
    - Cantidad de operarios evaluados.
    - Número de asignaciones por turno.
    - Resultado individual para cada operario.

## Reglas identificadas

1. Todo operario debe tener un nombre válido.

2. La experiencia debe cumplir:

\[
Experiencia \ge 0
\]

3. La disponibilidad únicamente puede ser:

- Completa
- Parcial

4. Un operario será asignado al **turno de Mañana** cuando:

- Experiencia ≥ 5 años.
- Posea certificación.
- Disponibilidad completa.

5. Un operario será asignado al **turno de Tarde** cuando:

- Experiencia ≥ 2 años.
- Posea certificación.
- No cumpla todas las condiciones del turno de mañana.

6. Los demás operarios serán asignados al **turno de Noche**.

7. Los registros con información inválida no participan en la asignación.

## Pruebas

### Caso normal

Entrada:

```javascript
const operarios = [
  {
    nombre: "Carlos",
    experiencia: 6,
    disponibilidad: "Completa",
    certificado: true
  },
  {
    nombre: "Laura",
    experiencia: 3,
    disponibilidad: "Parcial",
    certificado: true
  },
  {
    nombre: "Miguel",
    experiencia: 1,
    disponibilidad: "Completa",
    certificado: false
  }
];
```

Resultado esperado:

```javascript
{
  operariosEvaluados: 3,
  turnoManana: 1,
  turnoTarde: 1,
  turnoNoche: 1,
  resultados: [
    {
      nombre: "Carlos",
      turno: "Mañana"
    },
    {
      nombre: "Laura",
      turno: "Tarde"
    },
    {
      nombre: "Miguel",
      turno: "Noche"
    }
  ]
}
```

### Caso borde

Entrada:

```javascript
const operarios = [
  {
    nombre: "",
    experiencia: -2,
    disponibilidad: "Libre",
    certificado: true
  }
];
```

Resultado esperado:

```javascript
{
  operariosEvaluados: 1,
  turnoManana: 0,
  turnoTarde: 0,
  turnoNoche: 0,
  resultados: [
    {
      nombre: "",
      turno: "Datos inválidos"
    }
  ]
}
```

## Explicacion final

La solución implementa un sistema de asignación de turnos para un taller de soldadura utilizando reglas de negocio. Cada operario es evaluado según su experiencia, disponibilidad y certificación para determinar el turno más adecuado.

El algoritmo procesa todos los registros mediante ciclos, valida la información recibida y aplica condiciones jerárquicas para clasificar a cada trabajador en los turnos de mañana, tarde o noche. Además, contabiliza las asignaciones realizadas y detecta registros con información incorrecta.

La implementación utiliza funciones, arreglos, ciclos, acumuladores y estructuras condicionales, permitiendo obtener una solución organizada, reutilizable y fácilmente verificable mediante diferentes casos de prueba.