# Clasificación por Reglas - Ranking de Fútbol Sala

## Contexto

Estás trabajando como estudiante de Campuslands en un reto de Ranking de Fútbol Sala.

## Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable.

---

## 2. Identifica las entradas

Los datos que recibe la solución son:

- Nombre del equipo.
- Cantidad de puntos obtenidos en la liga.

### Ejemplo

```javascript
[
    {
        nombre: "Tigres FC",
        puntos: 38
    },
    {
        nombre: "Leones FS",
        puntos: 31
    }
]
```

---

## 3. Identifica las salidas

La solución debe entregar:

- Nombre del equipo.
- Cantidad de puntos.
- Clasificación obtenida según las reglas establecidas.

### Reglas de clasificación

| Puntos | Clasificación |
|---------|---------------|
| 35 o más | Candidato al campeonato |
| 28 - 34 | Zona de clasificación |
| 20 - 27 | Media tabla |
| 12 - 19 | Zona de riesgo |
| Menos de 12 | Último lugar |

### Ejemplo de salida

```text
=== Clasificación de Equipos de Fútbol Sala ===

Tigres FC | 38 puntos | Estado: Candidato al campeonato
Leones FS | 31 puntos | Estado: Zona de clasificación
Águilas United | 25 puntos | Estado: Media tabla
Halcones | 18 puntos | Estado: Zona de riesgo
Panteras | 10 puntos | Estado: Último lugar
```

---

## Resultado esperado

Clasificar automáticamente a cada equipo de fútbol sala según la cantidad de puntos obtenidos durante la competición, permitiendo conocer su posición competitiva de acuerdo con las reglas definidas.