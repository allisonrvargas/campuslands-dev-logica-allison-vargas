# Solución Reto 003: Promedios y Medianas - Torneo de Esports
**Estudiante:** Allison Vargas  
**Entorno:** Campuslands  

## Como pensaste el problema
Para este reto ambientado en un Torneo de Esports, analicé que evaluar el rendimiento global de los equipos o participantes no puede depender de un único valor extremo. Por ello, utilicé un enfoque estadístico de tendencia central calculando el promedio aritmético de los participantes. Al consolidar esta base balanceada, procedí a añadir algebraicamente los modificadores del torneo (los bonos por victorias y las penalizaciones por faltas) para determinar un puntaje final entero y su respectivo rango de clasificación.

## Que reglas aplicaste
1. **Cálculo de Tendencia Central:** Sumar todos los elementos del arreglo `participantes` y dividirlos por la longitud del arreglo para hallar el promedio base.
2. **Aplicación de Modificadores:** Sumar el valor de `bono` y restar el valor de `penalizacion` al promedio calculado.
3. **Redondeo Simétrico:** Ajustar el resultado final decimal con un redondeo matemático (`Math.round`) para trabajar con índices de ranking estandarizados.
4. **Clasificación Dinámica:**
   - Si `puntaje_final >= 25`: competitivo
   - Si `15 <= puntaje_final < 25`: intermedio
   - Si `puntaje_final < 15`: inicial
5. **Control de Errores (Caso Borde):** Validar si el arreglo de entrada viene vacío o con datos erróneos para retornar un mensaje controlado y evitar fallos del sistema.

## Que casos probaste

| Tipo de Prueba | Datos de Entrada | Proceso Realizado | Salida Esperada |
| :--- | :--- | :--- | :--- |
| **Caso Ejemplo** | `participantes: [12, 18, 25, 30]`, `bono: 8`, `penalizacion: 3` | Promedio (21.25) + 8 - 3 = 26.25 -> Redondeo: 27 | `puntaje_final: 27`, `clasificacion: competitivo` |
| **Caso Propio** | `participantes: [22, 24, 26]`, `bono: 5`, `penalizacion: 2` | Promedio (24) + 5 - 2 = 27 | `puntaje_final: 27`, `clasificacion: competitivo` |
| **Caso Borde** | `participantes: [10]`, `bono: 2`, `penalizacion: 6` | Promedio (10) + 2 - 6 = 6 | `puntaje_final: 6`, `clasificacion: inicial` |

## Como ejecutar o revisar tu solucion
1. Asegúrate de tener instalado **Node.js** en tu entorno local.
2. Abre la terminal de comandos de tu sistema.
3. Navega hasta la ruta específica de la entrega: `alumno/allison-vargas/ejercicio-003`
4. Ejecuta el archivo principal utilizando el siguiente comando:
   ```bash
   node allison-vargas.js