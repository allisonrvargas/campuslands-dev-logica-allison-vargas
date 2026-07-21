# Ejercicio 008 - Flujos paso a paso

## Analisis

### Entrada

* Un objeto con la informacion de una pelicula.
* Se verifica si hay entradas disponibles.
* Se verifica si la sala esta disponible.
* Se verifica si el proyector esta listo.

### Proceso

Las condiciones se revisan una por una siguiendo un orden.

Si alguna falla, el proceso termina y muestra el motivo.

Si todas se cumplen, la pelicula puede comenzar.

### Salida

Un mensaje indicando si la funcion puede iniciar o cual fue el problema.

---

## Reglas identificadas

* Deben existir entradas disponibles.
* La sala debe estar disponible.
* El proyector debe estar listo.
* Si todas las condiciones se cumplen, la pelicula inicia.

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
{
    titulo: "Interstellar",
    tieneEntradas: true,
    salaDisponible: true,
    proyectorListo: true
}
```

**Resultado esperado**

```text
La pelicula puede comenzar.
```

### Caso borde

**Entrada**

```javascript
{
    titulo: "Interstellar",
    tieneEntradas: true,
    salaDisponible: false,
    proyectorListo: true
}
```

**Resultado esperado**

```text
No se puede iniciar la funcion porque la sala no esta disponible.
```

---

## Explicacion final

La solucion funciona porque sigue un flujo ordenado de validaciones. Cada paso depende del anterior y, cuando una condicion no se cumple, el proceso se detiene indicando la causa. Si todas las validaciones son correctas, la pelicula puede iniciar sin problemas.
