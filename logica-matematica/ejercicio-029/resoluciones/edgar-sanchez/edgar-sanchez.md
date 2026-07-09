# Plantilla de solucion

## Analisis
El problema se diseñó para coordinar la programación de maratones de películas de miedo en una plataforma de streaming o festival de cine, utilizando operaciones de módulos y divisibilidad. Para estructurar bloques temáticos perfectos sin dejar tiempos muertos o cortes abruptos, el sistema debe determinar si la duración total de un conjunto de películas es perfectamente divisible por bloques estándar de tiempo (por ejemplo, intervalos de 30 o 60 minutos para pautas comerciales y pausas) y calcular el tiempo remanente exacto en caso de un desfase.

- Entrada: Una lista de números enteros que representan la duración en minutos de cada película seleccionada y la duración del bloque de organización (entero, por defecto 60 minutos).
- Proceso: 
  1. Validar que la lista contenga duraciones válidas y que el tamaño del bloque sea estrictamente mayor a cero.
  2. Sumar linealmente la duración de todas las películas para obtener el tiempo total de reproducción.
  3. Aplicar el operador de residuo aritmético (módulo) entre el tiempo total y el bloque para verificar si la programación es perfecta o si sobra tiempo.
- Salida: Un objeto que indica si la programación es exacta (booleano) y los minutos restantes que faltan o sobran para completar el último bloque temático.

## Reglas identificadas
1. Criterio de Divisibilidad Perfecta: Un maratón está perfectamente estructurado si el residuo de la división entre el tiempo total y el bloque de tiempo es exactamente cero ($\text{tiempoTotal} \pmod{\text{bloque}} == 0$).
2. Cálculo de Ajuste de Cartelera: Si el maratón no es perfectamente divisible, se calcula el excedente de minutos ($\text{tiempoTotal} \pmod{\text{bloque}}$) y los minutos faltantes para completar el siguiente bloque entero ($\text{bloque} - \text{excedente}$).
3. Control de Contingencia de Datos: Si la lista de películas está vacía o el bloque es menor o igual a cero, el sistema aborta la simulación devolviendo un estado estructurado en falso con minutos de ajuste en 0.

## Pruebas

### Caso normal (Divisibilidad exacta)
Entrada: duraciones = [90, 120, 90], tamañoBloque = 60
Tiempo total = 300 minutos. 300 % 60 == 0.
Resultado esperado: { "programacionExacta": true, "minutosExcedentes": 0, "minutosParaCompletar": 0 }

### Caso con residuo (Requiere ajuste)
Entrada: duraciones = [105, 115], tamañoBloque = 60
Tiempo total = 220 minutos. 220 % 60 == 40. Faltan 20 minutos para el bloque de 240.
Resultado esperado: { "programacionExacta": false, "minutosExcedentes": 40, "minutosParaCompletar": 20 }

## Explicacion final
La solución funciona porque unifica las propiedades aritméticas de la división entera y los módulos de control, permitiendo que los coordinadores del festival conozcan con precisión los minutos de desfase de la cartelera de terror.