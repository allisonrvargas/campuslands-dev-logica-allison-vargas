# Plantilla de solucion

## Autor:

Sergio Ajù

## Analisis

- **Entrada:** `nombre_auto` (String) y `velocidad_kmh` (Number).
- **Proceso:** Validación de velocidad, conversión mediante la constante `0.621371` y clasificación según rangos de velocidad.
- **Salida:** Nombre del auto, velocidad en mph y su categoría correspondiente.

## Reglas identificadas

1. **Factor de conversión:** Se multiplica la velocidad en km/h por `0.621371` para obtener mph.
2. **Validación:** Si la velocidad es menor o igual a 0, se marca como entrada inválida.
3. **Clasificación:** - Más de 400 km/h: "Hiperdeportivo Élite".
    - Entre 300 y 400 km/h: "Deportivo de Alto Rendimiento".
    - Menos de 300 km/h: "Deportivo Estándar".

## Pruebas

### Caso normal

**Entrada:** `nombre_auto`: "Bugatti Chiron"
`velocidad_kmh`: 420

**Resultado esperado:** `velocidad_mph`: 260.97
`categoria`: "Hiperdeportivo Élite"

### Caso borde

**Entrada:** `nombre_auto`: "Auto en reposo"
`velocidad_kmh`: 0

**Resultado esperado:** `error`: "Velocidad inválida"

## Explicacion final

La solución emplea una estructura de control condicional (`if/else`) para asegurar la integridad de los datos. Primero valida que el número sea positivo, luego realiza el cálculo aritmético básico de conversión y finalmente asigna una categoría basada en el rendimiento del vehículo. Es una estructura clara, sin dependencias externas y fácil de mantener.

## Sugerencia

Verifica que el resultado del cálculo manual coincida con el redondeo a dos decimales aplicado en tu código para asegurar la precisión esperada.