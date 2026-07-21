# Analisis

- **Entrada:** `cilindrada` (number), `kilometraje` (number), `tieneDocumentos` (boolean).
- **Proceso:** Se aplican filtros de exclusión. El sistema primero verifica la legalidad (documentos), luego la integridad mecánica por gamas (alta vs estándar) y finalmente el límite absoluto de uso.
- **Salida:** Un objeto con el estado `apta` (boolean) y un `motivo` explicativo.

## Reglas aplicadas

1. **Requisito Legal:** Si no tiene documentos, la moto no puede venderse.
2. **Alta Gama:** Si supera los 600cc y tiene más de 20,000 km, se considera con desgaste de motor no aceptable.
3. **Límite Estándar:** Ninguna moto puede tener más de 50,000 km para ser puesta en inventario.

## Casos probados

### Caso normal
- **Entrada:** 700cc, 25,000 km, Documentos: True
- **Resultado:** { apta: false, motivo: "Desgaste excesivo en motor de alta gama" }

### Caso borde
- **Entrada:** 250cc, 10,000 km, Documentos: False
- **Resultado:** { apta: false, motivo: "Documentación incompleta" }

## Explicacion final

Al descartar primero los casos más graves (falta de documentos), el código se vuelve más eficiente y fácil de leer. Esta estructura permite añadir nuevas reglas de negocio simplemente agregando un bloque `if` adicional antes de la confirmación final de aptitud.