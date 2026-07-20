# Plantilla de solucion

## Autor:

Sergio Ajù

## Analisis

- **Entrada:** `inversionInicial` (dinero base), `tasaDiaria` (factor de crecimiento decimal) y `dias` (duración).
- **Proceso:** Realizar una simulación mediante un ciclo que actualiza el capital acumulado día a día aplicando la tasa de crecimiento.
- **Salida:** Un objeto con los `dias_simulados`, la `ganancia_final` total y una `explicacion`.

## Reglas identificadas

1. **Interés Compuesto:** Cada día, la ganancia se calcula sobre el total acumulado del día anterior.
2. **Crecimiento:** Si no hay días transcurridos, la ganancia es igual a la inversión inicial.
3. **Validación:** No se permiten entradas negativas, ya que no tienen sentido físico en la simulación de un puesto de comida.

## Pruebas

### Caso normal

**Entrada:**
```javascript
inversionInicial: 100, tasaDiaria: 0.05, dias: 10