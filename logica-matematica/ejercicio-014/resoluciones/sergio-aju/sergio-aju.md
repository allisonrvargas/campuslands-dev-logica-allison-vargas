# Plantilla de solucion

## Autor:

Sergio Ajù

## Analisis

- **Entrada:** `base` (cm), `altura` (cm), `precioPorCm2` (costo tinta), `precioPorCmLineal` (costo trazo).
- **Proceso:** Calcular el área del rectángulo ($base \times altura$) para la tinta y el perímetro ($2 \times (base + altura)$) para las líneas. Sumar ambos resultados multiplicados por sus respectivas tarifas.
- **Salida:** Un objeto con el área, el perímetro, el costo total y una explicación.

## Reglas identificadas

1. **Cálculo de Área:** Define la cantidad de relleno (tinta) necesario.
2. **Cálculo de Perímetro:** Define la longitud total del contorno (tiempo de aguja).
3. **Costo Final:** Es la suma ponderada del área y el perímetro según las tarifas del artista.

## Pruebas

### Caso normal

**Entrada:**
```javascript
base: 10, altura: 5, precioPorCm2: 2.5, precioPorCmLineal: 1.5