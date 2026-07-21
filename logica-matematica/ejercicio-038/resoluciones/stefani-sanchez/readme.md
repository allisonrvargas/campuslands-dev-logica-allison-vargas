# Ejercicio 038 - Normalización de Puntajes

## ¿Cómo pensé el problema?

Primero identifiqué cuál era el puntaje más alto del arreglo. Después convertí todos los puntajes a una escala de 0 a 100 utilizando una regla de proporcionalidad.

---

## Reglas aplicadas

- La lista de puntajes no puede estar vacía.
- El puntaje mayor debe ser mayor que cero.
- Fórmula utilizada:

```
Puntaje normalizado = (Puntaje / Puntaje mayor) × 100
```

- Los resultados se muestran con dos decimales.

---

## ¿Cómo ejecutar la solución?

1. Abrir una terminal.
2. Ubicarse en la carpeta del ejercicio.
3. Ejecutar:

```bash
node stefani-sanchez.js
```

---

## Casos probados

### Caso normal

Entrada:

```
[45, 70, 90, 60]
```

Salida:

```
[50, 77.78, 100, 66.67]
```

### Caso borde

Entrada:

```
[]
```

Salida:

```
Error: La lista de puntajes está vacía.
```

---

## Explicación

La solución obtiene el puntaje máximo del arreglo y utiliza ese valor como referencia para convertir todos los puntajes a una escala porcentual de 0 a 100.