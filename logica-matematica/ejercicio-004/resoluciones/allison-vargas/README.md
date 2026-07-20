# Solución Reto 004: Rangos y Máximos - Inventario de Motos
**Estudiante:** Allison Vargas  
**Entorno:** Campuslands  

## Como pensaste el problema
Para este reto enfocado en la gestión de un inventario de motos, analicé que el control de distribución requiere identificar los picos de stock (valores máximos) dentro de los lotes de almacenamiento para establecer un punto de partida o balance. Una vez determinado el lote con el rango máximo disponible, se le aplican aritméticamente las variables operacionales del negocio: la adición de unidades por incentivo/bono y la deducción por penalizaciones de piezas faltantes, permitiendo así clasificar la eficiencia general de la distribución.

## Que reglas aplicaste
1. **Identificación de Rangos Máximos:** Evaluar el arreglo `motosPorLote` para extraer el valor numérico más alto y usarlo como pivote del inventario.
2. **Ecuación de Ajuste:** `Puntaje Final = Valor Máximo + Bono - Penalización`.
3. **Clasificación de Capacidad de Inventario:**
   - Si `puntaje_final >= 25`: competitivo
   - Si `15 <= puntaje_final < 25`: intermedio
   - Si `puntaje_final < 15`: inicial
4. **Control de Flujo (Caso Borde):** Asegurar que si los registros del inventario se encuentran vacíos, el sistema retorne un mensaje de error y no procese datos nulos.

## Que casos probaste

| Tipo de Prueba | Datos de Entrada | Proceso Realizado | Salida Esperada |
| :--- | :--- | :--- | :--- |
| **Caso Ejemplo** | `lotes: [12, 18, 25, 30]`, `bono: 8`, `penalizacion: 3` | Máximo (30) + 8 - 3 = 27 | `puntaje_final: 27`, `clasificacion: competitivo` |
| **Caso Propio** | `lotes: [8, 14, 19, 11]`, `bono: 4`, `penalizacion: 2` | Máximo (19) + 4 - 2 = 21 | `puntaje_final: 21`, `clasificacion: intermedio` |
| **Caso Borde** | `lotes: [5]`, `bono: 0`, `penalizacion: 1` | Máximo (5) + 0 - 1 = 4 | `puntaje_final: 4`, `clasificacion: inicial` |

## Como ejecutar o revisar tu solucion
1. Asegúrate de tener instalado **Node.js** en tu entorno de desarrollo.
2. Abre la terminal o consola de comandos.
3. Dirígete a la carpeta exacta de este ejercicio:
   ```bash
   cd alumno/allison-vargas/ejercicio-004