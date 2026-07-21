# Sistema de Clasificación Anti-Trampas - Call of Duty

## 1. Contexto y Reglas de Negocio
Este módulo procesa los reportes de usuarios en partidas de Call of Duty para mitigar el impacto de jugadores disruptivos en el entorno competitivo.

* **Entradas:** 
  * `listaReportes`: Colección de datos con el estado de los jugadores evaluados (`"limpio"`, `"sospechoso"`, `"trampa_confirmada"`).
  * `tipoPartida`: Estado que define la importancia de la sesión (`"publica"`, `"clasificatoria"`, `"torneo_oficial"`).
* **Reglas de Negocio:**
  1. Si la `listaReportes` está vacía, no se realiza ninguna acción.
  2. Si contiene una `"trampa_confirmada"` y el `tipoPartida` es `"torneo_oficial"`, el sistema debe priorizar la expulsión inmediata y pausar la partida.
  3. Para cualquier otra combinación de reportes con datos, se mandan a revisión manual en segundo plano.

## 2. Casos de Prueba Diseñados
1. **Caso Base (Torneo bajo ataque):** `["limpio", "trampa_confirmada"]` en `"torneo_oficial"`. -> Resultado esperado: Expulsión inmediata y pausa de torneo.*
2. **Caso Normal (Partida Clasificatoria estándar):** `["sospechoso", "limpio"]` en `"clasificatoria"`. -> Resultado esperado: Enviar a revisión manual.*
3. **Caso Borde (Lista vacía / Partida limpia):** `[]` en `"publica"`. -> Resultado esperado: Ninguna acción (Lobby sin reportes).*