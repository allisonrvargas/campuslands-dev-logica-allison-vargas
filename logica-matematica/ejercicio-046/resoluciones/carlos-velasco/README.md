# Logica matematica 046 - conversion de unidades de rendimiento automotriz

## Sistema de Conversión y Clasificación de Vehículos

Este script transforma las especificaciones técnicas de un inventario de autos desde unidades estándar (HP y Km/h) hacia unidades internacionales (KW y MPH), clasificando cada vehículo según su capacidad de velocidad.

* **Descripción del proceso:**
* **Conversión de Potencia**: Multiplica los caballos de fuerza (HP) por el factor `0.7457` para obtener Kilowatts (KW).
* **Conversión de Velocidad**: Multiplica los kilómetros por hora (Km/h) por el factor `0.621371` para obtener Millas por hora (MPH).
* **Clasificación Automática**: Asigna una categoría ("Hiper-Rápido" o "Súper-Deportivo") comparando la velocidad calculada contra el umbral de `250 MPH`.
* **Tecnologías:**
* JavaScript (método `.map()`, métodos de formato numérico).

---

### Explicación técnica

1. **Transformación de Datos**: Al utilizar `.map()`, el script genera un nuevo arreglo con la información convertida, asegurando que los datos originales del inventario se mantengan intactos.
2. **Precisión y Formato**: El método `.toFixed(2)` se emplea para estandarizar la salida a dos decimales, garantizando consistencia y legibilidad en las especificaciones técnicas resultantes.

### Lógica del Código

```javascript
const convertirUnidades = (autos) => {
    const KW = 0.7457;
    const MPH = 0.621371;

    return autos.map(auto => {
        // 1. Conversión matemática de unidades
        const kw = auto.potenciaHp * KW;
        const mph = auto.velocidadKmh * MPH;
        
        // 2. Clasificación basada en umbral de velocidad
        const clasificacion = mph > 250 ? "Hiper-Rápido" : "Súper-Deportivo";

        // 3. Retorno del objeto formateado
        return {
            modelo: auto.modelo,
            potenciaKw: kw.toFixed(2),
            velocidadMph: mph.toFixed(2),
            clasificacion: clasificacion
        };
    });
};

```

### Salida Esperada

```text
[
  {
    modelo: 'Bugatti Chiron',
    potenciaKw: '1118.55',
    velocidadMph: '260.98',
    clasificacion: 'Hiper-Rápido'
  },
  {
    modelo: 'Porsche 911',
    potenciaKw: '335.56',
    velocidadMph: '180.20',
    clasificacion: 'Súper-Deportivo'
  }
]

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-046/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco