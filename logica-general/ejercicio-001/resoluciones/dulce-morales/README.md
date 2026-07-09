# Logica general 001 - clasificacion por reglas


## Analisis


- **Entrada:** Una serie de restricciones o reglas que tengan un valor de prioridad y la sancion a realizar dependiendo el caso que seran analizadas por el sistema del juego.
- **Proceso:** Segun la prioridad de cada una de las reglas es el orden en que se revisaran y el que se ejecutaran las sanciones a los jugadores que hayan incumplido las normas.
- **Salida:** Se mostrara el nombre del jugador al que se le ha aplicado la regla, la prioridad y la sancion que se le aplico.


## Reglas identificadas


1. Debe de llevar reglas.
2. Cada regla debe de llevar un nivel de prioridad.
3. Cada regla segun su nivel de prioridad debe de llevar una sancion.


## Pruebas


### Caso normal


**Entrada:** 
*   **Jugador:** "EspectroGamer"
*   **Reportes acumulados:** `["Toxicidad en chat", "Uso de Hacks", "Abandono de partida (AFK)"]`
*   **Regla activa:** Priorizar "Uso de Hacks" (Prioridad: Alta)


**Resultado esperado:**
*   **Jugador afectado:** "EspectroGamer"
*   **Prioridad detectada:** Alta
*   **Sanción aplicada:** Ban inmediato del servidor y baneo de IP.


### Caso borde


**Entrada:**
*   **Jugador:** "Xz_Biker_zX"
*   **Reportes acumulados:** `[]` (Lista de reportes vacía / Jugador limpio)
*   **Regla activa:** Priorizar "Uso de Hacks"


**Resultado esperado:**
*   **Jugador afectado:** "Xz_Biker_zX"
*   **Prioridad detectada:** Ninguna / No aplica
*   **Sanción aplicada:** Ninguna. El sistema valida que no hay infracciones y mantiene la cuenta en estado óptimo.


## Explicacion final


Esta solución funciona porque separa claramente los datos de entrada del proceso de evaluación. En lugar de aplicar sanciones de manera aleatoria, el sistema barre la lista de reportes del jugador buscando coincidencias con las reglas de negocio predefinidas. Al usar condicionales lógicos estructurados, el código es capaz de identificar la infracción más grave (caso normal) y proteger el flujo del programa si los datos vienen vacíos o sin infracciones (caso borde), garantizando que el juego sea justo y automatizado.


## Sugerencia


Convierte cada regla del problema en una condicion clara antes de programar.
