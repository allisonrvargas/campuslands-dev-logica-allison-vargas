# Plantilla de solucion

## Autor:

Sergio Ajù

## Analisis

- **Entrada:** Un arreglo `puntajes` obtenido en las pruebas de resistencia de soldadura.
- **Proceso:** Identificar el valor mínimo y máximo del conjunto. Aplicar la fórmula de normalización $Z = (\frac{valor - min}{max - min}) \times 100$ para llevar cada valor a un rango porcentual de 0 a 100.
- **Salida:** Un objeto con los puntajes originales, los normalizados y la explicación técnica.

## Reglas identificadas

1. **Rango de Referencia:** El peor desempeño (mínimo) se convierte en 0, el mejor (máximo) en 100.
2. **Escalamiento:** Los valores intermedios se distribuyen proporcionalmente en la escala 0-100.
3. **Casos Especiales:** Si todos los soldadores tienen el mismo puntaje, se asigna 100 a todos al no haber variación.

## Pruebas

### Caso normal

**Entrada:**
```javascript
puntajes: [20, 50, 80]