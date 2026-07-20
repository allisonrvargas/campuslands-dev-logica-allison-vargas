# Organización de Listas - Paracaidismo

## Contexto

Estás trabajando como estudiante de Campuslands en un reto de Paracaidismo.

## Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable.

---

## 2. Identifica las entradas

Los datos que recibe la solución son:

- Nombre del participante.
- Cantidad de saltos realizados.
- Puntaje obtenido durante la competencia.

### Ejemplo

```javascript
[
    {
        nombre: "Carlos",
        saltos: 45,
        puntaje: 92
    },
    {
        nombre: "María",
        saltos: 60,
        puntaje: 98
    }
]
```

---

## 3. Identifica las salidas

La solución debe entregar:

- Un ranking de los participantes.
- Los participantes organizados de mayor a menor según el puntaje obtenido.
- La posición de cada participante dentro de la clasificación.

### Ejemplo de salida

```text
=== Ranking de Participantes de Paracaidismo ===

1. María | Puntaje: 98 | Saltos: 60
2. Sofía | Puntaje: 95 | Saltos: 52
3. Carlos | Puntaje: 92 | Saltos: 45
4. Valeria | Puntaje: 89 | Saltos: 41
5. Andrés | Puntaje: 85 | Saltos: 38
```

---

## Regla aplicada

La lista de participantes se organiza en orden descendente utilizando el puntaje obtenido como criterio principal de clasificación.

---

## Resultado esperado

Obtener una clasificación ordenada de los participantes de paracaidismo según su desempeño en la competencia, permitiendo identificar fácilmente a los mejores puntajes.