# Plantilla de solucion

## Autor:

Sergio Ajù

## Analisis

- **Entrada:** Un objeto donde las llaves son símbolos químicos y los valores son la cantidad de átomos.
- **Proceso:** Iterar sobre cada cantidad para validar que sean números enteros positivos, siguiendo la lógica de que un átomo es una unidad indivisible en fórmulas moleculares.
- **Salida:** Un objeto que indica si la fórmula es `valida` y una `razon` en caso de error.

## Reglas identificadas

1. **Integridad:** Los átomos no pueden ser fraccionarios (deben ser `Integer`).
2. **Existencia:** La cantidad de átomos debe ser mayor a 0 (no existen cantidades negativas ni nulas en la estructura).
3. **Contenido:** La fórmula debe contener al menos un elemento químico.

## Pruebas

### Caso normal

**Entrada:**
```javascript
{ H: 2, O: 1 }