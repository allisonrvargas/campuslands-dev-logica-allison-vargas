
## Analisis

- Entrada: Un arreglo con los puntajes obtenidos y otro con los puntajes máximos posibles de cada prueba.
- Proceso: Normalizar cada puntaje a una escala de 0 a 100 usando la fórmula $(Puntaje / Maximo) \times 100$. Luego calcular el promedio de estos valores.
- Salida: Arreglo de puntajes normalizados y el nivel de certificación obtenido.

## Reglas identificadas

1. Normalización: Cada puntaje se ajusta a escala 100 para comparar pruebas de distinta exigencia.
2. Certificación: Si el promedio normalizado es >= 80, es "certificado experto".
3. Si el promedio es < 80, el estudiante "requiere capacitacion".

## Pruebas

### Caso normal

Entrada:
puntajes: [45, 80, 60]
maximosPosibles: [50, 100, 80]

Resultado esperado:
puntajes_normalizados: ["90.00", "80.00", "75.00"]
nivel: certificado experto (Promedio: 81.66)

### Caso borde

Entrada:
puntajes: [10, 10]
maximosPosibles: [20, 20]

Resultado esperado:
puntajes_normalizados: ["50.00", "50.00"]
nivel: requiere capacitacion

## Explicacion final

Para normalizar los puntajes, multipliqué la relación de éxito de cada prueba por 100. Esto garantiza que una prueba difícil (con puntaje máximo bajo) tenga el mismo peso que una fácil. Finalmente, calculé el promedio de estos valores normalizados para determinar si el soldador alcanza el nivel de certificación experto.