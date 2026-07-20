# Plantilla de solucion

## Analisis
El problema se diseñó para programar el motor de toma de decisiones de una plataforma de eSports, el cual determina automáticamente si un equipo es elegible para avanzar a los *Playoffs* (fase eliminatoria) de un torneo internacional. El algoritmo evalúa simultáneamente el rendimiento en victorias, la disciplina del equipo (ausencia de reportes por mal comportamiento o toxicidad) y el factor de desempate técnico basado en la diferencia de objetivos completados en las partidas.

- Entrada: Cantidad de victorias (entero), número de reportes por comportamiento antideportivo (entero) y la diferencia de objetivos o *Kills* (entero positivo o negativo).
- Proceso: 
  1. Validar las consistencias lógicas iniciales de las variables cuantitativas.
  2. Evaluar el criterio de descalificación por conducta.
  3. Aplicar las condiciones combinadas de rendimiento deportivo. Si los reportes complican la elegibilidad pero el rendimiento técnico es sobresaliente, el sistema aplica una regla de última oportunidad condicionada.
- Salida: Un objeto indicando el "Estado de Clasificación" ("Clasificado Directo", "Repechaje", "Descalificado" o "Error").

## Reglas identificadas
1. Filtro Disciplinario Absoluto: Si el equipo acumula más de 3 reportes por conducta antideportiva, queda automáticamente fuera del torneo, sin importar sus victorias. Su estado es `"Descalificado"`.
2. Umbrales de Clasificación Directa y Repechaje:
   - **Clasificado Directo**: Requiere 7 o más victorias y tener 0 reportes disciplinarios.
   - **Repechaje**: Si tiene entre 4 y 6 victorias con un máximo de 2 reportes, o si tiene 7 o más victorias pero acumula entre 1 y 3 reportes, siempre y cuando su diferencia de objetivos sea positiva ($\text{diferenciaObjetivos} > 0$).
3. Condición de Eliminación por Rendimiento: Si no cumple las condiciones anteriores o tiene menos de 4 victorias, el estado es `"Descalificado"`.

## Pruebas

### Caso clasificado directo
Entrada: victorias = 8, reportes = 0, diferenciaObjetivos = 15
Resultado esperado: { "resultado": "Clasificado Directo" }

### Caso repechaje por desempate técnico
Entrada: victorias = 7, reportes = 2, diferenciaObjetivos = 5
Resultado esperado: { "resultado": "Repechaje" }

### Caso descalificado por toxicidad
Entrada: victorias = 9, reportes = 4, diferenciaObjetivos = 20
Resultado esperado: { "resultado": "Descalificado" }

## Explicacion final
La solución funciona porque prioriza los reglamentos de convivencia del torneo antes de computar las variables de puntuación, utilizando condicionales anidados lógicos para ramificar las vías de clasificación de los equipos.