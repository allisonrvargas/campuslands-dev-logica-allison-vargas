# Plantilla de solucion

## Analisis

- **Entrada:** Una lista con el estado de los archivos o capas de dibujo (items), el nivel de urgencia (prioridad) y la regla de control (regla).
- **Proceso:** Validar si existen datos. Si se identifica algún elemento "bloqueado", el sistema frena la exportación o el guardado del proyecto para evitar pérdida de trabajo o errores técnicos.
- **Salida:** Un mensaje directo que indica qué acción tomar y el motivo.

## Reglas aplicadas

1. **Protección de activos:** Si una capa o archivo presenta un bloqueo, se prioriza su atención para asegurar que la obra final no sufra daños.
2. **Control de vacíos:** Si no hay elementos en la lista, el sistema notifica que no hay nada que procesar.

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

1. Buscar la ruta: `ejercicio-055/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

Esta lógica aplicada al dibujo digital nos permite gestionar el flujo de trabajo de manera profesional. Detectar errores de archivos a tiempo es crucial para que el artista pueda concentrarse en la creación sin preocuparse por fallos técnicos o bloqueos en sus capas.