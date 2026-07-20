# Solución Reto 002: Porcentajes y Proporciones - Ranking de Fútbol Sala
**Estudiante:** Allison Vargas  
**Entorno:** Campuslands  

## Cómo pensé el problema
Para resolver este problema, analicé que el comportamiento del ranking de fútbol sala depende de una lista de participantes variables. Identifiqué que para calcular un puntaje final y simular un entorno proporcional equitativo, debía extraer el elemento de mayor peso en el arreglo (`30` en el caso de ejemplo) para usarlo como pivote base, y posteriormente aplicar las operaciones aritméticas de adición (bono) y sustracción (penalización).

## Reglas que apliqué
1. **Identificación de la Base:** Extraer el valor máximo del arreglo de participantes proporcionado.
2. **Cálculo Aritmético:** `Puntaje Final = Máximo Participante + Bono - Penalización`.
3. **Clasificación por Rangos:** - `puntaje_final >= 25`: competitivo
   - `15 <= puntaje_final < 25`: intermedio
   - `puntaje_final < 15`: inicial
4. **Validación Antierrores (Caso Borde):** Verificar que la lista contenga datos válidos antes de procesar operaciones matemáticas para evitar fallos de ejecución.

## Casos Probados

| Tipo de Prueba | Entrada | Proceso | Salida Esperada |
| :--- | :--- | :--- | :--- |
| **Caso Ejemplo** | `participantes: [12, 18, 25, 30]`, `bono: 8`, `penalizacion: 3` | $30 + 8 - 3 = 27$ | `puntaje_final: 27`, `clasificacion: competitivo` |
| **Caso Propio (Normal)** | `participantes: [10, 15, 20]`, `bono: 5`, `penalizacion: 2` | $20 + 5 - 2 = 23$ | `puntaje_final: 23`, `clasificacion: intermedio` |
| **Caso Borde (Mínimos)** | `participantes: [5]`, `bono: 0`, `penalizacion: 4` | $5 + 0 - 4 = 1$ | `puntaje_final: 1`, `clasificacion: inicial` |

## Cómo ejecutar o revisar mi solución
1. Asegúrate de tener instalado un entorno de ejecución local según el lenguaje que prefieras usar (**Node.js** para JavaScript o **Python 3**).
2. Abre la terminal en la ruta de la carpeta de la resolución: `resoluciones/allison-vargas/`
3. Ejecuta el archivo principal usando el comando respectivo:
   - Para JavaScript: `node allison-vargas.js`
   - Para Python: `python allison-vargas.py`
4. Observa los resultados impresos en la consola correspondientes a cada caso de prueba verificado.
