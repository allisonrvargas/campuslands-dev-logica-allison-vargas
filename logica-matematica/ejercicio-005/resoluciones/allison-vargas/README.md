# Solución Reto 005: Mínimos y Límites - Taller Mecánico
**Estudiante:** Allison Vargas  
**Entorno:** Campuslands  

## Como pensaste el problema
Para este reto ambientado en la optimización de un taller mecánico, analicé que medir el rendimiento operacional requiere evaluar los tiempos más rápidos de reparación (valores mínimos) y contrastarlos con límites operativos aceptables. En la gestión de servicios, si una tarea se realiza por debajo del umbral estándar mínimo requerido, se aplica una regla de control o límite inferior (cota mínima) para estandarizar los procesos de facturación o puntuación. A esta base regulada se le aplican aritméticamente los bonos de eficiencia por entrega rápida y las penalizaciones por retrasos de herramientas.

## Que reglas aplicaste
1. **Detección de Tiempos Mínimos:** Evaluar el arreglo de `tiemposReparacion` mediante estructuras analíticas para identificar el menor tiempo registrado.
2. **Aplicación de Límites Controlados:** Establecer una restricción de umbral mínimo de operación (Límite inferior de 22 unidades) para nivelar los registros que se encuentren fuera de rango.
3. **Ecuación Operacional:** `Puntaje Final = Base (Mínimo Regulado) + Bono - Penalización`.
4. **Rangos de Clasificación del Taller:**
   - Si `puntaje_final >= 25`: competitivo
   - Si `15 <= puntaje_final < 25`: intermedio
   - Si `puntaje_final < 15`: inicial
5. **Control de Datos Nulos (Caso Borde):** Bloquear la ejecución si el reporte de órdenes ingresa vacío para salvaguardar la estabilidad de la lógica matemática.

## Que casos probaste

| Tipo de Prueba | Datos de Entrada | Proceso Realizado | Salida Esperada |
| :--- | :--- | :--- | :--- |
| **Caso Ejemplo** | `tiempos: [12, 18, 25, 30]`, `bono: 8`, `penalizacion: 3` | Mínimo (12) cae bajo el límite (22). Base (22) + 8 - 3 = 27 | `puntaje_final: 27`, `clasificacion: competitivo` |
| **Caso Propio** | `tiempos: [24, 26, 28]`, `bono: 5`, `penalizacion: 2` | Mínimo (24) supera el límite. Base (24) + 5 - 2 = 27 | `puntaje_final: 27`, `clasificacion: competitivo` |
| **Caso Borde** | `tiempos: [5]`, `bono: 0`, `penalizacion: 4` | Mínimo (5) cae bajo el límite (22). Base (22) + 0 - 4 = 18 | `puntaje_final: 18`, `clasificacion: intermedio` |

## Como ejecutar o revisar tu solucion
1. Asegúrate de contar con un entorno local con **Node.js** instalado.
2. Abre la terminal o consola de comandos del sistema.
3. Dirígete a la carpeta en donde se encuentra el ejercicio en tu espacio de trabajo:
   ```bash
   cd alumno/allison-vargas/ejercicio-005