# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) con los participantes del torneo.
  - Cada participante contiene:
    - `nombre`: nombre del competidor.
    - `edad`: edad del participante.
    - `peso`: peso corporal en kilogramos.
    - `experiencia`: años de experiencia en kickboxing.

- **Proceso:**
  - Validar que exista al menos un participante.
  - Revisar que los datos sean válidos.
  - Clasificar a cada competidor según su experiencia.
  - Organizar los participantes dentro de listas por categoría.
  - Registrar participantes con información incorrecta.

- **Salida:**
  - Un objeto con:
    - Total de participantes.
    - Cantidad de competidores por categoría.
    - Listas organizadas.
    - Observaciones sobre registros inválidos.

## Reglas identificadas

1. Debe existir al menos un participante registrado.

2. Los datos válidos cumplen:

\[
Edad \ge 16
\]

\[
Peso > 0
\]

\[
Experiencia \ge 0
\]

3. La categoría **Amateur** corresponde a:

\[
Experiencia < 4
\]

4. La categoría **Semiprofesional** corresponde a:

\[
4 \le Experiencia < 10
\]

5. La categoría **Profesional** corresponde a:

\[
Experiencia \ge 10
\]

6. Cada participante válido pertenece únicamente a una categoría.

7. Los participantes con datos inválidos se registran en una lista de observaciones y no son clasificados.

## Pruebas

### Caso normal

Entrada:

```javascript
const participantes = [
  {
    nombre: "Carlos",
    edad: 20,
    peso: 68,
    experiencia: 2
  },
  {
    nombre: "Andrea",
    edad: 25,
    peso: 60,
    experiencia: 6
  },
  {
    nombre: "Miguel",
    edad: 31,
    peso: 82,
    experiencia: 12
  }
];
```

Resultado esperado:

```javascript
{
  totalParticipantes: 3,
  amateur: 1,
  semiprofesional: 1,
  profesional: 1,
  categorias: {
    Amateur: [
      {
        nombre: "Carlos",
        edad: 20,
        peso: 68,
        experiencia: 2
      }
    ],
    Semiprofesional: [
      {
        nombre: "Andrea",
        edad: 25,
        peso: 60,
        experiencia: 6
      }
    ],
    Profesional: [
      {
        nombre: "Miguel",
        edad: 31,
        peso: 82,
        experiencia: 12
      }
    ]
  },
  observaciones: []
}
```

### Caso borde

Entrada:

```javascript
const participantes = [
  {
    nombre: "Luis",
    edad: 14,
    peso: -60,
    experiencia: -1
  }
];
```

Resultado esperado:

```javascript
{
  totalParticipantes: 1,
  amateur: 0,
  semiprofesional: 0,
  profesional: 0,
  categorias: {
    Amateur: [],
    Semiprofesional: [],
    Profesional: []
  },
  observaciones: [
    {
      nombre: "Luis",
      estado: "Datos inválidos"
    }
  ]
}
```

## Explicacion final

La solución organiza automáticamente a los participantes de un torneo de kickboxing utilizando reglas de negocio basadas en la experiencia de cada competidor.

Durante el recorrido del arreglo se valida que cada registro contenga información correcta. Los participantes válidos son clasificados en las categorías Amateur, Semiprofesional o Profesional, mientras que aquellos con datos incorrectos se almacenan en una lista de observaciones sin afectar el resto del proceso.

El algoritmo emplea funciones, arreglos, ciclos, acumuladores y estructuras condicionales para construir un sistema de organización eficiente que facilita la preparación de las listas de competición.