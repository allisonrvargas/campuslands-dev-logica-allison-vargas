# Plantilla de solucion

## Analisis

- **Entrada:** Un objeto (`sesion`) que contiene el estado de las herramientas y el perfil del tatuador mediante las propiedades `tintaAprobada`, `agujasEsterilizadas` y `experienciaAnios`.
- **Proceso:** Verificar que los datos ingresen correctamente. Luego, evaluar los factores de riesgo en orden de gravedad, priorizando la salud y la higiene para detener el flujo si ocurre una falla importante.
- **Salida:** Un objeto con el estado actual de la sesión ("Listo para iniciar", "Sesión Detenida", etc.), el tipo de error encontrado y una explicación detallada sobre el problema.

## Reglas identificadas

1. **Prioridad Sanitaria:** Si las agujas no están completamente esterilizadas, la sesión se cancela por completo por motivos de salud, bloqueando las demás revisiones.
2. **Control de Materiales:** Si la tinta no tiene el visto bueno o aprobación sanitaria, el proceso se congela hasta cambiar el insumo.
3. **Filtro de Seguridad:** Si el tatuador cuenta con menos de un año de práctica en el estudio, el sistema emite una alerta recomendando la supervisión de un experto.

## Pruebas

### Caso normal

Entrada:
```javascript
const sesion = {
  tintaAprobada: true,
  agujasEsterilizadas: true,
  experienciaAnios: 3
};
Resultado esperado:
JSON
{
  "estado": "Listo para iniciar",
  "errorDetectado": "Ninguno",
  "diagnostico": "Todos los controles de salud, materiales y experiencia se encuentran en orden."
}
Caso borde
Entrada:

JavaScript
const sesion = {
  tintaAprobada: true,
  agujasEsterilizadas: false,
  experienciaAnios: 5
};
Resultado esperado
JSON
{
  "estado": "Sesión Cancelada",
  "errorDetectado": "Alerta Sanitaria",
  "diagnostico": "Las agujas no están esterilizadas. Riesgo biológico crítico."
}
Explicacion final
La solución funciona muy bien porque inspecciona los puntos clave de la sesión de tatuajes buscando fallas de manera ordenada. Al revisar primero el estado de las agujas, el programa corta de golpe cualquier riesgo de salud antes de fijarse en la tinta o los años del tatuador. Esto hace que el código sea muy seguro, dando respuestas claras sobre qué está fallando y logrando detener el proceso a tiempo si los materiales o las medidas de higiene no son los adecuados.