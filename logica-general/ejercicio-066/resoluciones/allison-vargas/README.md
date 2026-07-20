# Plantilla de solucion

## Analisis

- **Entrada:** Una lista con el estado de los autos hiperdeportivos (items), la urgencia (prioridad) y la regla de control (regla).
- **Proceso:** Validar si existen datos. Si cualquier auto presenta un estado "bloqueado" (ej. falla técnica en la configuración de potencia), el sistema prioriza esta revisión para asegurar la integridad mecánica del vehículo.
- **Salida:** Un mensaje directo que indica la acción correctiva y el motivo.

## Reglas aplicadas

1. **Protocolo de Alto Rendimiento:** Cualquier estado bloqueado requiere atención inmediata para mantener los estándares de los hiperdeportivos.
2. **Control de vacíos:** Se valida la existencia de datos para evitar errores de procesamiento en la búsqueda.

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

1. Buscar la ruta: `ejercicio-066/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

En el sector de autos hiperdeportivos, la precisión es absoluta. Esta lógica permite localizar y resolver problemas de configuración rápidamente, asegurando que cada vehículo esté en condiciones óptimas para su máximo desempeño en pista.