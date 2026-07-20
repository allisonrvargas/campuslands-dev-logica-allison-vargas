# Plantilla de solucion

## Analisis

- **Entrada:** Un objeto (`estadisticasEquipo`) que incluye el nombre del club, los partidos disputados (`partidosJugados`), el puntaje acumulado (`puntos`) y las anotaciones realizadas (`golesFavor`).
- **Proceso:** Comprobar la existencia del objeto. Luego, verificar mediante filtros lógicos que ningún valor sea menor que cero y realizar un cálculo matemático para asegurar que los puntos coincidan con los partidos jugados.
- **Salida:** Un objeto con el veredicto de la auditoría ("Aprobado", "Datos Corruptos" o "Datos Incompletos"), el tipo de error hallado y una descripción clara del fallo.

## Reglas identificadas

1. **Filtro de Valores Reales:** No se permite que los partidos, puntos o goles tengan valores negativos, ya que rompería la lógica del torneo.
2. **Límite Matemático de Puntos:** Como cada juego ganado otorga un máximo de 3 puntos, el puntaje total acumulado jamás puede superar la multiplicación de los partidos jugados por tres.
3. **Identificación Obligatoria:** Si el registro viene sin el nombre del equipo o está en blanco, el sistema rechaza la subida por falta de datos de origen.

## Pruebas

### Caso normal

Entrada:
```javascript
const estadisticasEquipo = {
  nombre: "Los de Siempre FC",
  partidosJugados: 5,
  puntos: 12,
  golesFavor: 18
};
Resultado esperado:
JSON
{
  "estado": "Aprobado",
  "motivo": "Los datos del equipo 'Los de Siempre FC' son coherentes y están listos para actualizar la tabla del ranking."
}
Caso borde
Entrada:

JavaScript
const estadisticasEquipo = {
  nombre: "Fútsal Express",
  partidosJugados: 2,
  puntos: 10,
  golesFavor: 5
};
Resultado esperado
JSON
{
  "estado": "Datos Corruptos",
  "errorDetectado": "Incoherencia matemática",
  "motivo": "Un equipo con 2 partidos jugados no puede acumular 10 puntos (Máximo posible: 6)."
}
Explicacion final
La solución funciona muy bien porque actúa como un filtro de seguridad que limpia las estadísticas del torneo antes de publicarlas. Al revisar que ningún número sea negativo y hacer una multiplicación rápida para ver si los puntos tienen sentido con los juegos disputados, el programa atrapa cualquier error humano de digitación. Esto evita que la tabla general de posiciones falle con información falsa, garantizando un ranking de fútbol sala transparente y sin equivocaciones en los puntos.