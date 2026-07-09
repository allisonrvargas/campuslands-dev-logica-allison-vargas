# Plantilla de solucion

## Autor:

Sergio Ajù

## Analisis

- **Entrada:** `duracionInicial` (segundos de la primera canción), `paso` (incremento entre canciones) y `cantidadCanciones` (número total de pistas).
- **Proceso:** Utilizar un ciclo `for` para aplicar la fórmula de la progresión aritmética $a_n = a_1 + (n-1)d$ y almacenar los resultados en un arreglo.
- **Salida:** Un objeto con la `secuencia` de duraciones, el `total_tiempo` acumulado y una `explicacion`.

## Reglas identificadas

1. **Progresión:** Cada canción aumenta su duración según un intervalo fijo (`paso`).
2. **Consistencia:** No se permiten duraciones negativas; si los datos de entrada son inválidos, el sistema retorna un error.
3. **Acumulación:** El tiempo total de la playlist es la suma de los elementos de la secuencia generada.

## Pruebas

### Caso normal

**Entrada:**
```javascript
duracionInicial: 180, paso: 10, cantidadCanciones: 5