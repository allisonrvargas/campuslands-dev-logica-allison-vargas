# Ejercicio 014 - Diagnostico de errores

## Analisis

### Entrada

* Un objeto con la informacion necesaria para realizar un tatuaje.
* Se verifica la tinta, la maquina y la presencia del cliente.

### Proceso

Se revisa cada condicion.

Cuando se encuentra el primer problema, se devuelve un mensaje indicando el error.

Si no existe ningun problema, el proceso puede comenzar.

### Salida

Un mensaje con el diagnostico del error o la confirmacion de que todo esta listo.

---

## Reglas identificadas

* Debe haber tinta disponible.
* La maquina debe estar encendida.
* El cliente debe estar presente.
* Si todas las condiciones se cumplen, el tatuaje puede comenzar.

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
    tintaDisponible: true,
    maquinaEncendida: true,
    clientePresente: true
}
```

**Resultado esperado**

```text
Todo esta listo para comenzar el tatuaje.
```

### Caso borde

**Entrada**

```javascript
{
    tintaDisponible: false,
    maquinaEncendida: true,
    clientePresente: true
}
```

**Resultado esperado**

```text
Error: no hay tinta disponible.
```

---

## Explicacion final

La solucion funciona porque revisa las condiciones necesarias para realizar un tatuaje y devuelve el primer problema encontrado. Si todas las validaciones son correctas, indica que el proceso puede comenzar.
