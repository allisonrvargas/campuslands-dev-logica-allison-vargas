# Plantilla de solucion - Paracaidismo

## Analisis

- **Entrada:** Lista de estados del equipo (items), nivel de prioridad y la regla aplicada.
- **Proceso:** Se implementó una lógica de validación inicial seguida de una detección de fallos críticos. Si un equipo está "bloqueado", se detiene el proceso de autorización para salvaguardar la integridad del paracaidista.
- **Salida:** Autorización de salto o requerimiento de revisión urgente.

## Reglas aplicadas

1. **Protocolo de Seguridad:** Ante cualquier estado "bloqueado", se exige una revisión técnica obligatoria.
2. **Validación:** Se bloquea el procesamiento si la lista de estados está vacía o es inválida.
3. **Modularidad:** Separación clara entre validación de datos y toma de decisiones.

## Pruebas

### Caso normal
- **Entrada:** `items: ["aprobado", "bloqueado"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "la regla prioriza la revisión de fallos en el paracaídas antes de permitir cualquier salto."`

### Caso borde
- **Entrada:** `items: []`, `prioridad: "baja"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "prohibido saltar"`
  `motivo: "los datos del equipo de paracaidismo no son válidos."`

## Como revisar la solucion

1. Navegar a `ejercicio-093/resoluciones/allison-vargas/`.
2. Ejecutar con `node allison-vargas.js`.

## Explicacion final

En el paracaidismo, el margen de error es cero. Esta lógica integradora asegura que el eqquipo revise cualquier salto, priorizando siempre la detección de fallos críticos para garantizar la seguridad del usuario.