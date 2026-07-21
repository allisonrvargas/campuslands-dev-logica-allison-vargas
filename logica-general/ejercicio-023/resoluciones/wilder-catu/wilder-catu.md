# Clasificación por Reglas - Torneo de Esports

## Contexto

Estás trabajando como estudiante de Campuslands en un reto de Torneo de Esports.

## Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable.

---

## 2. Identifica las entradas

Los datos que recibe la solución son:

- Nombre del equipo.
- Cantidad de victorias obtenidas durante el torneo.

### Ejemplo

```javascript
[
    {
        nombre: "Shadow Wolves",
        victorias: 12
    },
    {
        nombre: "Cyber Titans",
        victorias: 9
    }
]
```

---

## 3. Identifica las salidas

La solución debe entregar:

- Nombre del equipo.
- Cantidad de victorias.
- Clasificación asignada de acuerdo con las reglas establecidas.

### Reglas de clasificación

| Victorias | Clasificación |
|-----------:|---------------|
| 10 o más | Favorito al título |
| 8 - 9 | Clasificado a playoffs |
| 5 - 7 | En competencia |
| 3 - 4 | En riesgo de eliminación |
| Menos de 3 | Eliminado |

### Ejemplo de salida

```text
=== Clasificación del Torneo de Esports ===

Shadow Wolves | Victorias: 12 | Estado: Favorito al título
Cyber Titans | Victorias: 9 | Estado: Clasificado a playoffs
Nova Gaming | Victorias: 7 | Estado: En competencia
Phoenix Squad | Victorias: 4 | Estado: En riesgo de eliminación
Storm Legends | Victorias: 2 | Estado: Eliminado
```

---

## Resultado esperado

Clasificar automáticamente a los equipos participantes del torneo de esports según el número de victorias obtenidas, aplicando las reglas definidas para determinar su estado dentro de la competición.