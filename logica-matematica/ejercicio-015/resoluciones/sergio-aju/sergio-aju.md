# Plantilla de solucion

## Autor:

Sergio Ajù

## Analisis

- **Entrada:** `distanciaTotal` (total de pixeles a trazar) y `velocidadTrazo` (pixeles por minuto).
- **Proceso:** Dividir la distancia total por la velocidad para obtener el tiempo requerido y clasificar la complejidad del trabajo.
- **Salida:** Un objeto con el `tiempo_estimado`, la `complejidad` del dibujo y una `explicacion`.

## Reglas identificadas

1. **Fórmula:** El tiempo se calcula como $T = \frac{D}{V}$.
2. **Validación:** Si la velocidad es 0 o negativa, el proceso es físicamente imposible (error).
3. **Clasificación:** - > 120 min: "Obra Maestra"
   - 30 - 120 min: "Estándar"
   - < 30 min: "Boceto Rápido"

## Pruebas

### Caso normal

**Entrada:**
```javascript
distanciaTotal: 500, velocidadTrazo: 10