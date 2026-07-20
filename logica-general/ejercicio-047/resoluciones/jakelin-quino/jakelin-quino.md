# Analisis

- **Entrada:** `canciones` (arreglo de objetos con propiedades `titulo`, `duracion`, `volumen`).
- **Proceso:** Se recorre el arreglo con un ciclo `for`. Para cada canción, se validan reglas de negocio y se acumulan errores en una lista temporal.
- **Salida:** Un arreglo de objetos con el estado de validación y los motivos de rechazo.

## Reglas aplicadas

1. **Integridad de Tiempo:** La duración debe ser mayor a 0.
2. **Normalización de Audio:** El volumen debe estar estrictamente entre 0 y 100.
3. **Reporte de Errores:** Se identifican múltiples inconsistencias por canción si existen.

## Como ejecutar o revisar

1. Asegúrate de tener instalado Node.js.
2. Ejecuta: `node nombre-apellido.js`.
3. El resultado mostrará cuáles canciones pasaron la auditoría y cuáles fueron marcadas como inválidas.

## Casos probados

### Caso normal
- **Entrada:** { titulo: "Song A", duracion: 200, volumen: 80 }
- **Resultado:** { esValida: true, motivos: [] }

### Caso borde
- **Entrada:** { titulo: "Song B", duracion: -5, volumen: 150 }
- **Resultado:** { esValida: false, motivos: ["Duración negativa o cero", "Volumen fuera de rango"] }

## Explicacion final

El uso de una lista de errores (`errores.push`) permite detectar más de una falla simultánea en una sola canción, lo cual es mucho más útil que detener la validación ante el primer error encontrado.