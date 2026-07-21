# Plantilla de solucion: Problema 37

## Analisis
El problema consiste en desarrollar un sistema automatizado de toma de decisiones para la asignación de servidores de juego y la aprobación de emparejamientos en un torneo internacional de esports. El software debe evaluar la infraestructura técnica disponible en función de la latencia (ping) de los equipos, el uso de herramientas antitrampas (*anti-cheat*) obligatorias y la estabilidad de la conexión. El objetivo es determinar si una partida competitiva puede dar inicio en un servidor óptimo o si debe suspenderse para proteger la integridad competitiva del evento.

- Entrada: Latencia promedio del equipo A en milisegundos (entero), latencia promedio del equipo B en milisegundos (entero), estado del sistema antitrampas para ambos equipos (booleano) y tipo de servidor seleccionado (texto: `"Local"`, `"Regional"`, `"Global"`).
- Proceso:
  1. Validar la integridad de los datos de conectividad.
  2. Verificar de forma obligatoria el cumplimiento de las normativas de seguridad de la plataforma.
  3. Clasificar la viabilidad técnica comparando el ping cruzado con los umbrales máximos permitidos para cada categoría de servidor de juego.
- Salida: Un objeto que indica la decisión de la mesa arbitral ("Partida Autorizada", "Cambio de Servidor Requerido" o "Partida Suspendida").

## Reglas identificadas
1. Restricción de Seguridad Absoluta: Si el estado del sistema antitrampas es `false` (lo que significa que al menos un jugador no tiene el software activo), la partida se evalúa inmediatamente como `"Partida Suspendida"` sin importar las condiciones de red.
2. Control de Latencia por Servidores:
   - Servidor `"Local"`: La latencia de ambos equipos debe ser menor o igual a $40 \text{ ms}$. Si alguno supera este valor pero se mantiene por debajo de los $100 \text{ ms}$, la decisión cambia a `"Cambio de Servidor Requerido"`.
   - Servidor `"Regional"`: La latencia permitida se extiende hasta un máximo de $100 \text{ ms}$ para ambos conjuntos.
   - Servidor `"Global"`: Permite conexiones rezagadas de hasta $180 \text{ ms}$.
3. Criterio de Desconexión Crítica: Si la latencia de cualquiera de los dos equipos es estrictamente mayor a $180 \text{ ms}$, la partida se declara como `"Partida Suspendida"` debido a la ventaja injusta por desincronización (*desync*).

## Pruebas

### Caso 1: Servidor local óptimo con luz verde
Entrada: pingA = 25, pingB = 30, antiCheatActivo = true, servidor = "Local"
Resultado esperado: { "decision": "Partida Autorizada", "servidorFinal": "Local" }

### Caso 2: Exceso de ping en local que exige migración
Entrada: pingA = 65, pingB = 20, antiCheatActivo = true, servidor = "Local"
Resultado esperado: { "decision": "Cambio de Servidor Requerido", "servidorFinal": "Regional" }

### Caso 3: Suspensión por falta de herramientas de seguridad
Entrada: pingA = 15, pingB = 15, antiCheatActivo = false, servidor = "Local"
Resultado esperado: { "decision": "Partida Suspendida", "servidorFinal": "Ninguno" }

## Explicacion final
La solución funciona porque implementa un flujo de evaluación jerárquico. Coloca la seguridad del código como primera compuerta lógica restrictiva y posteriormente aplica la segmentación de infraestructura para asegurar condiciones de juego equitativas.