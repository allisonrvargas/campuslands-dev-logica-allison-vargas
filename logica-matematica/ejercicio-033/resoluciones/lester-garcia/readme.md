# Plantilla de solucion

## Analisis

- **Entrada:**
  - Coordenada inicial `(x1, y1)`.
  - Coordenada final `(x2, y2)`.

- **Proceso:**
  - Calcular la diferencia entre las coordenadas.
  - Aplicar la formula de distancia euclidiana.
  - Verificar la distancia obtenida.
  - Evaluar si el desplazamiento fue positivo en ambos ejes.
  - Determinar la categoria correspondiente.

- **Salida:**
  - Distancia.
  - Categoria.
  - Explicacion del resultado.

## Reglas identificadas

1. La distancia se calcula mediante la formula `√((x2 - x1)² + (y2 - y1)²)`.
2. Si la distancia es mayor o igual a 30 y el desplazamiento es positivo en los ejes X e Y, la categoria es **salto avanzado**.
3. Si no cumple ambas condiciones pero la distancia es mayor o igual a 20, la categoria es **salto intermedio**; en otro caso, la categoria es **salto basico**.

## Pruebas

### Caso normal

**Entrada:**

x1: 10

y1: 15

x2: 28

y2: 39

**Resultado esperado:**

distancia: 30

categoria: salto avanzado

explicacion: se calculo la distancia entre dos coordenadas y se evaluo la direccion del desplazamiento para clasificar el salto.

### Caso borde

**Entrada:**

x1: 5

y1: 5

x2: 17

y2: 21

**Resultado esperado:**

distancia: 20

categoria: salto intermedio

explicacion: se calculo la distancia entre dos coordenadas y se evaluo la direccion del desplazamiento para clasificar el salto.

## Explicacion final

La solucion recibe las coordenadas inicial y final del salto. Primero calcula las diferencias entre los puntos y aplica la formula de la distancia euclidiana para obtener la longitud del desplazamiento. Luego evalua varias condiciones: para clasificar el salto como **salto avanzado** debe cumplir simultaneamente una distancia minima y un desplazamiento positivo en ambos ejes. Si solo cumple el requisito de distancia, se clasifica como **salto intermedio**; en caso contrario, como **salto basico**. Finalmente se muestran la distancia calculada, la categoria y la explicacion del resultado.