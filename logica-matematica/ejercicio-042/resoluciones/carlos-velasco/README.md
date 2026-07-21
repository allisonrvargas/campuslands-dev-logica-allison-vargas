# Logica matematica 042 - operaciones aritmeticas controladas

## Sistema de Cálculo de Efectividad de Jugadores

Este script calcula el índice de efectividad de un jugador basándose en su conversión de goles por tiro al arco, aplicando un bono de rendimiento para determinar su clasificación final.

* **Descripción del proceso:**
* **Validación de Datos**: Verifica que el número de tiros no sea cero para evitar errores de división por cero.
* **Cálculo de Efectividad**: Obtiene el porcentaje base de goles y lo incrementa aplicando un bono porcentual.
* **Clasificación**:
* `> 50`: "Élite"
* `<= 50`: "Competitivo".
* **Tecnologías:**
* JavaScript (lógica aritmética, condicionales).

---

### Explicación técnica

1. **Prevención de Errores**: La validación `tiros === 0` actúa como un guardia de seguridad lógico, retornando un valor predeterminado seguro cuando no hay actividad de tiros registrada.
2. **Formateo de Salida**: El uso de `toFixed(2)` garantiza que el porcentaje final se represente con dos decimales, estandarizando la precisión de los datos para la interfaz.

### Lógica del Código

```javascript
const calcularEfectividad = (goles, tiros, bono) => {
    if (tiros === 0) return { efectividad_final: 0, clasificacion: "Competitivo", explicacion: "Sin tiros al arco." };
    
    let base = (goles / tiros) * 100;
    let final = base + (base * bono);
    
    return {
        efectividad_final: final.toFixed(2),
        clasificacion: final > 50 ? "Élite" : "Competitivo",
        explicacion: "Cálculo basado en porcentaje de conversión ajustado por bono."
    };
};

```

### Salida Esperada

```text
{
  efectividad_final: '55.00',
  clasificacion: 'Élite',
  explicacion: 'Cálculo basado en porcentaje de conversión ajustado por bono.'
}
{
  efectividad_final: '0.00',
  clasificacion: 'Competitivo',
  explicacion: 'Cálculo basado en porcentaje de conversión ajustado por bono.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-042/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco