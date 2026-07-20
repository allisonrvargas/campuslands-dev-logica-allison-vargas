## Analisis

- Entrada: Un objeto que contiene `modelo`, `velocidad` (numérica), `unidadVelocidad` (string: "mph" o "kmh"), `potencia` (numérica) y `unidadPotencia` (string: "hp" o "kw").
- Proceso: Aplicar factores de conversión estándar (1.60934 para velocidad y 0.7457 para potencia) para unificar todas las mediciones al sistema métrico (km/h y kW).
- Salida: Un objeto con los valores normalizados.

## Reglas identificadas

1. Velocidad: Si la unidad es "mph", multiplicar por 1.60934 para obtener km/h.
2. Potencia: Si la unidad es "hp", multiplicar por 0.7457 para obtener kW.
3. Precisión: Los resultados deben redondearse a dos decimales para facilitar la comparación técnica.

## Pruebas

### Caso normal

Entrada:
{ modelo: "Bugatti", velocidad: 300, unidadVelocidad: "mph", potencia: 1500, unidadPotencia: "hp" }

Resultado esperado:
{ modelo: "Bugatti", velocidadKmh: 482.8, potenciaKw: 1118.55 }

### Caso borde

Entrada:
{ modelo: "Rimac", velocidad: 412, unidadVelocidad: "kmh", potencia: 1400, unidadPotencia: "kw" }

Resultado esperado:
{ modelo: "Rimac", velocidadKmh: 412, potenciaKw: 1400 } (Sin cambios al estar ya en métrico)

## Explicacion final

La solución utiliza una condicional simple para verificar la unidad original. Si el dato ya está en el formato objetivo (km/h o kW), no se aplica transformación alguna. Esto asegura que el sistema sea flexible ante diferentes fuentes de datos y evita errores de sobre-conversión.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.