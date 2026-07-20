# Solucion - Ejercicio 031 (kickboxing)

## Analisis
- **Entrada:** arreglo de strings `"bloqueado" | "pendiente" | "aprobado"`.
- **Proceso:** ordenar por prioridad de riesgo.
- **Salida:** `{ accion, motivo }` indicando que revisar primero.

## Reglas
1. `bloqueado` se revisa primero (riesgo).
2. Si no hay bloqueados, se revisa `pendiente`.
3. `aprobado` es lo ultimo.
4. Lista vacia -> `sin accion`, sin error.
5. Estado desconocido -> error explicito, no se ignora.

## Ejecutar
```bash
node maria-montepeque.js
```

## Pruebas

| Caso | Entrada | Resultado |
|---|---|---|
| Normal | `['aprobado','pendiente','bloqueado']` | `revisar bloqueado` |
| Borde: vacia | `[]` | `sin accion` |
| Borde: sin bloqueados | `['aprobado','pendiente']` | `revisar pendiente` |

Verificado con `node estudiante-demo.js`; la salida coincide con lo esperado.

## Explicacion
Cada estado tiene un numero de prioridad (`bloqueado=0`, `pendiente=1`, `aprobado=2`) y se ordena el arreglo por ese numero, en vez de encadenar `if/else`. Agregar un estado nuevo solo implica sumar una entrada al objeto `PRIORIDAD`.
