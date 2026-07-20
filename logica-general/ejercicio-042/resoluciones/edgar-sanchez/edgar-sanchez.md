# Plantilla de solucion: Problema 36

## Analisis
El problema consiste en desarrollar un módulo de validación y auditoría de datos para el sistema de clasificación (ranking) de una liga profesional de fútbol sala. En los torneos deportivos, las tablas de posiciones e índices de rendimiento de los equipos pueden presentar inconsistencias debidas a errores manuales en el ingreso de actas de arbitraje (por ejemplo, registrar más partidos ganados que jugados, o goles en contra negativos). El algoritmo debe procesar las estadísticas acumuladas de un equipo, aplicar filtros lógicos cruzados y determinar si el registro es válido o si debe ser rechazado para revisión.

- Entrada: Partidos jugados (entero), partidos ganados (entero), partidos empatados (entero), partidos perdidos (entero) y goles a favor (entero).
- Proceso:
  1. Validar la consistencia matemática elemental: los valores no pueden ser negativos.
  2. Verificar la coherencia de la distribución de encuentros: la suma de victorias, empates y derrotas debe ser exactamente igual al total de partidos jugados.
  3. Comprobar límites lógicos avanzados: un equipo no puede tener más partidos ganados que el total de jugados.
- Salida: Un objeto o reporte de auditoría con el veredicto del registro (`"Datos Válidos"`, `"Error de Consistencia"` o `"Registro Rechazado"`) y los puntos totales calculados si el análisis es exitoso.

## Reglas identificadas
1. Filtro de Coherencia Aritmética: La suma total de partidos ganados, empatados y perdidos debe coincidir estrictamente con el valor de partidos jugados ($\text{ganados} + \text{empatados} + \text{perdidos} = \text{jugados}$). Si esta igualdad no se cumple, el sistema retorna `"Error de Consistencia"`.
2. Restricción de Negatividad: Ninguno de los campos de entrada numéricos puede ser inferior a cero. Cualquier valor negativo invalida automáticamente el proceso generando un `"Registro Rechazado"`.
3. Cálculo de Rendimiento Exitoso: Si los datos pasan las auditorías de consistencia, el sistema calcula los puntos oficiales acumulados en el ranking aplicando las reglas de la FIFA para el fútbol sala:
   - Cada partido ganado otorga **3 puntos**.
   - Cada partido empatado otorga **1 punto**.
   - Cada partido perdido otorga **0 puntos**.
   - Los goles a favor se usan como criterio secundario informativo.

## Pruebas

### Caso 1: Datos consistentes (Cálculo correcto de puntos)
Entrada: jugados = 10, ganados = 6, empatados = 2, perdidos = 2, golesFavor = 35
Explicación: $6 + 2 + 2 = 10$ (Consistente). Puntos: $(6 \times 3) + (2 \times 1) = 20$.
Resultado esperado: { "veredicto": "Datos Válidos", "puntosTotales": 20 }

### Caso 2: Error de consistencia en distribución de partidos
Entrada: jugados = 8, ganados = 5, empatados = 2, perdidos = 2, golesFavor = 20
Explicación: $5 + 2 + 2 = 9$, pero se declaró que jugaron 8 partidos. Incoherencia en las actas.
Resultado esperado: { "veredicto": "Error de Consistencia", "puntosTotales": 0 }

### Caso 3: Registro rechazado por valores negativos
Entrada: jugados = 5, ganados = 4, empatados = -1, perdidos = 2, golesFavor = 15
Resultado esperado: { "veredicto": "Registro Rechazado", "puntosTotales": 0 }

## Explicacion final
La solución funciona porque actúa como un firewall de datos mediante la aplicación secuencial de compuertas lógicas de identidad. Al verificar primero las invariantes matemáticas básicas (valores no negativos y sumas coincidentes), evita que las estadísticas corruptas alteren las posiciones del torneo real.