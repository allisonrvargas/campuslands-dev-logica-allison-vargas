# Plantilla de solucion

## Autor:

Sergio Ajù

## Analisis

- **Entrada:** Un arreglo `puntajes` que contiene las calificaciones de diversos proyectos de arquitectura 3D.
- **Proceso:** Calcular la media aritmética para el promedio, extraer los valores extremos (máximo y mínimo) y clasificar el rendimiento global del equipo.
- **Salida:** Un objeto con el promedio, los extremos y el estatus del ranking.

## Reglas identificadas

1. **Promedio:** Sumatoria de los puntajes dividida por la cantidad de proyectos.
2. **Identificación:** Uso de `Math.max` y `Math.min` para definir los límites del ranking.
3. **Clasificación:** - >= 85: "Ranking Elite"
   - 60 - 84: "Ranking Estandar"
   - < 60: "En Revision"

## Pruebas

### Caso normal

**Entrada:**
```javascript
puntajes: [80, 95, 70, 88]