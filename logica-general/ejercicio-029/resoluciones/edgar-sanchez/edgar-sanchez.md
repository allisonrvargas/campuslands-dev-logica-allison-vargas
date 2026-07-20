# Plantilla de solucion: Problema 29

## Analisis
El problema consiste en simular los estados psicológicos o niveles de tensión de la audiencia durante la reproducción de una película de miedo. En sistemas de análisis de contenido o salas de cine interactivas, la tensión del espectador cambia dinámicamente según los estímulos de la película (como silencios, música de suspenso o los llamados *Jump Scares*). El algoritmo debe simular el cambio de estado paso a paso para evitar que la audiencia sufra una sobreexposición al estrés o, por el contrario, se aburra debido a la falta de estímulos.

- Entrada: El estado inicial de tensión (texto: `"Calma"`, `"Alerta"`, `"Pánico"`), una lista de eventos secuenciales de la escena (lista de textos: `"Silencio"`, `"Música Suspenso"`, `"Jump Scare"`, `"Resolución"`) y una bandera que indica si el espectador tiene alta sensibilidad al miedo (booleano).
- Proceso:
  1. Validar que el estado inicial sea un valor reconocido por el sistema de simulación.
  2. Recorrer secuencialmente la lista de eventos para transicionar de un estado a otro según el estímulo.
  3. Si el espectador es altamente sensible, los estímulos fuertes aceleran la transición de estado de forma más drástica.
- Salida: Un objeto que indica el estado emocional final del espectador (`"Calma"`, `"Alerta"`, `"Pánico"`) y el nivel de saturación de sustos acumulado (entero).

## Reglas identificadas
1. Máquina de Transición de Estados:
   - Si el evento es `"Silencio"` o `"Música Suspenso"`: El estado sube un nivel de intensidad (`"Calma"` $\rightarrow$ `"Alerta"`, o `"Alerta"` $\rightarrow$ `"Pánico"`).
   - Si el evento es `"Jump Scare"`: El estado pasa inmediatamente a `"Pánico"`, independientemente del estado previo. Además, el contador de saturación aumenta en +1.
   - Si el evento es `"Resolución"`: La tensión disminuye de golpe regresando a `"Calma"`.
2. Factor de Espectador Sensible: Si `esSensible` es `true`, cualquier evento de `"Música Suspenso"` actúa con la fuerza de un `"Jump Scare"`, llevando el estado directamente a `"Pánico"` y sumando +1 al contador de saturación.
3. Control de Entrada Inválida: Si el estado inicial no pertenece a los tres estados base o la lista de eventos está vacía, la simulación se interrumpe retornando un estado de `"Error"`.

## Pruebas

### Caso 1: Flujo estándar con transición progresiva
Entrada: estadoInicial = "Calma", eventos = ["Música Suspenso", "Jump Scare", "Resolución"], esSensible = false
Pasos: 
- "Calma" + "Música Suspenso" $\rightarrow$ "Alerta"
- "Alerta" + "Jump Scare" $\rightarrow$ "Pánico" (Saturación = 1)
- "Pánico" + "Resolución" $\rightarrow$ "Calma"
Resultado esperado: { "estadoFinal": "Calma", "saturacionSustos": 1 }

### Caso 2: Espectador sensible ante suspenso
Entrada: estadoInicial = "Calma", eventos = ["Música Suspenso"], esSensible = true
Pasos:
- "Calma" + "Música Suspenso" (Actúa como Jump Scare por sensibilidad) $\rightarrow$ "Pánico" (Saturación = 1)
Resultado esperado: { "estadoFinal": "Pánico", "saturacionSustos": 1 }

## Explicacion final
La solución funciona porque implementa una máquina de estados finitos donde las transiciones no son fijas, sino que se modifican dinámicamente mediante un factor multiplicador de vulnerabilidad (sensibilidad del usuario), permitiendo predecir la experiencia del espectador.