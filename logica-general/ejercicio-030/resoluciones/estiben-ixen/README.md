## Analisis

- Entrada: Un objeto `viajero` con propiedades: `edad`, `destino`, `tienePasaporte`, `acompanadoPorAdulto`, `certificadoMedico`.
- Proceso: Aplicar una serie de validaciones jerárquicas para determinar si la reserva es válida.
- Salida: Un string indicando si la reserva fue "Aprobado" o el motivo específico del "Rechazado".

## Reglas identificadas

1. Menores: Si el viajero tiene menos de 18 años, debe estar acompañado por un adulto.
2. Destinos: Viajes internacionales obligan a tener pasaporte vigente.
3. Salud: Viajeros mayores de 80 años deben presentar certificado médico obligatorio.

## Pruebas

### Caso normal

Entrada:
{ edad: 30, destino: "Nacional", tienePasaporte: false, acompanadoPorAdulto: true, certificadoMedico: false }

Resultado esperado:
"Aprobado: Reserva confirmada."

### Caso borde

Entrada:
{ edad: 85, destino: "Nacional", tienePasaporte: false, acompanadoPorAdulto: true, certificadoMedico: false }

Resultado esperado:
"Rechazado: Requiere certificado médico para mayores de 80."

## Explicacion final

La solución aplica el principio de "fail-fast" (fallar rápido). Se evalúan las condiciones de mayor riesgo (como la seguridad del menor) antes de procesar otras reglas. Esto asegura que si una reserva incumple alguna normativa básica, el proceso se detenga inmediatamente, evitando procesar datos innecesarios.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.