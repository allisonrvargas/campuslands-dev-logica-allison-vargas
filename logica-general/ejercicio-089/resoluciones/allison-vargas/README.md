# Plantilla de solucion

## Analisis

- **Entrada:** Lista de estados de películas (items), prioridad y la regla a seguir.
- **Proceso:** Dividí el código en funciones pequeñas. Primero valido la colección, y luego simulo la revisión de estados para identificar si alguna película está bloqueada por problemas técnicos.
- **Salida:** Qué acción tomar y por qué.

## Reglas aplicadas

1. **Prioridad ante errores:** Si una película de miedo presenta un bloqueo (ej. efectos corruptos), se revisa de inmediato.
2. **Control de vacíos:** Si no hay películas en la colección, no se procesa ninguna acción.
3. **Modularidad:** Funciones separadas para validar y simular la lógica de estados.

## Pruebas

### Caso normal
- **Entrada:** `items: ["aprobado", "pendiente", "bloqueado"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "toca revisar esta película primero porque el archivo de efectos está corrupto."`

### Caso borde
- **Entrada:** `items: []`, `prioridad: "baja"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "sin accion inmediata"`
  `motivo: "no hay películas en la colección para simular."`

## Como revisar la solucion

1. Buscar la ruta: `ejercicio-089/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

En el cine de terror, cualquier error técnico puede arruinar la atmósfera de la película. Al simular los estados de los archivos mediante este código, garantizo que cualquier película con problemas sea detectada y corregida rápidamente, permitiendo que la producción siga adelante sin contratiempos.