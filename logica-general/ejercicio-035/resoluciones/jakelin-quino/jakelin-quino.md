## Analisis
- **Entrada**: Resolución en DPI y extensión del archivo (formato).
- **Proceso**: Verifico que la resolución sea profesional (mínimo 300 DPI) y que el formato sea aceptado.
- **Salida**: Decisión sobre si el archivo está listo para exportar o si hay un error.

## Reglas aplicadas
1. **Calidad**: Todo archivo menor a 300 DPI se considera borroso para impresión.
2. **Compatibilidad**: Solo se aceptan formatos "PNG" o "JPG" para el cliente.
3. **Éxito**: Si supera ambas condiciones, el sistema autoriza la exportación.

## Pruebas
- **Caso Normal**: `resolucion: 300, formato: "PNG"` -> Resultado: "Acción: Exportar archivo".
- **Caso Borde (Baja resolución)**: `resolucion: 72, formato: "PNG"` -> Resultado: "Acción: Bloqueada. Motivo: Baja resolución".

## Explicacion 
Al igual que en un estudio de diseño, no podemos dejar que un archivo salga si no cumple los requisitos mínimos. Usar `if-else` es la forma más clara de aplicar estas políticas de calidad de manera automática.