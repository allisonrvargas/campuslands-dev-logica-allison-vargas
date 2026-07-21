# Logica matematica 041 - operaciones aritmeticas controladas

## Dificultad

Basico con analisis

## Tematica usada

videojuegos competitivos

## Contexto del problema

Estas trabajando como estudiante de Campuslands en un reto de videojuegos competitivos. El objetivo no es memorizar codigo, sino analizar una situacion, convertirla en reglas claras y construir una solucion ordenada.

En este ejercicio debes resolver un caso de operaciones aritmeticas controladas. La dificultad sube de forma gradual: aqui se espera combinar varias condiciones y revisar casos especiales.

## Objetivo

Crear una solucion que reciba datos, aplique reglas y entregue un resultado verificable. La solucion puede hacerse en JavaScript, Python, pseudocodigo o Markdown tecnico, segun indique el instructor.

## Que vas a practicar

- leer instrucciones
- identificar entradas
- definir salidas
- usar condicionales
- probar casos
- ciclos
- acumuladores
- funciones
- arreglos
- calculo numerico

## Explicacion paso a paso

1. Lee el contexto completo antes de escribir codigo.
2. Identifica las entradas: datos que recibe tu solucion.
3. Identifica las salidas: resultado que debes entregar.
4. Escribe las reglas con tus palabras.
5. Resuelve primero un caso pequeno manualmente.
6. Convierte el razonamiento en pasos ordenados.
7. Implementa la solucion.
8. Prueba con el ejemplo y con un caso inventado por ti.

## Instrucciones detalladas

1. Crea una carpeta con tu nombre en `resoluciones/nombre-apellido/`.
2. Dentro de tu carpeta crea un archivo principal llamado `nombre-apellido.js`, `nombre-apellido.py` o `nombre-apellido.md`.
3. Define claramente las entradas del problema.
4. Aplica las reglas necesarias para resolver el reto.
5. Muestra el resultado final y una explicacion breve.
6. Agrega al menos dos pruebas: una normal y una con caso borde.

## Reglas del reto

- No modifiques el README del ejercicio.
- No borres archivos base.
- No cambies entregas de otros estudiantes.
- No subas archivos fuera de `resoluciones/nombre-apellido/`.
- Usa nombres en minusculas y con guiones.
- Si usas codigo, debe poder leerse sin depender de librerias externas.

## Ejemplos

Entrada ejemplo:

```text
participantes: [12, 18, 25, 30]
bono: 8
penalizacion: 3
```

Salida esperada ejemplo:

```text
puntaje_final: 27
clasificacion: competitivo
explicacion: se sumo el bono y se resto la penalizacion segun las reglas.
```

## Entregable esperado

Una carpeta como esta:

```text
ejercicio-041/
└── resoluciones/
    └── nombre-apellido/
        ├── nombre-apellido.js
        └── README.md
```

El README de tu entrega debe explicar:

- Como pensaste el problema.
- Que reglas aplicaste.
- Como ejecutar o revisar tu solucion.
- Que casos probaste.

## Consejos

- No empieces por el codigo. Empieza por la regla.
- Si el resultado parece raro, revisa primero los datos de entrada.
- Usa nombres de variables que expliquen su proposito.
- Divide el problema si sientes que crece demasiado.

## Errores comunes

- Resolver solo el ejemplo y no el problema general.
- No validar datos vacios o valores fuera de rango.
- Mezclar calculos con mensajes sin orden.
- Poner la entrega fuera de la carpeta personal.
- Cambiar archivos base del ejercicio.

## Pistas opcionales

- Escribe primero una tabla con entrada, proceso y salida.
- Prueba con pocos datos antes de usar una lista grande.
- Si hay varias reglas, aplicalas una por una.
- Si hay ranking, define que pasa en caso de empate.

## Como validar si quedo bien

Tu ejercicio esta bien si:

- La carpeta esta en `resoluciones/nombre-apellido/`.
- La solucion produce el resultado esperado para el ejemplo.
- Agregaste al menos un caso de prueba propio.
- Puedes explicar por que tu respuesta es correcta.
- No modificaste archivos de otros estudiantes ni archivos base.

## Sistema de Ranking de Jugadores

Este script calcula el puntaje final de un jugador y asigna una clasificación basada en un umbral de rendimiento.

* **Descripción del proceso:**
* **Cálculo de Puntaje**: Se utiliza la fórmula `(victorias * factorBono) - (derrotas * penalizacion)`.
* **Piso de Puntaje**: Si el cálculo resulta en un número negativo, el sistema ajusta automáticamente el puntaje a `0`.
* **Clasificación**:
* `> 50`: "Élite"
* `<= 50`: "Competitivo".

* **Tecnologías:**
* JavaScript (lógica aritmética, condicionales).

---

### Explicación técnica

1. **Normalización de Valores**: La restricción `if (puntaje < 0)` garantiza que los jugadores con un desempeño muy pobre no reciban puntajes negativos, manteniendo la integridad de la base de datos.
2. **Ponderación Dinámica**: Los parámetros `factorBono` y `penalizacion` permiten ajustar la dificultad y exigencia del sistema de ranking sin modificar el código fuente.

### Lógica del Código

```javascript
const calcularRanking = (victorias, derrotas, factorBono, penalizacion) => {
    // 1. Cálculo base con ponderación
    let puntaje = (victorias * factorBono) - (derrotas * penalizacion);
    
    // 2. Aplicación de límite inferior (piso en 0)
    if (puntaje < 0) {
        puntaje = 0;
    }

    // 3. Asignación de categoría
    const clasificacion = puntaje > 50 ? "Élite" : "Competitivo";

    return {
        puntaje_final: puntaje,
        clasificacion: clasificacion,
        explicacion: "Cálculo basado en victorias ponderadas menos penalización de derrotas."
    };
};

```

### Salida Esperada

```text
{
  puntaje_final: 74,
  clasificacion: 'Élite',
  explicacion: 'Cálculo basado en victorias ponderadas menos penalización de derrotas.'
}
{
  puntaje_final: 0,
  clasificacion: 'Competitivo',
  explicacion: 'Cálculo basado en victorias ponderadas menos penalización de derrotas.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-041/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco