# Probabilidad de Victoria en Ping-Pong

## Pensamiento del Problema
El problema plantea calcular la probabilidad de victoria de un jugador basándose en su historial de puntos ganados frente al total de puntos jugados en un enfrentamiento de ping-pong. 

La probabilidad básica se define como el cociente entre los casos favorables (puntos ganados) y los casos totales (puntos jugados). Para resolverlo de forma robusta, se analizaron los siguientes escenarios y casos especiales:
1. **Caso estándar:** Ambos valores son mayores a cero y los puntos ganados son menores o iguales a los jugados. Se aplica la división directa.
2. **Caso inicial / Sin juego:** Si los puntos jugados son cero, la probabilidad no se puede calcular (división por cero). Se define por regla que la probabilidad es cero.
3. **Casos inconsistentes:** Si los puntos ganados superan a los jugados o si se introducen valores negativos, los datos carecen de sentido físico en el contexto del ping-pong, por lo que el sistema retorna cero para evitar resultados superiores al 100% o valores negativos.

## Elección del Lenguaje
Se seleccionó **Python (.py)** para esta solución debido a su manejo directo de operaciones flotantes de alta precisión y su sintaxis limpia para evaluar estructuras condicionales anidadas. Al no permitirse librerías externas ni comentarios, la expresividad nativa de Python facilita que el código sea autoexplicativo, permitiendo además incluir un bloque de pruebas automatizado mediante estructuras de control básicas para verificar la consistencia del algoritmo frente a datos válidos e inválidos.