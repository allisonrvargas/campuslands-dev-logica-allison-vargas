# Búsqueda de Elementos - Autos Hiperdeportivos

## Contexto

Estás trabajando como estudiante de Campuslands en un reto de Autos Hiperdeportivos.

## Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable.

---

## 2. Identifica las entradas

Los datos que recibe la solución son:

- Una lista de autos hiperdeportivos.
- Marca del automóvil.
- Modelo del automóvil.
- Velocidad máxima.
- El nombre del modelo que se desea buscar.

### Ejemplo

```javascript
const modeloBuscado = "Nevera";
```

```javascript
[
    {
        marca: "Rimac",
        modelo: "Nevera",
        velocidadMaxima: 412
    }
]
```

---

## 3. Identifica las salidas

La solución debe entregar:

- Si el automóvil fue encontrado o no.
- Marca del automóvil.
- Modelo del automóvil.
- Velocidad máxima del automóvil encontrado.

### Ejemplo de salida

```text
=== Búsqueda de Autos Hiperdeportivos ===

Auto encontrado:
Marca: Rimac
Modelo: Nevera
Velocidad máxima: 412 km/h
```

Si el modelo no existe:

```text
=== Búsqueda de Autos Hiperdeportivos ===

No se encontró el modelo solicitado.
```

---

## Regla aplicada

La solución utiliza el método `find()` de JavaScript para localizar el primer automóvil cuyo modelo coincida con el valor buscado.

---

## Resultado esperado

Encontrar rápidamente un automóvil hiperdeportivo dentro de una colección de datos y mostrar toda su información si existe; de lo contrario, informar que no fue encontrado.