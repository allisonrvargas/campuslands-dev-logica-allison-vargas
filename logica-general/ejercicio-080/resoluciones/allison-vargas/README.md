# Plantilla de solucion

## Analisis

- **Entrada:** Lista de estados de pedidos de comida (items), prioridad y la regla a seguir.
- **Proceso:** Dividí el código en funciones pequeñas. Primero valido que existan pedidos, y luego aplico la estrategia para seleccionar si alguno debe revisarse por bloqueo de ingredientes.
- **Salida:** Qué acción tomar y por qué.

## Reglas aplicadas

1. **Prioridad ante fallos:** Si un pedido está bloqueado, se revisa primero.
2. **Control de vacíos:** Si no hay pedidos, no se realiza ninguna acción.
3. **Modularidad:** Funciones separadas para validar y aplicar la estrategia de selección.

## Pruebas

### Caso normal
- **Entrada:** `items: ["aprobado", "pendiente", "bloqueado"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "toca revisar este pedido primero por problemas con los ingredientes."`

### Caso borde
- **Entrada:** `items: []`, `prioridad: "baja"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "sin accion inmediata"`
  `motivo: "no hay pedidos en la lista para seleccionar."`

## Como revisar la solucion

1. Buscar la ruta: `ejercicio-080/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

En la comida urbana la rapidez es todo, pero la calidad es innegociable. Al separar mi lógica en funciones pequeñas, puedo seleccionar de forma rápida qué pedidos están bien y cuáles necesitan atención inmediata, asegurando que el servicio sea excelente.