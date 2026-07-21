# Plantilla de solucion - Inventario Quimico

## Analisis

- **Entrada:** Lista de estados de fórmulas (items), prioridad y regla de negocio.
- **Proceso:** Se implementó una función integradora que valida la integridad de los datos químicos. Detecta si existen fórmulas "bloqueadas" (posibles reactivos inestables) y prioriza su revisión ante cualquier mezcla.
- **Salida:** Acción de seguridad recomendada y motivo detallado.

## Reglas aplicadas

1. **Protocolo de Seguridad:** Las fórmulas bloqueadas son prioritarias debido al riesgo de inestabilidad química.
2. **Validación:** No se permite realizar ninguna operación si el inventario está vacío o corrupto.
3. **Modularidad:** Funciones separadas para la validación y la lógica de decisión.

## Pruebas

### Caso normal
- **Entrada:** `items: ["aprobado", "bloqueado", "pendiente"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "la regla prioriza la inspección de sustancias bloqueadas (inestables) para evitar reacciones peligrosas."`

### Caso borde
- **Entrada:** `items: []`, `prioridad: "baja"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "detener operacion"`
  `motivo: "el inventario de fórmulas está vacío o presenta errores de carga."`

## Como revisar la solucion

1. Navegar a `ejercicio-099/resoluciones/allison-vargas/`.
2. Ejecutar con `node allison-vargas.js`.

## Explicacion final

En química, la estabilidad es vital. Esta solución garantiza que nunca se procese una fórmula marcada como bloqueada o inestable, automatizando el control de calidad del inventario y protegiendo el entorno de laboratorio.