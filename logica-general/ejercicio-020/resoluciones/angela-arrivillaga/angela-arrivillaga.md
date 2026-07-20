# Plantilla de solucion

## Analisis

- **Entrada:** Un objeto con una lista de pedidos (items) y una prioridad.
- **Proceso:** Validar que la estructura de pedidos sea un arreglo, iterar con `for...of` para detectar si existe alguna orden marcada como "bloqueado" y evaluar si la prioridad "alta" requiere detener el proceso para revisión.
- **Salida:** Un objeto con la accion a realizar y el motivo de la decisión.

## Reglas identificadas

1. Si la lista de pedidos no es válida o está corrupta, se pausa la cocina.
2. Si la prioridad es "alta" y se encuentra al menos una orden "bloqueado", se prioriza la revisión de riesgos antes de continuar.
3. Si no existen órdenes críticas, se procede al despacho de comandas.

## Pruebas

### Caso normal

Entrada:
```json
{ 
  "items": ["aprobado", "pendiente", "bloqueado"], 
  "prioridad": "alta", 
  "regla": "revisar bloqueados primero" 
}
```

Resultado esperado:

```json
{ 
  "accion": "revisar bloqueado", 
  "motivo": "la regla prioriza riesgos antes de tareas normales." 
}
```

### Caso borde
Entrada:

```json
{ 
  "items": ["aprobado", "pendiente"], 
  "prioridad": "baja", 
  "regla": "ejecutar entrega" 
}
```

Resultado esperado:

```json
{ 
  "accion": "despachar comandas", 
  "motivo": "Flujo de cocina óptimo, órdenes listas para entrega." 
}
```

### Explicacion final
La solución asegura la integridad del flujo mediante la validación de tipo de dato inicial. Utiliza una estructura de bucle `for...of` optimizada con break, lo que permite identificar rápidamente cualquier orden crítica y detener la operación de forma segura si la prioridad es alta, garantizando un servicio de cocina eficiente y libre de errores.