# Plantilla de solucion: Problema 35

## Analisis
El problema consiste en diseñar el motor de reglas de negocio para una aplicación de dibujo digital orientada a tabletas gráficas. El sistema debe gestionar de forma inteligente la asignación de recursos y la configuración de las capas de un lienzo basándose en las especificaciones del hardware del usuario, la cantidad de memoria asignada y las propiedades de renderizado (como la resolución o el suavizado de trazo / *anti-aliasing*). El objetivo principal es evitar que la aplicación consuma la memoria de video (VRAM) por completo, aplicando restricciones dinámicas antes de crear el entorno de dibujo.

- Entrada: Dimensiones del lienzo en píxeles (ancho y alto enteros), número de capas deseadas (entero), y el modo de renderizado (texto: `"Vectorial"`, `"Rásterizado"`).
- Proceso:
  1. Validar que las dimensiones del lienzo y las capas sean valores positivos y coherentes.
  2. Calcular el peso espacial representativo del lienzo multiplicando el ancho por el alto.
  3. Aplicar condicionales cruzados: restringir la cantidad máxima de capas permitidas si el lienzo supera ciertas dimensiones y el modo es pesado (`"Rásterizado"`).
- Salida: Un objeto con la configuración aprobada del lienzo ("Inicializado con Éxito", "Lienzo Reducido automáticamente" o "Error de Memoria").

## Reglas identificadas
1. Límite de Lienzo Crítico (Mega-píxeles): Si el área total del lienzo es estrictamente superior a los 16,000,000 de píxeles (por ejemplo, lienzos de $4000 \times 4000$ o superiores):
   - Si el modo es `"Rásterizado"`, la cantidad máxima de capas se limita automáticamente a un tope estricto de 5 para conservar memoria RAM. Si el usuario solicita más capas, el estado se marca como `"Lienzo Reducido automáticamente"`.
   - Si el modo es `"Vectorial"`, las capas no se limitan de forma tan estricta, permitiendo hasta un tope de 20 capas debido al bajo consumo de memoria de las curvas matemáticas.
2. Bloqueo de Capacidad (Fallo de Memoria): Si el área total supera los 30,000,000 de píxeles y el usuario solicita más de 10 capas en cualquier modo, la aplicación se interrumpe y devuelve un estado de `"Error de Memoria"`.
3. Consistencia de Parámetros de Dibujo: Si el ancho, el alto o las capas iniciales ingresadas son menores o iguales a cero, o si el modo de renderizado no es válido, el sistema responde con `"Error de Parámetros"`.

## Pruebas

### Caso 1: Lienzo rásterizado grande con ajuste automático
Entrada: ancho = 4000, alto = 4500, capas = 12, modo = "Rásterizado"
Explicación: El área es $4000 \times 4500 = 18,000,000$ (Mayor a 16M). Como es rásterizado, se fuerza a bajar las capas a 5.
Resultado esperado: { "estadoLienzo": "Lienzo Reducido automáticamente", "capasFinales": 5 }

### Caso 2: Error por exceso de memoria total
Entrada: ancho = 6000, alto = 6000, capas = 15, modo = "Vectorial"
Explicación: El área es $36,000,000$ (Mayor a 30M) y solicita 15 capas (> 10). El sistema aborta por desbordamiento teórico de memoria.
Resultado esperado: { "estadoLienzo": "Error de Memoria", "capasFinales": 0 }

## Explicacion final
La solución funciona porque implementa un control predictivo basado en el cálculo geométrico del lienzo. Esto permite equilibrar dinámicamente el rendimiento del renderizador gráfico mediante compuertas de exclusión antes de que la memoria física sufra una sobrecarga por mapas de bits pesados.