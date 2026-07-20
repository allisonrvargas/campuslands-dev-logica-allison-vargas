# Logica general 043 - validaciones de clasificacion de equipos

## Sistema de Evaluación de Clasificación de Equipos

Este script determina si un equipo avanza a la siguiente etapa de una competencia basándose en un requisito mínimo de victorias y el cálculo de su puntaje total acumulado.

* **Descripción del proceso:**
* **Validación de Requisito**: Verifica si el equipo cuenta con al menos 2 victorias. Si no, es eliminado inmediatamente.
* **Cálculo de Puntaje**: Calcula el total de puntos sumando 3 puntos por victoria y 1 punto por empate.
* **Resultado**: Retorna el estado de avance, el puntaje total obtenido y un resumen del desempeño incluyendo puntos de "fair play".
* **Tecnologías:**
* JavaScript (lógica condicional, objetos).

---

### Explicación técnica

1. **Guardia de Validación**: La condición `equipo.victorias < 2` actúa como una barrera de entrada temprana, evitando cálculos innecesarios para equipos que no califican para la siguiente ronda.
2. **Puntaje Ponderado**: El sistema aplica una estructura de puntuación estándar (3 por victoria, 1 por empate), permitiendo una evaluación numérica objetiva del rendimiento deportivo.

### Lógica del Código

```javascript
const evaluarClasificacion = (equipo) => {
    // 1. Validación de requisito mínimo
    if (equipo.victorias < 2) {
        return { estado: "Eliminado", motivo: "No cumple el requisito mínimo de 2 victorias." };
    }

    // 2. Cálculo del puntaje total
    const puntaje = (equipo.victorias * 3) + (equipo.empates * 1);
    
    // 3. Retorno de estado de avance
    return {
        estado: "Avanza",
        puntajeTotal: puntaje,
        motivo: `Clasificado con ${puntaje} puntos y ${equipo.fairPlayPoints} puntos de fair play.`
    };
};

```

### Salida Esperada

```text
{
  estado: 'Avanza',
  puntajeTotal: 10,
  motivo: 'Clasificado con 10 puntos y 10 puntos de fair play.'
}
{
  estado: 'Eliminado',
  motivo: 'No cumple el requisito mínimo de 2 victorias.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-043/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco