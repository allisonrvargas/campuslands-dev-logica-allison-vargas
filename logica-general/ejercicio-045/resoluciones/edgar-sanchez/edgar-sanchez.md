# Plantilla de solucion: Problema 39

## Analisis
El problema consiste en diseñar un sistema de asignación y ordenamiento de prioridades para los vehículos que ingresan a un taller mecánico. En la gestión operativa de un taller, optimizar el orden de atención es crítico para maximizar la satisfacción del cliente y la eficiencia de los mecánicos. La cola de espera no debe ser simplemente secuencial (por orden de llegada), sino que debe considerar la gravedad de la falla, si el cliente cuenta con una membresía premium de asistencia, y el tiempo estimado de reparación.

- Entrada: Una lista de objetos que representan las órdenes de trabajo (cada una con `id` [entero], `falla` [texto: "Critica", "Media", "Leve"], `esPremium` [booleano] y `horasEstimadas` [entero]).
- Proceso:
  1. Validar que la lista de órdenes contenga datos utilizables.
  2. Aplicar un esquema de ordenamiento multi-criterio basado en la severidad de la falla y los beneficios contractuales del usuario.
  3. Desempatar las prioridades utilizando el principio de menor tiempo estimado para liberar bahías de trabajo rápido.
- Salida: Una lista ordenada con los vehículos organizados según su prioridad de atención.

## Reglas identificadas
1. Criterio de Gravedad de Falla (Prioridad Primaria): Los vehículos se atienden primero según la severidad de su diagnóstico. El orden estricto de mayor a menor importancia es: `"Critica"` $\rightarrow$ `"Media"` $\rightarrow$ `"Leve"`.
2. Beneficio de Fidelización (Prioridad Secundaria): En caso de que dos vehículos tengan el mismo nivel de falla, se sitúa primero en la fila al cliente que posea la membresía premium (`esPremium = true`).
3. Regla de Optimización de Bahías (Desempate): Si el nivel de falla y el estado de membresía coinciden, se procesa primero el vehículo que requiera **menos** `horasEstimadas` de trabajo para agilizar la rotación del taller.
4. Datos Inconsistentes: Las órdenes con horas estimadas menores o iguales a cero se omiten del sistema de turnos. Si no hay órdenes válidas, se retorna una lista vacía (`[]`).

## Pruebas

### Caso 1: Ordenamiento general por gravedad y desempates
Entrada: ordenes = `[{"id": 1, "falla": "Media", "esPremium": false, "horasEstimadas": 4}, {"id": 2, "falla": "Critica", "esPremium": false, "horasEstimadas": 8}, {"id": 3, "falla": "Media", "esPremium": true, "horasEstimadas": 2}]`
Explicación: El ID 2 va primero por falla Critica. El ID 3 va antes que el ID 1 porque, aunque ambos son de falla Media, el ID 3 es Premium y toma menos tiempo.
Resultado esperado: `[{"id": 2, ...}, {"id": 3, ...}, {"id": 1, ...}]`

### Caso 2: Desempate exclusivo por menor tiempo estimado
Entrada: ordenes = `[{"id": 4, "falla": "Leve", "esPremium": true, "horasEstimadas": 5}, {"id": 5, "falla": "Leve", "esPremium": true, "horasEstimadas": 1}]`
Resultado esperado: `[{"id": 5, ...}, {"id": 4, ...}]`

## Explicacion final
La solución funciona porque asigna un peso numérico estricto a las variables cualitativas (fallas) y las introduce en un algoritmo de ordenación jerárquica por tuplas, resolviendo de forma limpia todos los niveles de coincidencia y optimizando los tiempos del negocio.