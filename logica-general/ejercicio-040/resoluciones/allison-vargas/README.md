# Plantilla de solucion

## Analisis

- **Entrada:** Una lista con el estado de los insumos o pedidos de comida (items), la urgencia (prioridad) y la regla de control (regla).
- **Proceso:** Validar si la lista tiene datos. Si se encuentra algún elemento en estado "bloqueado", el sistema frena las órdenes normales para solucionar el inconveniente antes de despachar la comida a los clientes.
- **Salida:** Un mensaje directo que dice qué acción tomar y la explicación del motivo.

## Reglas aplicadas

1. **Atención al problema:** Si algún pedido o ingrediente importante está bloqueado, se congela el flujo común para corregir el fallo y evitar que el servicio o el plato salga mal.
2. **Control de vacíos:** Si la lista de chequeo viene sin elementos, el código avisa de inmediato que no hay nada para analizar.

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

1. Buscar la ruta: `ejercicio-040/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

La solución funciona súper bien porque ayuda a mantener la calidad en las entregas de comida. Al revisar la lista de control del negocio, el código encuentra rápido si hay algún insumo agotado o una orden bloqueada y nos avisa que paremos. Esto evita que mandemos un pedido incompleto o retrasado al cliente, dejando las tareas comunes en pausa hasta que lo importante quede resuelto.