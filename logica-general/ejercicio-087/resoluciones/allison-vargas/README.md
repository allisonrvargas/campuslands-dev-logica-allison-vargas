# Plantilla de solucion

## Analisis

- **Entrada:** Lista de estados de canciones (items), prioridad y la regla a seguir.
- **Proceso:** Dividí el código en funciones pequeñas. Primero valido que la playlist contenga elementos, y luego detecto si algún archivo está marcado como "bloqueado" (inconsistente) para priorizar su revisión.
- **Salida:** Qué acción tomar y por qué.

## Reglas aplicadas

1. **Prioridad ante errores:** Si una canción tiene un error técnico (bloqueado), se revisa primero para evitar fallos en la reproducción.
2. **Control de vacíos:** Si la playlist está vacía, no se realiza ninguna acción.
3. **Modularidad:** Funciones separadas para validar la lista y detectar inconsistencias.

## Pruebas

### Caso normal
- **Entrada:** `items: ["aprobado", "pendiente", "bloqueado"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "toca revisar este track primero porque tiene un problema de metadatos o formato."`

### Caso borde
- **Entrada:** `items: []`, `prioridad: "baja"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "sin accion inmediata"`
  `motivo: "la playlist no tiene canciones para revisar."`

## Como revisar la solucion

1. Buscar la ruta: `ejercicio-087/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

Una playlist con canciones dañadas corta el ritmo. Al aplicar esta lógica, el sistema detecta automáticamente qué archivos están bloqueados o tienen inconsistencias de formato, permitiéndome limpiar la lista antes de que sea compartida o reproducida.