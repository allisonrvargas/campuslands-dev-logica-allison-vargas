# Plantilla de solucion

## Autor

Sergio Ajù

## Analisis

- **Entrada:** Coordenadas de inicio $(x1, y1)$ y coordenadas del punto de aterrizaje $(x2, y2)$.
- **Proceso:** Aplicar la fórmula de la distancia euclidiana $\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$ para determinar la separación entre los puntos.
- **Salida:** Un objeto con la `distancia` calculada, un mensaje de `estado` según la precisión y una `explicacion`.

## Reglas identificadas

1. **Precisión:** Si la distancia es $\leq 5$ unidades, es un aterrizaje perfecto.
2. **Seguridad:** Si la distancia está entre $5.01$ y $20$, el aterrizaje es seguro pero no óptimo.
3. **Emergencia:** Si la distancia es $> 20$, el paracaidista está fuera de curso.

## Pruebas

### Caso normal

**Entrada:**
```javascript
x1: 0, y1: 0, x2: 3, y2: 4