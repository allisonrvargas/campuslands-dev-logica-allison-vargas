# Plantilla de solucion

## Analisis

- **Entrada:** Lista de estados de proyectos (items), prioridad y la regla a seguir.
- **Proceso:** Dividí el código en funciones pequeñas. Primero reviso si hay archivos de dibujo, y luego comparo si alguno tiene un bloqueo para darle prioridad urgente.
- **Salida:** Qué hay que hacer y por qué.

## Reglas aplicadas

1. **Prioridad ante fallos:** Si un archivo de dibujo está bloqueado, se revisa primero para evitar pérdida de arte.
2. **Control de vacíos:** Si no hay datos, no se hace nada.
3. **Modularidad:** Funciones separadas para validar y aplicar reglas de negocio.

## Pruebas

### Caso normal
- **Entrada:** `items: ["aprobado", "pendiente", "bloqueado"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "toca revisar esto primero porque el archivo de dibujo tiene un problema."`

### Caso borde
- **Entrada:** `items: []`, `prioridad: "baja"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "sin accion inmediata"`
  `motivo: "no hay proyectos en la lista para revisar."`

## Como revisar la solucion

1. Buscar la ruta: `ejercicio-075/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

En el dibujo digital, los archivos pueden corromperse o tener problemas técnicos. Al tener estas reglas de negocio bien organizadas en funciones pequeñas, me aseguro de que si algo está bloqueado, lo pueda ver de inmediato para salvar el arte antes de que pase algo peor.