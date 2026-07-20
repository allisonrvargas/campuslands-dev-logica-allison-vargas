# Plantilla de solucion

## Analisis

- **Entrada:** Una lista con el estado de los insumos de tatuaje (items), la urgencia (prioridad) y la regla de control (regla).
- **Proceso:** Validar si la lista tiene datos. Si se encuentra algún insumo "bloqueado" (que no cumple con normas de bioseguridad), el sistema detiene el proceso para corregir el inconveniente antes de comenzar el tatuaje.
- **Salida:** Un mensaje directo que dice qué acción tomar y el motivo.

## Reglas aplicadas

1. **Protocolo de Bioseguridad:** Si algún insumo está marcado como bloqueado, se frena todo para proteger la salud del cliente y del artista.
2. **Control de vacíos:** Si la lista de chequeo viene sin elementos, el código avisa que no hay nada para analizar.

## Pruebas

### Caso normal
- **Entrada:** `items: ["aprobado", "pendiente", "bloqueado"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "la regla prioriza riesgos antes de tareas normales."`

### Caso borde
- **Entrada:** `items: []`, `prioridad: "baja"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "sin accion inmediata"`
  `motivo: "no se encontraron elementos registrados en la lista para evaluar."`

## Como revisar la solucion

1. Buscar la ruta: `ejercicio-054/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

La solución es fundamental para la seguridad en el estudio de tatuajes. Al realizar la revisión paso a paso, detectamos rápidamente si hay algún insumo bloqueado, evitando cualquier riesgo sanitario antes de iniciar el trabajo. Esto garantiza un entorno de trabajo profesional y seguro.