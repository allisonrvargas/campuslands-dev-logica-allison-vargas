# Ordenamiento de Prioridades - Taller Mecánico

## Descripción
Sistema de gestión de colas para taller mecánico que organiza las reparaciones basándose en urgencia (gravedad) y eficiencia operativa (tiempo de trabajo).

## Reglas Aplicadas
1. Gravedad 3 > 2 > 1.
2. En igualdad de gravedad, menor tiempo > mayor tiempo.

## Cómo ejecutar
Ejecuta el archivo `nombre-apellido.js`. La función `ordenarTaller` recibe un array de objetos con `gravedad` y `tiempoEstimado`.

## Casos Probados
- **Normal:** Mezcla de gravedades donde gana la de mayor urgencia.
- **Empate:** Mismo nivel de gravedad resuelto mediante el criterio de tiempo menor.