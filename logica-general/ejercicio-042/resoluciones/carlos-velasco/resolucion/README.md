# Plantilla de solucion

## Analisis

* **Entrada**: Objeto `jugador` con propiedades `edad` (número), `tieneLesion` (booleano) y `tarjetasRojas` (número).
* **Proceso**: Evaluación secuencial de restricciones de elegibilidad (edad, salud y disciplina).
* **Salida**: Objeto con `estado` (Aprobado/Rechazado) y un `motivo` descriptivo.

## Reglas identificadas

1. El jugador debe tener entre 15 y 40 años inclusive.
2. El jugador no puede tener una lesión activa.
3. El jugador debe tener menos de 3 tarjetas rojas en su historial.

## Pruebas

### Caso normal

* **Entrada**: `{ nombre: "Juan", edad: 20, tieneLesion: false, tarjetasRojas: 1 }`
* **Resultado esperado**: `{ estado: "Aprobado", motivo: "Inscripción exitosa." }`

### Caso borde

* **Entrada**: `{ nombre: "Pedro", edad: 45, tieneLesion: false, tarjetasRojas: 0 }`
* **Resultado esperado**: `{ estado: "Rechazado", motivo: "Edad fuera de rango permitido." }`

## Explicacion final

La solución funciona mediante una serie de validaciones jerárquicas que aseguran que el jugador cumpla con todas las políticas deportivas antes de permitir su inscripción en el sistema.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Condición de Edad**: `jugador.edad < 15 || jugador.edad > 40`.
* **Condición de Lesión**: `jugador.tieneLesion`.
* **Condición Disciplinaria**: `jugador.tarjetasRojas >= 3`.