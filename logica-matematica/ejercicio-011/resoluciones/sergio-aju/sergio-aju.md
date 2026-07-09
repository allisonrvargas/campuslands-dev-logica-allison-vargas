# Plantilla de solucion

## Autor:

Sergio Ajù

## Analisis

- **Entrada:** `peleadores` (un número entero que representa la cantidad de participantes).
- **Proceso:** Aplicar la fórmula combinatoria $C(n, 2) = \frac{n(n-1)}{2}$, que permite calcular todas las parejas posibles sin importar el orden.
- **Salida:** Un objeto con el `total_enfrentamientos` y una `explicacion`.

## Reglas identificadas

1. **Condición mínima:** Si hay menos de 2 peleadores, el número de enfrentamientos es 0.
2. **Cálculo de parejas:** Cada peleador se enfrenta a todos los demás una sola vez. La fórmula matemática asegura que no se repitan parejas (ej. A vs B es lo mismo que B vs A).

## Pruebas

### Caso normal

**Entrada:**
```javascript
peleadores: 4