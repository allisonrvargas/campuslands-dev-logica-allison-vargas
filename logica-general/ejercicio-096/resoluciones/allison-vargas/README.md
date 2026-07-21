# Plantilla de solucion - Animacion 3D

## Analisis

- **Entrada:** Matriz de estados de frames (matrizFrames) y la regla de negocio.
- **Proceso:** Se valida que la entrada sea una estructura de matriz válida. Posteriormente, se aplana la matriz para revisar si existe algún estado "bloqueado" (frame corrupto) y se aplica la regla de prioridad.
- **Salida:** Acción de renderizado y motivo técnico.

## Reglas aplicadas

1. **Prioridad de Render:** Los frames marcados como "bloqueados" deben ser corregidos antes de continuar con la producción.
2. **Validación de Estructura:** Se verifica que la entrada sea una matriz (lista de listas) para evitar errores de tipo.
3. **Optimización:** El uso de `.flat()` permite buscar eficientemente en toda la estructura de frames.

## Pruebas

### Caso normal
- **Entrada:** `matrizFrames: [["aprobado", "pendiente"], ["bloqueado", "aprobado"]]`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "la regla prioriza la corrección de frames corruptos en la matriz antes de continuar el renderizado 3D."`

### Caso borde
- **Entrada:** `matrizFrames: []`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "pausar render"`
  `motivo: "la estructura de la matriz de frames es inválida o está vacía."`

## Como revisar la solucion

1. Navegar a `ejercicio-096/resoluciones/allison-vargas/`.
2. Ejecutar con `node allison-vargas.js`.

## Explicacion final

En animación 3D, trabajar con matrices es fundamental para gestionar líneas de tiempo complejas. Esta solución permite solucionar rápidamente una matriz de frames, detectando errores de renderizado de forma automática y asegurando que solo los frames correctos avancen en la cadena de producción.