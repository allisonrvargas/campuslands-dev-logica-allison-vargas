# Plantilla de solución - Ejercicio 033 (Paracaidismo)

## Análisis

- **Entrada:** Un arreglo de estados de seguridad de paracaidismo (`items`), un nivel de urgencia (`prioridad`) y una directiva de control (`regla`).
- **Proceso:** Validar que la lista de chequeos no esté vacía. Evaluar las condiciones de salto según la regla estipulada, dándole máxima prioridad a cualquier estado "bloqueado" (como fallas de equipamiento o clima adverso).
- **Salida:** Un objeto con la acción de seguridad recomendada y el motivo que sustenta la decisión.

## Reglas aplicadas

1. **Seguridad Ante Todo:** Si algún chequeo vital está en estado "bloqueado", el salto no se autoriza hasta que se mitigue el riesgo.
2. **Criterio de Exclusión:** Si la lista de chequeos está completamente vacía, se aborta el salto por falta de información de seguridad.
3. **Jerarquía Lógica:** La directiva explícita de seguridad antepone la revisión de impedimentos antes de procesar un salto común.

## Pruebas incluidas

### Caso normal
- **Entrada:** `items: ["aprobado", "pendiente", "bloqueado"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`
- **Resultado esperado:** 
  `accion: "revisar bloqueado"`
  `motivo: "la regla de paracaidismo prioriza riesgos críticos antes de proceder al salto."`

### Caso borde
- **Entrada:** `items: []`, `prioridad: "baja"`, `regla: "revisar bloqueados primero"`
- **Resultado esperado:** 
  `accion: "abortar salto"`
  `motivo: "no se encontraron chequeos de seguridad registrados en la lista para evaluar."`

## Cómo revisar la solución

1. Navegar hasta la ruta personal de la entrega: `ejercicio-033/resoluciones/allison-vargas/`.
2. Ejecutar el archivo utilizando el entorno de Node.js en la terminal.
3. Verificar que los objetos de salida impresos coincidan exactamente con los escenarios descritos en las pruebas.

## Explicación final

La solución funciona súper bien porque asegura que nadie salte si algo está fallando. Al revisar la lista de chequeos uno por uno, el código detecta rápido si hay un aviso de "bloqueado" (como mal clima o el equipo dañado) y frena todo de inmediato para revisar el problema. Esto ayuda a que el proceso sea seguro y ordenado, evitando accidentes al poner los riesgos más graves primero antes de dar el visto bueno para saltar.