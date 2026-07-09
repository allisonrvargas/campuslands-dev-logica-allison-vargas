# Plantilla de solucion

## Autor:

Sergio Ajù

## Analisis

- **Entrada:** `ganados`, `empatados`, `perdidos` (números de partidos).
- **Proceso:** 1. Calcular el total de juegos.
  2. Asignar valor a los puntos (V=3, E=1, D=0).
  3. Calcular la proporción de puntos obtenidos frente al máximo posible ($TotalPartidos \times 3$).
- **Salida:** Un objeto con el porcentaje de efectividad, la categoría del equipo y la explicación.

## Reglas identificadas

1. **Puntaje total:** $Puntos = (Ganados \times 3) + (Empatados \times 1)$.
2. **Máximo posible:** El techo de puntos es $TotalPartidos \times 3$.
3. **Clasificación:** - >= 75%: "Líder"
   - 50% - 74.9%: "Competitivo"
   - < 50%: "En desarrollo"

## Pruebas

### Caso normal

**Entrada:**
```javascript
ganados: 5, empatados: 2, perdidos: 3