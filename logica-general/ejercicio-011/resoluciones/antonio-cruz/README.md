# Ejercicio 011 - Organizacion de listas

## Analisis

### Entrada

* Un arreglo con participantes.
* Cada participante tiene un nombre y una categoria.

### Proceso

Se revisa cada participante.

Dependiendo de su categoria, se agrega a la lista correspondiente.

Al final se obtiene una organizacion por grupos.

### Salida

Un objeto con los participantes separados por categoria.

---

## Reglas identificadas

* Los principiantes van al grupo de principiantes.
* Los avanzados van al grupo de avanzados.
* Si no existen participantes, se informa al usuario.

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
    { nombre: "Pedro", categoria: "principiante" },
    { nombre: "Sofia", categoria: "avanzado" }
]
```

**Resultado esperado**

```text
{
    principiantes: ["Pedro"],
    avanzados: ["Sofia"]
}
```

### Caso borde

**Entrada**

```javascript
[]
```

**Resultado esperado**

```text
No hay participantes registrados.
```

---

## Explicacion final

La solucion funciona porque recorre la lista una sola vez y coloca a cada participante en el grupo que le corresponde. De esta manera la informacion queda organizada segun la categoria de cada persona.
