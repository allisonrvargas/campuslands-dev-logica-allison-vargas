# Plantilla de solucion

## Analisis

- **Entrada:** Lista de estados de autos (items), prioridad y la regla a seguir.
- **Proceso:** Dividí el código en funciones pequeñas. Primero valido el inventario, y luego busco si existe algún estado "bloqueado" para priorizar su revisión técnica.
- **Salida:** Qué acción tomar y por qué.

## Reglas aplicadas

1. **Prioridad ante fallos:** Si un auto está marcado como bloqueado, es prioridad absoluta revisarlo.
2. **Control de vacíos:** Si la lista está vacía, no se procesa ninguna acción.
3. **Modularidad:** Funciones separadas para validar y buscar estados en el inventario.

## Pruebas

### Caso normal
- **Entrada:** `items: ["aprobado", "pendiente", "bloqueado"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "toca revisar este auto primero porque presenta una anomalía técnica en el sistema."`

### Caso borde
- **Entrada:** `items: []`, `prioridad: "baja"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "sin accion inmediata"`
  `motivo: "el inventario de hiperdeportivos está vacío."`

## Como revisar la solucion

1. Buscar la ruta: `ejercicio-086/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

En el mundo de los autos hiperdeportivos, cada detalle técnico es crucial. Al usar esta búsqueda lógica, puedo localizar instantáneamente si algún vehículo tiene un bloqueo, evitando que salga a pista con fallas y garantizando el máximo rendimiento del equipo.