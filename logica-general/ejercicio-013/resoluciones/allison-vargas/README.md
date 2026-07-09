# Plantilla de solucion

## Analisis

- **Entrada:** Un objeto (`condiciones`) con las variables clave de un salto: altura en pies (`altitudPies`), velocidad del viento (`velocidadVientoNudos`) y la confirmación del estado del paracaídas (`equipoListo`).
- **Proceso:** Validar que los datos existan correctamente. Luego, evaluar de forma prioritaria la seguridad del equipamiento, seguida de las limitaciones del clima y los niveles de altura para tomar una decisión.
- **Salida:** Un objeto que indica la resolución del caso ("Salto autorizado", "Salto autorizado con precaución" o "Salto cancelado") junto con el motivo de la elección.

## Reglas identificadas

1. **Filtro de Seguridad Máxima:** Si el equipo no está verificado al 100%, el salto se cancela de inmediato sin importar ninguna otra variable.
2. **Límite de Viento:** No se permite ninguna actividad si la velocidad del viento pasa de los 25 nudos para evitar accidentes en el descenso.
3. **Escala de Alturas:** Alturas por debajo de 3,000 pies se cancelan; entre 3,000 y 5,000 pies se permite bajo advertencia de apertura rápida, y más de 5,000 pies es un salto normal.

## Pruebas

### Caso normal

Entrada:
```javascript
const condiciones = {
  altitudPies: 10000,
  velocidadVientoNudos: 12,
  equipoListo: true
};
Resultado esperado:
JSON
{
  "resultado": "Salto autorizado",
  "motivo": "Condiciones ideales. Altitud y velocidad del viento dentro de los rangos estándar de seguridad."
}
Caso borde
Entrada:

JavaScript
const condiciones = {
  altitudPies: 12000,
  velocidadVientoNudos: 28,
  equipoListo: true
};
Resultado esperado
JSON
{
  "resultado": "Salto cancelado",
  "motivo": "Clima adverso: La velocidad del viento (28 nudos) supera el límite seguro de 25 nudos."
}
Explicacion final
La solución funciona muy bien porque analiza la situación paso a paso, poniendo la seguridad del paracaidista como lo más importante. Al revisar primero si el equipo sirve y si el viento es seguro, el programa descarta cualquier peligro antes de fijarse en la altura del avión. Usar estas condiciones en un orden lógico permite dar una respuesta clara, ya sea cancelando el salto, aprobándolo normalmente o pidiendo precaución en alturas bajas, lo que hace que el sistema sea muy confiable para tomar decisiones.