# Ejercicio 005 - Ordenamiento de prioridades

## Analisis

### Entrada

* Un arreglo con las motos que ingresan al taller.
* Cada moto tiene un nombre y un nivel de prioridad.

### Proceso

Se revisa si el arreglo contiene datos.

Si existen reparaciones, se ordenan de menor a mayor segun el valor de prioridad.

Una prioridad con el numero 1 significa que debe atenderse primero.

### Salida

Un arreglo ordenado segun la prioridad de reparacion.

---

## Reglas identificadas

* Prioridad 1 se atiende primero.
* Entre mas grande sea el numero, menor es la prioridad.
* Si no hay motos registradas, se devuelve un arreglo vacio.

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
[
    { moto: "Honda XR", prioridad: 3 },
    { moto: "Yamaha FZ", prioridad: 1 },
    { moto: "Suzuki GN", prioridad: 2 }
]
```

**Resultado esperado**

```text
[
    { moto: "Yamaha FZ", prioridad: 1 },
    { moto: "Suzuki GN", prioridad: 2 },
    { moto: "Honda XR", prioridad: 3 }
]
```

---

### Caso borde

**Entrada**

```javascript
[]
```

**Resultado esperado**

```text
[]
```

---

## Explicacion final

La solucion funciona porque primero valida que exista informacion y despues ordena las reparaciones usando el nivel de prioridad. Asi siempre se obtiene el orden correcto para atender las motos del taller.
