# Ejercicio 032 - Probabilidad Básica en Ping-Pong

## Autor: 

Sergio Ajú

## Analisis

- **Entrada**: 
  - `efectividadJugador`: Número (0-100) representando el % de éxito por punto.
  - `puntosParaGanar`: Entero, cantidad de puntos requeridos para el set.
- **Proceso**: 
  - Convertir la efectividad a probabilidad decimal.
  - Aplicar la fórmula de eventos independientes elevados a la cantidad de puntos necesarios.
- **Salida**: 
  - Objeto con el porcentaje resultante, una etiqueta de probabilidad y la explicación del cálculo.

## Reglas identificadas

1. **Independencia**: Cada punto jugado se considera un evento independiente.
2. **Cálculo de probabilidad**: Se utiliza la potencia `p^n` donde `p` es la probabilidad individual y `n` el número de puntos.
3. **Validación**: La efectividad debe estar en el rango [0, 100].

## Pruebas

### Caso normal

**Entrada**: 
```javascript
efectividadJugador: 80, puntosParaGanar: 11