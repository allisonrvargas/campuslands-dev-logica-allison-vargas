# Plantilla de solución

## Análisis

### Entrada

- Una lista de películas.
- Título de la película.
- Duración en minutos.

### Proceso

1. Recorrer la lista de películas.
2. Aplicar el operador módulo (`%`) para verificar la divisibilidad entre 15.
3. Verificar si la duración es un número par o impar.
4. Mostrar los resultados.

### Salida

- Título de la película.
- Duración.
- Resultado de la divisibilidad.
- Clasificación como número par o impar.

---

## Reglas identificadas

1. La duración debe ser un número entero positivo.
2. Un número es divisible entre **15** si el residuo de la división es **0**.
3. Un número es **par** si al dividirlo entre **2** el residuo es **0**.
4. Si el residuo es diferente de **0**, el número no es divisible o es impar, según el caso.

---

## Pruebas

### Caso normal

**Entrada**

```javascript
{
    titulo: "El Bosque Maldito",
    duracion: 120
}
```

**Cálculo**

```text
120 % 15 = 0

120 % 2 = 0
```

**Resultado esperado**

```text
Película: El Bosque Maldito
Duración: 120 minutos
La duración es divisible entre 15.
La duración es un número par.
```

---

### Caso borde

**Entrada**

```javascript
{
    titulo: "Película Experimental",
    duracion: 1
}
```

**Cálculo**

```text
1 % 15 = 1

1 % 2 = 1
```

**Resultado esperado**

```text
Película: Película Experimental
Duración: 1 minuto
La duración NO es divisible entre 15.
La duración es un número impar.
```

> Este es un caso borde porque la duración es el **menor valor entero positivo posible**. El programa debe evaluar correctamente la divisibilidad y determinar que el número es impar.

---

## Explicación final

La solución funciona porque utiliza el **operador módulo (`%`)** para comprobar propiedades matemáticas de la duración de cada película. Primero verifica si la duración es divisible entre **15** y luego determina si el número es **par o impar** evaluando el residuo de la división entre **2**. Estas validaciones son útiles para clasificar datos numéricos mediante reglas matemáticas simples.

---

## Sugerencia

Cuando resuelvas ejercicios sobre **módulos y divisibilidad**, utiliza el operador `%` para obtener el residuo de una división. Si el residuo es **0**, significa que el número es divisible por ese valor. Este operador también es una herramienta muy útil para identificar números pares e impares y aplicar diferentes reglas según el resultado.