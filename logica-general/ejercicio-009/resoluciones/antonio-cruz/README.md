# Ejercicio 009 - Simulacion de estados

## Analisis

### Entrada

* Un objeto que representa una pelicula.
* La pelicula tiene un estado actual.

### Proceso

Se revisa el estado de la pelicula.

Dependiendo del estado actual, se cambia al siguiente.

El flujo es:

* pendiente
* reproduciendo
* finalizada

### Salida

El nuevo estado de la pelicula o un mensaje indicando que no puede cambiar.

---

## Reglas identificadas

* Si esta pendiente, pasa a reproduciendo.
* Si esta reproduciendo, pasa a finalizada.
* Si ya finalizo, no cambia de estado.
* Si el estado no es valido, se muestra un mensaje.

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
    titulo: "La Monja",
    estado: "pendiente"
}
```

**Resultado esperado**

```text
{
    titulo: "La Monja",
    estado: "reproduciendo"
}
```

### Caso borde

**Entrada**

```javascript
{}
```

**Resultado esperado**

```text
Estado no valido.
```

---

## Explicacion final

La solucion funciona porque revisa el estado actual de la pelicula y aplica una transicion al siguiente estado definido. De esta forma se simula un proceso donde un mismo elemento cambia conforme avanza la ejecucion.
