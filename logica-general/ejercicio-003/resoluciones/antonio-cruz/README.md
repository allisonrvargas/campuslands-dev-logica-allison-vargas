# Ejercicio 003 - Toma de decisiones

## Analisis

### Entrada

* Un arreglo con el estado de las partidas.
* El nivel de prioridad.

### Proceso

Primero se valida si existen partidas.

Despues se revisa si la prioridad es alta y hay alguna partida perdida. En ese caso se recomienda analizar esa derrota primero.

Si no hay derrotas importantes, se verifica si existen partidas pendientes.

Si ninguna regla anterior se cumple, el jugador puede continuar entrenando.

### Salida

Se muestra un objeto con:

* accion
* motivo

---

## Reglas identificadas

* Si no hay partidas, no se realiza ninguna accion.
* Si la prioridad es alta y existe una partida perdida, esa tiene prioridad.
* Si hay partidas pendientes, se deben jugar.
* Si todo esta completado, se recomienda continuar entrenando.

---

## Como ejecutar

1. Abrir la carpeta del ejercicio.
2. Ejecutar el archivo con:

```bash
node eduardo-cruz.js
```

---

## Casos de prueba

### Caso normal

**Entrada**

```javascript
["ganada", "perdida", "pendiente"]
prioridad = "alta"
```

**Resultado esperado**

```text
accion: analizar partida perdida
```

---

### Caso borde

**Entrada**

```javascript
[]
prioridad = "alta"
```

**Resultado esperado**

```text
accion: sin accion
```

---

## Explicacion final

La solucion funciona porque primero valida los datos de entrada y luego aplica las reglas una por una en el orden de prioridad. De esa forma siempre devuelve una accion coherente segun el estado de las partidas.
