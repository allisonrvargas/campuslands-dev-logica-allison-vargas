# Plantilla de solucion

## Analisis

- **Entrada:** Un objeto (`rendimientoEquipo`) con los datos del club de videojuegos: el nombre del equipo, la puntuación de la fase regular (`puntosObtenidos`) y el nivel de asistencia obligatoria (`porcentajePuntualidad`).
- **Proceso:** Validar que la información llegue correctamente. Luego, verificar de forma prioritaria la regla de conducta y puntualidad. Si se cumple, evaluar el rango de puntos para definir su posición en las llaves del evento.
- **Salida:** Un objeto que detalla el estado del proceso, la decisión final de la organización respecto a su fase ("Playoffs", "Lower Bracket" o "Eliminado") y la justificación técnica.

## Reglas identificadas

1. **Filtro de Disciplina:** Si un equipo tiene un porcentaje de puntualidad inferior al 80%, es descalificado automáticamente del torneo sin importar cuántas partidas haya ganado.
2. **Criterio de Élite (Playoffs):** Equipos con 15 puntos o más consiguen un pase directo a la llave principal de ganadores.
3. **Criterio de Permanencia (Repechaje):** Equipos que sumen entre 9 y 14 puntos caen a la zona de repechaje, mientras que los que tengan menos de 9 puntos se despiden del torneo.

## Pruebas

### Caso normal

Entrada:
```javascript
const rendimientoEquipo = {
  nombre: "Infinity Gaming",
  puntosObtenidos: 18,
  porcentajePuntualidad: 95
};
Resultado esperado:
JSON
{
  "estado": "Procesado correctamente",
  "decision": "Clasificado a Playoffs (Upper Bracket)",
  "motivo": "Rendimiento alto. Puntos suficientes para pelear el campeonato principal. (Puntos: 18, Puntualidad: 95%)."
}
Caso borde
Entrada:

JavaScript
const rendimientoEquipo = {
  nombre: "Alpha Squad",
  puntosObtenidos: 16,
  porcentajePuntualidad: 75
};
Resultado esperado
JSON
{
  "estado": "Sancionado",
  "decision": "Eliminado por reglamento",
  "motivo": "El equipo 'Alpha Squad' no cumple con el mínimo de puntualidad requerido (Posee: 75%)."
}
Explicacion final
La solución funciona muy bien porque define el destino de los equipos del torneo de eSports aplicando las normas de competencia de manera rigurosa. Al evaluar primero el comportamiento y la puntualidad, el programa saca de la competencia a quienes retrasan el evento antes de mirar la tabla de posiciones. Para los equipos responsables, revisa sus puntos de forma ordenada, asignándoles su lugar en la llave principal, en el repechaje o la eliminación directa, logrando una gestión transparente y justa para el torneo.