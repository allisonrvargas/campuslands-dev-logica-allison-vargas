# Plantilla de solucion

## Analisis

- Entrada:
  - `velocidad_px_seg` (flotante): Tasa de desplazamiento lineal del lápiz óptico expresada en pixeles por segundo.
  - `tiempo_seg` (flotante): Intervalo temporal continuo durante el cual el lápiz mantuvo presión sobre la superficie digitalizadora.

- Proceso:
  1. Validar que ninguna de las magnitudes cinemáticas de entrada posea valores negativos para resguardar la coherencia física de la simulación.
  2. Implementar la ecuación matemática fundamental del movimiento rectilíneo uniforme para calcular la longitud del vector generado en el lienzo: $Distancia = Velocidad \times Tiempo$.
  3. Evaluar mediante una estructura de control condicional si la distancia total en pixeles alcanza o supera el umbral restrictivo de 150.0 px fijado para la activación de gestos dinámicos.

- Salida:
  - `distancia_trazo_px` (flotante redondeado a 1 decimal).
  - `activa_atajo` (booleano: `True` o `False`).
  - `diagnostico_software` (cadena de texto con la instrucción de renderizado para el motor gráfico).

## Reglas identificadas

1. **Relación de Proporcionalidad Directa:** La distancia acumulada en el lienzo interactivo responde de forma lineal al producto de sus componentes. Un decremento en el tiempo de contacto puede ser compensado por un aumento drástico de velocidad para alcanzar el mismo metraje de pixeles.
2. **Frontera de Interacción por Gesto:** La regla de negocio fija un límite inclusivo en los 150.0 px ($Distancia \ge 150.0$). Tocar con total exactitud esta frontera activa de inmediato el comportamiento algorítmico del atajo de software.
3. **Control de Inercia Estática:** Si la variable temporal es estrictamente 0, el software detiene la ejecución del cálculo matemático, determinando de forma lógica que no existió una intención real de dibujo o trazo sobre la pantalla.

## Pruebas

### Caso normal

Entrada:
- `velocidad_px_seg`: 500.0
- `tiempo_seg`: 0.4

Resultado esperado:
- `Distancia calculada`: 200.0 px *(Cálculo manual: 500.0 * 0.4 = 200.0)*
- `Estado del Motor Gráfico`: "Gesto Dinámico Detectado: Activando herramienta de trazo rápido."
- `¿Activa atajo?`: `True` *(Cálculo lógico: 200.0 >= 150.0 es Verdadero)*

### Caso borde

Entrada:
- `velocidad_px_seg`: 300.0
- `tiempo_seg`: 0.5

Resultado esperado:
- `Distancia calculada`: 150.0 px *(Cálculo manual: 300.0 * 0.5 = 150.0)*
- `Estado del Motor Gráfico`: "Gesto Dinámico Detectado: Activando herramienta de trazo rápido." *(Cálculo lógico: Debido a que el operador condicional es inclusivo `>=`, el valor exacto de 150.0 es interpretado de forma exitosa como el punto de inicio del gesto rápido)*

## Explicacion final

Esta solución funciona porque traduce la fórmula cinemática lineal clásica a un entorno de desarrollo de software estructurado y predecible. Al mapear las variables en tiempo de ejecución y cruzarlas con validaciones de frontera numéricas, el sistema logra diferenciar de forma automatizada un trazo de caligrafía o detalle meticuloso de un deslizamiento veloz pensado para invocar un comando. El blindaje ante excepciones numéricas garantiza la estabilidad total del proceso en Campuslands.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.