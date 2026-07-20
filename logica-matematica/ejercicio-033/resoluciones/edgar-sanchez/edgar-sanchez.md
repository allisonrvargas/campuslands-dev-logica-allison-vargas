# Conteo de Coordenadas y Distancia en Paracaidismo

## Pensamiento del Problema
El problema plantea calcular la separación espacial en línea recta entre un paracaidista en descenso y su zona de aterrizaje establecida, utilizando un plano de coordenadas bidimensional. 

Para resolverlo, se aplica la ecuación matemática de la distancia euclidiana. El proceso toma la diferencia entre las coordenadas equivalentes de ambos puntos. Al elevar estas diferencias al cuadrado, se soluciona de forma automática el problema de los valores negativos en el plano cartográfico, garantizando que la suma total sea siempre positiva. Finalmente, se extrae la raíz utilizando una potencia fraccionaria para cumplir con la restricción de no emplear herramientas externas.

## Elección del Lenguaje
Se seleccionó **JavaScript (.js)** porque procesa con fluidez operaciones matemáticas fundamentales y permite la manipulación directa de números de punto flotante en cualquier entorno de ejecución estándar. La sintaxis limpia y la ausencia de dependencias externas agilizan el rendimiento del script, mientras que el bloque de pruebas integrado asegura la fiabilidad del algoritmo ante posiciones idénticas o puntos situados en cuadrantes opuestos.