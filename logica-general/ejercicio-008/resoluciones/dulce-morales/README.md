# Plantilla de solucion

## Analisis

- Entrada: Un objeto `peliculaFlujo` con las propiedades `titulo` (texto), `faseActual` (número), `requiereEfectosEspeciales` (booleano) y `aprobacionDirector` (booleano).
- Proceso: Evaluar de forma secuencial los pasos necesarios del flujo de postproducción de un largometraje de ciencia ficción, garantizando que no se salten fases críticas antes de su estreno.
- Salida: Un objeto que indica el estado del flujo del proyecto cinematográfico, la siguiente acción requerida en la línea de producción y el motivo del reporte.

## Reglas identificadas

1. Regla de Flujo Secuencial: Para avanzar a la fase de distribución (Fase 3), el filme debe haber completado la fase de edición (Fase 1) y renderizado de CGI (Fase 2). Si la `aprobacionDirector` es falsa (`false`), el proyecto se congela inmediatamente en su fase actual.
2. Regla de Control de Efectos: Si la película está catalogada con `requiereEfectosEspeciales` en verdadero (`true`) y se encuentra en la Fase 1, no puede saltar directamente al estreno sin registrar primero el paso de renderizado por el departamento de VFX.

## Pruebas

### Caso normal

Entrada:
peliculaFlujo: {
  titulo: "Interestelar 2",
  faseActual: 2,
  requiereEfectosEspeciales: true,
  aprobacionDirector: true
}

Resultado esperado:
flujoAprobado: true
siguienteAccion: "pasar_a_distribucion"
motivo: "El largometraje 'Interestelar 2' completó exitosamente el renderizado de CGI y cuenta con el visto bueno del director para iniciar la distribución."

### Caso borde

Entrada:
peliculaFlujo: {
  titulo: "Cyberpunk 2099",
  faseActual: 1,
  requiereEfectosEspeciales: true,
  aprobacionDirector: false
}

Resultado esperado:
flujoAprobado: false
siguienteAccion: "congelar_en_edicion"
motivo: "El flujo está bloqueado. El director no ha firmado la aprobación de edición o se intentó omitir el renderizado de VFX."

## Explicacion final

La solución funciona porque implementa un sistema de control de estados rígido por etapas (State Machine Workflow). Al validar de forma ordenada las banderas booleanas de aprobación del director y la necesidad de procesos digitales complejos (VFX), el script asegura que las producciones de ciencia ficción cumplan rigurosamente con los pasos técnicos de la industria, evitando el despliegue de metraje incompleto o sin editar.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.