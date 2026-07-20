# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo de números (`votos`), un número `multiplicador` y un número `ajuste`.
- **Proceso:** Se calcula el promedio de los votos, se multiplica por el factor dado, se suma el ajuste y se redondea el resultado.
- **Salida:** Un objeto que contiene el `puntaje_final`, la `clasificacion` de la película y una breve `explicacion`.

## Reglas identificadas

1. **Promedio:** El valor base es la media aritmética de los votos recibidos.
2. **Transformación:** El resultado es `(promedio * multiplicador) + ajuste`.
3. **Clasificación:** - Puntaje >= 80: "culto"
   - Puntaje entre 50 y 79: "popular"
   - Puntaje < 50: "experimental"

## Pruebas

### Caso normal

**Entrada:**
```javascript
votos: [7, 9, 8, 10], multiplicador: 5, ajuste: 2