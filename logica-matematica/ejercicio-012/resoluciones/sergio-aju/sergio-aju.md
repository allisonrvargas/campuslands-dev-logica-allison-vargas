# Plantilla de solucion

## Autor:

Sergio Ajù

## Analisis

- **Entrada:** `exitos` (cantidad de puntos ganados) y `fallos` (cantidad de intentos perdidos).
- **Proceso:** Sumar ambos valores para obtener el total de intentos y aplicar la fórmula de probabilidad: $P = (\frac{exitos}{total}) * 100$.
- **Salida:** Un objeto con el porcentaje de éxito, una clasificación según el rendimiento y una explicación.

## Reglas identificadas

1. **Cálculo de Total:** El espacio muestral total es la suma de `exitos + fallos`.
2. **Cálculo de Probabilidad:** El porcentaje se obtiene dividiendo éxitos entre el total.
3. **Clasificación:** - >= 70%: "Profesional"
   - 40% - 69%: "Intermedio"
   - < 40%: "Principiante"

## Pruebas

### Caso normal

**Entrada:**
```javascript
exitos: 15, fallos: 5