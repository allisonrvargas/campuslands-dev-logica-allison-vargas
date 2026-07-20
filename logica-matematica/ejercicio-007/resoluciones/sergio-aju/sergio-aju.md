# Plantilla de solucion

## Autor: 

Sergio Ajù

## Analisis

- **Entrada:** Un arreglo de números (`participantes`), un número para `bono` y un número para `penalizacion`.
- **Proceso:** Sumar todos los elementos del arreglo, sumar el bono al resultado y restar la penalización. Luego, asignar una categoría según el puntaje total.
- **Salida:** Un objeto con el `puntaje_final`, la `clasificacion` asignada y una `explicacion` breve.

## Reglas identificadas

1. **Sumatoria:** El puntaje base es la suma total de los elementos en el arreglo de participantes.
2. **Ajustes:** Se debe sumar el bono y restar la penalización al puntaje base.
3. **Clasificación:** - Puntaje > 50: "profesional"
   - Puntaje entre 20 y 50: "competitivo"
   - Puntaje < 20: "principiante"

## Pruebas

### Caso normal

**Entrada:**
```javascript
participantes: [12, 18, 25, 30], bono: 8, penalizacion: 3