Este `README.md` documenta el sistema de clasificación de jugadores, diseñado para evaluar perfiles basados en su desempeño, historial de reportes y detección de comportamientos sospechosos (smurfing).

---

## Sistema de Clasificación de Jugadores

Este script procesa estadísticas de jugadores para determinar su nivel de habilidad y estado de la cuenta dentro de una plataforma competitiva.

* **Descripción del proceso:**
* **Validación de Actividad**: Rechaza jugadores sin partidas jugadas.
* **Filtro de Toxicidad**: Aplica un baneo inmediato si el jugador acumula más de 5 reportes.
* **Detección Anti-Smurf**: Identifica cuentas nuevas con un rendimiento sospechosamente alto (Win rate $\ge$ 80% en menos de 20 partidas).
* **Clasificación Estándar**: Asigna rangos (Alto, Medio, Bajo) basándose en el porcentaje de victorias.


* **Tecnologías:**
* JavaScript (lógica condicional jerárquica).

### Explicación técnica

1. **Retorno Anticipado**: El uso de `return` dentro de los bloques `if` permite una ejecución eficiente, deteniendo el procesamiento apenas se identifica una condición crítica (como un baneo).
2. **Validación de Precisión**: El método `.toFixed(1)` se utiliza para presentar porcentajes de manera legible, eliminando ruido de coma flotante.
3. **Jerarquía de Reglas**: El sistema está diseñado para que los criterios de seguridad (Reportes/Smurf) prevalezcan sobre la clasificación estadística de habilidad.


### Lógica del Código

```javascript
const clasificarJugador = (jugador) => {
    // 1. Validación de datos
    if (jugador.partidasJugadas <= 0) {
        return { estado: "Sin clasificar", motivo: "El jugador no ha jugado ninguna partida." };
    }

    // 2. Regla de Toxicidad
    if (jugador.reportes > 5) {
        return { estado: "Baneado", motivo: "Exceso de reportes acumulados." };
    }

    // 3. Cálculo de Win Rate
    const winRate = (jugador.victorias / jugador.partidasJugadas) * 100;

    // 4. Regla Anti-Smurf
    if (jugador.partidasJugadas < 20 && winRate >= 80) {
        return { 
            estado: "En revisión (Smurf)", 
            motivo: `Win rate anormalmente alto (${winRate.toFixed(1)}%) en una cuenta nueva.` 
        };
    }

    // 5. Clasificación estándar
    let rango = "";
    if (winRate >= 60) rango = "Rango Alto";
    else if (winRate >= 40) rango = "Rango Medio";
    else rango = "Rango Bajo";

    return { 
        estado: rango, 
        motivo: `Clasificación basada en un win rate del ${winRate.toFixed(1)}%.` 
    };
};

```

### Salida Esperada

```text
{
  estado: 'En revisión (Smurf)',
  motivo: 'Win rate anormalmente alto (86.7%) en una cuenta nueva.'
}
{
  estado: 'Rango Medio',
  motivo: 'Clasificación basada en un win rate del 45.0%.'
}
{
  estado: 'Baneado',
  motivo: 'Exceso de reportes acumulados.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-041/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco
