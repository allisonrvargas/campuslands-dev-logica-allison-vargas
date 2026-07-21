# Ejercicio 013 - Resolucion de casos

## Analisis

### Entrada

* El estado del clima.
* Si el equipo esta completo.
* Si hay un instructor disponible.

### Proceso

Se revisan las condiciones del salto una por una.

Si alguna no se cumple, se devuelve el motivo por el que el salto no puede realizarse.

Si todas las condiciones son correctas, el salto es aprobado.

### Salida

Un mensaje indicando si el salto puede realizarse o la razon por la que fue cancelado.

---

## Reglas identificadas

* El clima debe ser soleado.
* El equipo debe estar completo.
* Debe existir un instructor disponible.
* Si todas las reglas se cumplen, el salto puede realizarse.

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
    clima: "soleado",
    equipoCompleto: true,
    instructorDisponible: true
}
```

**Resultado esperado**

```text
El salto puede realizarse.
```

### Caso borde

**Entrada**

```javascript
{
    clima: "lluvioso",
    equipoCompleto: true,
    instructorDisponible: true
}
```

**Resultado esperado**

```text
El salto fue cancelado por el clima.
```

---

## Explicacion final

La solucion funciona porque evalua cada condicion del salto y resuelve el caso segun las reglas establecidas. Si alguna condicion falla, informa el motivo. Si todas se cumplen, el salto puede realizarse.
