# Solución Reto 006: Conversión de Unidades - Autos Hiperdeportivos
**Estudiante:** Allison Vargas  
**Entorno:** Campuslands  

## Como pensaste el problema
Para este reto enfocado en el análisis de autos hiperdeportivos, consideré que la evaluación de rendimiento y la conversión de magnitudes en pistas de pruebas exige identificar los rangos límites superiores (velocidades máximas). Una vez se extrae la velocidad máxima en millas por hora (MPH) como pivote matemático, el sistema integra las variables de modificación del circuito para establecer el balance de rendimiento: se le adiciona el factor de escala o bono aerodinámico y se le resta la penalización por exceso de peso del chasis.

## Que reglas aplicaste
1. **Análisis de Magnitudes Máximas:** Examinar el conjunto de datos de `velocidadesMph` para determinar el valor máximo absoluto registrado en la prueba.
2. **Ecuación de Desempeño:** `Puntaje Final = Velocidad Máxima + Bono Aerodinámico - Penalización de Peso`.
3. **Escala de Clasificación de Hiperdeportivos:**
   - Si `puntaje_final >= 25`: competitivo
   - Si `15 <= puntaje_final < 25`: intermedio
   - Si `puntaje_final < 15`: inicial
4. **Control de Entradas Críticas (Caso Borde):** Estipular restricciones para impedir operaciones matemáticas si el arreglo de velocidades se encuentra vacío.

## Que casos probaste

| Tipo de Prueba | Datos de Entrada | Proceso Realizado | Salida Esperada |
| :--- | :--- | :--- | :--- |
| **Caso Ejemplo** | `velocidades: [12, 18, 25, 30]`, `bono: 8`, `penalizacion: 3` | Máximo (30) + 8 - 3 = 27 | `puntaje_final: 27`, `clasificacion: competitivo` |
| **Caso Propio** | `velocidades: [15, 20, 22, 19]`, `bono: 6`, `penalizacion: 4` | Máximo (22) + 6 - 4 = 24 | `puntaje_final: 24`, `clasificacion: intermedio` |
| **Caso Borde** | `velocidades: [10]`, `bono: 0`, `penalizacion: 0` | Máximo (10) + 0 - 0 = 10 | `puntaje_final: 10`, `clasificacion: inicial` |

## Como ejecutar o revisar tu solucion
1. Confirma que tienes instalado **Node.js** en tu equipo local.
2. Abre la consola o terminal de comandos de tu preferencia.
3. Navega de forma exacta hacia el directorio asignado en tu espacio de trabajo:
   ```bash
   cd alumno/allison-vargas/ejercicio-006