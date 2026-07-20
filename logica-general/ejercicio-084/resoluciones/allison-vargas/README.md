# Plantilla de solucion

## Analisis

- **Entrada:** Lista de estados de motos (items), prioridad y la regla a seguir.
- **Proceso:** Dividí el código en funciones pequeñas. Primero valido el inventario, y luego aplico un filtro para detectar si alguna moto tiene un estado bloqueado que requiera atención inmediata.
- **Salida:** Qué acción tomar y por qué.

## Reglas aplicadas

1. **Prioridad ante fallos:** Si una moto tiene un estado bloqueado, se revisa primero para evitar problemas técnicos.
2. **Control de vacíos:** Si el inventario está vacío, no se hace nada.
3. **Modularidad:** Funciones separadas para validar stock y aplicar el filtro de revisión.

## Pruebas

### Caso normal
- **Entrada:** `items: ["aprobado", "pendiente", "bloqueado"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "toca revisar este registro primero porque la moto tiene un problema técnico."`

### Caso borde
- **Entrada:** `items: []`, `prioridad: "baja"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "sin accion inmediata"`
  `motivo: "el inventario de motos está vacío o los datos no son correctos."`

## Como revisar la solucion

1. Buscar la ruta: `ejercicio-084/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

Para un inventario de motos, mantener el orden es vital para evitar errores de inventario. Al usar filtros modulares, puedo identificar rápidamente si alguna moto necesita revisión técnica, permitiendo que solo las motos en perfecto estado estén disponibles para los clientes.