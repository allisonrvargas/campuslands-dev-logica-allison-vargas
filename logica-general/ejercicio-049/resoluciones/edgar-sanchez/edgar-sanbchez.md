# Plantilla de solucion: Problema 43

## Analisis
El problema consiste en desarrollar un simulador de estados y niveles de impacto psicológico para un catálogo de películas de miedo (terror) en una distribuidora de cine. El objetivo es analizar los factores de intensidad de los filmes para predecir y asignar una clasificación de experiencia del espectador o estado de visualización, aislando registros inconsistentes y agrupando el contenido de acuerdo con su nivel de impacto ("Susto").

- Entrada: Una lista de objetos de películas (cada una con `titulo` [texto], `sustosPorMinuto` [entero], `intensidadGore` [entero de 1 a 5] y `duracionMinutos` [entero]).
- Proceso:
  1. Validar la integridad de cada registro para descartar datos corruptos (valores negativos o fuera de los rangos permitidos).
  2. Calcular el Índice de Impacto de Terror (IIT) multiplicando los sustos por minuto por la intensidad gore.
  3. Determinar el estado de la película según su nivel de impacto resultante y clasificarla en la categoría correspondiente.
- Salida: Un objeto o diccionario que clasifica las películas por su estado de impacto y contabiliza el total de producciones aptas analizadas.

## Reglas identificadas
1. Filtro de Control de Datos: Se ignora cualquier película si su `duracionMinutos` o `sustosPorMinuto` son menores o iguales a cero, o si su `intensidadGore` se encuentra fuera del rango estricto de 1 a 5.
2. Simulación de Estados de Impacto: El Índice de Impacto de Terror (IIT) se calcula con la fórmula:
   $$\text{IIT} = \text{sustosPorMinuto} \times \text{intensidadGore}$$
   Con base en el IIT, se determina el estado de la experiencia:
   - Si $\text{IIT} \geq 15 \rightarrow$ Estado: `"Pesadilla Asegurada"`
   - Si $\text{IIT}$ está entre 6 y 14 $\rightarrow$ Estado: `"Susto Moderado"`
   - Si $\text{IIT} \leq 5 \rightarrow$ Estado: `"Tension Leve"`
3. Consolidación de Resultados: El sistema debe agrupar los títulos de las películas en listas separadas según su estado de impacto final y mantener un contador total de las películas procesadas de manera exitosa.
4. Caso de Datos Vacíos: Si la lista de entrada está vacía o ningún elemento supera las validaciones de datos, el simulador entrega listas vacías en cada estado y el contador general en cero.

## Pruebas

### Caso 1: Simulación completa con distribución de estados
Entrada: peliculas = `[{"titulo": "Hereditary", "sustosPorMinuto": 4, "intensidadGore": 4, "duracionMinutos": 127}, {"titulo": "Conjuring", "sustosPorMinuto": 3, "intensidadGore": 2, "duracionMinutos": 112}, {"titulo": "Scary Movie", "sustosPorMinuto": 1, "intensidadGore": 1, "duracionMinutos": 88}]`
Explicación:
- "Hereditary": IIT = $4 \times 4 = 16$ (Pesadilla Asegurada)
- "Conjuring": IIT = $3 \times 2 = 6$ (Susto Moderado)
- "Scary Movie": IIT = $1 \times 1 = 1$ (Tension Leve)
Resultado esperado: { "totalProcesadas": 3, "pesadillaAsegurada": ["Hereditary"], "sustoModerado": ["Conjuring"], "tensionLeve": ["Scary Movie"] }

### Caso 2: Exclusión por datos corruptos
Entrada: peliculas = `[{"titulo": "Corrupta 1", "sustosPorMinuto": 5, "intensidadGore": 6, "duracionMinutos": 90}, {"titulo": "Corrupta 2", "sustosPorMinuto": -2, "intensidadGore": 3, "duracionMinutos": 100}]`
Resultado esperado: { "totalProcesadas": 0, "pesadillaAsegurada": [], "sustoModerado": [], "tensionLeve": [] }

## Explicacion final
La solución implementa una máquina de estados simple fundamentada en una métrica calculada al vuelo (IIT). Al filtrar las anomalías en la captura de datos al inicio de la iteración, el simulador garantiza que la categorización de los perfiles de terror sea exacta y libre de desbordamientos lógicos.