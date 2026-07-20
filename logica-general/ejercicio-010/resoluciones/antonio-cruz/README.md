# Ejercicio 010 - Lectura de instrucciones

## Analisis

### Entrada

* Un arreglo con las instrucciones del viaje.

### Proceso

Se verifica que existan instrucciones.

Si las hay, se recorren una por una respetando el orden en que aparecen.

Cada paso se muestra numerado para indicar la secuencia correcta.

### Salida

Se muestran todas las instrucciones del itinerario y un mensaje indicando que el recorrido fue completado.

---

## Reglas identificadas

* Las instrucciones deben seguirse en el mismo orden.
* Si no existen instrucciones, se informa al usuario.
* Cada paso se muestra numerado.

---

## Como ejecutar

1. Abrir la carpeta del ejercicio.
2. Ejecutar:

```bash
node eduardo-cruz.js
```

---

## Casos de prueba

### Caso normal

**Entrada**

```javascript
[
    "Llegar al aeropuerto",
    "Abordar el transporte",
    "Llegar al hotel"
]
```

**Resultado esperado**

```text
1. Llegar al aeropuerto
2. Abordar el transporte
3. Llegar al hotel

Itinerario completado.
```

### Caso borde

**Entrada**

```javascript
[]
```

**Resultado esperado**

```text
No hay instrucciones disponibles.
```

---

## Explicacion final

La solucion funciona porque respeta el orden de las instrucciones sin modificarlas. Primero valida que existan datos y luego recorre el arreglo mostrando cada paso en la secuencia correcta.
