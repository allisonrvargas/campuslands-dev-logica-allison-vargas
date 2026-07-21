# Plantilla de solucion: Problema 47

## Analisis
El problema consiste en desarrollar un sistema de control de calidad para un taller de metalmecánica automatizado. El software debe evaluar las uniones por soldadura realizadas por brazos robóticos o técnicos en certificación. Para estandarizar los reportes, se toma un conjunto de métricas físicas crudas (como la porosidad detectada por ultrasonido y la penetración del cordón), se combinan mediante una lógica de ponderación matemática y se aplica un algoritmo de normalización para clasificar cada junta estructural.

- Entrada: Una lista de objetos de uniones de soldadura (cada una con `idJunta` [texto/entero], `porosidadPorMetro` [entero], `penetracionPorcentaje` [entero] y `tipoElectrodo` [texto]).
- Proceso:
  1. Filtrar y purgar registros con valores imposibles o que no cumplan con los estándares mínimos de inspección inicial.
  2. Calcular el Puntaje de Defecto Estructural (PDE) combinando los factores de porosidad y penetración defectuosa.
  3. Clasificar la junta en un estado de calidad específico según las reglas de normalización establecidas.
- Salida: Un diccionario o mapa de datos que agrupa las juntas por su estado final de aprobación y calcula el porcentaje de rechazo global.

## Reglas identificadas
1. Filtro de Control de Datos: Se ignora una junta si su `porosidadPorMetro` es menor a cero, o si su `penetracionPorcentaje` no se encuentra dentro del rango físico estricto de 0 a 100.
2. Cálculo de Puntaje Estructural Ponderado: El Puntaje de Defecto Estructural (PDE) se calcula analizando la desviación del estándar óptimo. Una penetración ideal es del 100%. Por lo tanto, la penetración defectuosa es ($100 - \text{penetracionPorcentaje}$).
   $$\text{PDE} = (\text{porosidadPorMetro} \times 3) + (100 - \text{penetracionPorcentaje})$$
3. Normalización y Asignación de Estados: Con base en el PDE, la junta se clasifica en uno de los siguientes estados:
   - Si $\text{PDE} \leq 15 \rightarrow$ Estado: `"Aprobado Estructural"` (Unión de alta integridad).
   - Si $\text{PDE}$ está entre 16 y 40 $\rightarrow$ Estado: `"Requiere Pulido"` (Defectos superficiales o menores).
   - Si $\text{PDE} > 40 \rightarrow$ Estado: `"Rechazado"` (Fallo crítico por falta de fusión o exceso de gas atrapado).
4. Caso de Colecciones Vacías: Si no hay datos de entrada válidos, se reportan listas vacías en todos los estados y un porcentaje de rechazo igual a 0.0%.

## Pruebas

### Caso 1: Evaluación e inspección mixta de juntas
Entrada: juntas = `[{"idJunta": "J-01", "porosidadPorMetro": 2, "penetracionPorcentaje": 95, "tipoElectrodo": "E7018"}, {"idJunta": "J-02", "porosidadPorMetro": 5, "penetracionPorcentaje": 80, "tipoElectrodo": "E6010"}, {"idJunta": "J-03", "porosidadPorMetro": 12, "penetracionPorcentaje": 50, "tipoElectrodo": "E7018"}]`
Explicación:
- "J-01": PDE = $(2 \times 3) + (100 - 95) = 6 + 5 = 11$ (Aprobado Estructural)
- "J-02": PDE = $(5 \times 3) + (100 - 80) = 15 + 20 = 35$ (Requiere Pulido)
- "J-03": PDE = $(12 \times 3) + (100 - 50) = 36 + 50 = 86$ (Rechazado)
- Total válidas = 3. Rechazadas = 1. Porcentaje de rechazo = $(1 / 3) \times 100 = 33.33\%$.

Resultado esperado: `{ "aprobadoEstructural": ["J-01"], "requierePulido": ["J-02"], "rechazado": ["J-03"], "porcentajeRechazo": 33.33 }`

### Caso 2: Filtrado por datos imposibles
Entrada: juntas = `[{"idJunta": "J-Err", "porosidadPorMetro": -1, "penetracionPorcentaje": 105, "tipoElectrodo": "E6013"}]`
Resultado esperado: `{ "aprobadoEstructural": [], "requierePulido": [], "rechazado": [], "porcentajeRechazo": 0.0 }`

## Explicacion final
El algoritmo resuelve el problema transformando una métrica inversa (a menor penetración, mayor riesgo) en un puntaje lineal aditivo (PDE). Este método de normalización matemática asegura que las condiciones críticas latentes se detecten con claridad antes de dar el visto bueno al ensamble final de la pieza.