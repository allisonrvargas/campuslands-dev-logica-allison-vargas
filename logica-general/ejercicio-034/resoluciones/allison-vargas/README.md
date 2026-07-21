# Plantilla de solucion

## Analisis

- **Entrada:** Una lista con el estado de las cosas del estudio de tatuajes (items), el nivel de urgencia (prioridad) y la orden de control (regla).
- **Proceso:** Ver si la lista tiene datos. Si algo aparece como "bloqueado" (un problema con las máquinas o tintas), se le pone atención de inmediato por seguridad antes de seguir con los tatuajes programados.
- **Salida:** Un mensaje que te dice qué hacer y la razón de la decisión.

## Reglas aplicadas

1. **Cuidado con los problemas:** Si hay algún peligro o insumo bloqueado, se frena todo para arreglarlo primero y no arruinar el trabajo.
2. **Lista vacía:** Si no nos pasan datos para revisar, el sistema avisa que no hay nada que evaluar.

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

1. Ir a la carpeta: `ejercicio-034/resoluciones/allison-vargas/`.
2. Ejecutar el archivo JavaScript con Node.js desde la terminal.

## Explicacion final

La solución funciona súper bien porque ayuda a que el estudio trabaje seguro. Al revisar la lista de control, el código encuentra rápido si hay algún problema crítico (como una máquina rota o falta de materiales) y avisa que hay que detenerse a solucionar ese bloqueo. Esto evita que empecemos un tatuaje si las cosas no están al 100%, dejando las tareas comunes en espera hasta que lo importante quede resuelto.