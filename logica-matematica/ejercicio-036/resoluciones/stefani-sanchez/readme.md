# Ejercicio 036 - Presupuestos y Descuentos

## ¿Cómo pensé el problema?

Primero identifiqué que el descuento se calcula como un porcentaje del presupuesto inicial. Luego resté ese valor para obtener el total final y clasifiqué el descuento según su porcentaje.

---

## Reglas aplicadas

- El presupuesto no puede ser negativo.
- El descuento debe estar entre 0 y 100.
- El total se calcula con:

```
Total = Presupuesto - (Presupuesto × Descuento / 100)
```

### Clasificación

- 0% → Sin descuento
- 1% a 20% → Descuento bajo
- 21% a 50% → Descuento medio
- Más de 50% → Descuento alto

---

## ¿Cómo ejecutar?

1. Abrir una terminal.
2. Entrar a la carpeta del ejercicio.
3. Ejecutar:

```bash
node stefani-sanchez.js
```

---

## Casos probados

### Caso normal

Entrada:

- Presupuesto: 2500
- Descuento: 20%

Salida:

- Total: 2000
- Clasificación: Descuento bajo

### Caso borde

Entrada:

- Presupuesto: 2500
- Descuento: 120%

Salida:

- Error indicando que el porcentaje es inválido.

---

## Explicación

La solución valida los datos ingresados, calcula el descuento correspondiente y muestra el total final junto con una clasificación del descuento aplicado.