# Ejercicio 018: Normalización de Puntajes - Soldadura

**Camper:** Antonio Canux

## Analisis

- Entrada: Tres valores numéricos medidos en Megapascals (MPa). `resistenciaMedida` (el aguante real de la pieza), `resistenciaMinima` (el umbral inferior para que pase la prueba) y `resistenciaMaxima` (el límite teórico superior).
- Proceso: Verificar que el rango ingresado sea válido (`max > min`). Ajustar el valor medido por si se sale de los límites (asignando 0 si es menor al mínimo, o 100 si es mayor al máximo). Si está dentro del rango, aplicar la fórmula de Escalamiento Min-Max para trasladar ese valor absoluto a una escala relativa de 0 a 100. Finalmente, asignar una categoría de calidad según el puntaje obtenido.
- Salida: Un objeto que contiene el `puntaje_normalizado` (número), una `clasificacion` (texto) y la `explicacion` del resultado.

## Reglas identificadas

1. **Fórmula de Normalización (Min-Max Scaling):** Se utiliza para proyectar un número dentro de una nueva escala (en este caso porcentual). La fórmula es:
   $P_n = \frac{V - V_{min}}{V_{max} - V_{min}} \times 100$
2. **Restricción de Límites (Clamping):** Si el valor medido está por debajo del rango mínimo, el puntaje es forzado a **0**. Si supera el máximo teórico, el puntaje se corona en **100**. Esto evita obtener porcentajes negativos o superiores al 100%.
3. **Escalas de Certificación:**
   - Puntaje $\ge 90$: "soldadura certificada"
   - Puntaje $\ge 60$ y $< 90$: "soldadura aceptable"
   - Puntaje $< 60$: "soldadura defectuosa"

## Pruebas

### Caso normal

Entrada:
- resistenciaMedida: `450`
- resistenciaMinima: `300`
- resistenciaMaxima: `500`

Resultado esperado:
- puntaje_normalizado: `75` (Fórmula: (450 - 300) / (500 - 300) = 150 / 200 = 0.75 * 100 = 75)
- clasificacion: `"soldadura aceptable"`
- explicacion: `"Con una resistencia de 450 MPa en un rango de 300-500 MPa, el puntaje escalado es 75/100."`

### Caso borde

Entrada:
- resistenciaMedida: `250`
- resistenciaMinima: `300`
- resistenciaMaxima: `500`

Resultado esperado:
- puntaje_normalizado: `0` (Se activa la restricción por estar debajo del mínimo).
- clasificacion: `"soldadura defectuosa"`
- explicacion: `"Con una resistencia de 250 MPa en un rango de 300-500 MPa, el puntaje escalado es 0/100."`

## Explicacion final

La solución incorpora un concepto vital en ciencia de datos y evaluación técnica: el escalamiento (Min-Max Scaling). Esta técnica permite que métricas abstractas o difíciles de leer (como la presión en Megapascals) se conviertan en una nota estandarizada (0-100) que cualquier instructor puede entender. Al aplicar la técnica de "clamping" (condicionales para frenar valores fuera del rango), blindamos la función de devolver puntajes negativos o mayores a cien, garantizando integridad en los sistemas de calificación del taller técnico.