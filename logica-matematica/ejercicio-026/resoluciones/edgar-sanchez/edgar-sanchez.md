# Plantilla de solucion

## Analisis
El problema se diseñó para gestionar la telemetría de rendimiento en autos hiperdeportivos mediante un sistema de conversión de unidades de velocidad y potencia. Dado que estos vehículos se prueban en mercados globales, es indispensable transformar los valores de kilómetros por hora ($\text{km/h}$) a millas por hora ($\text{mph}$), y la potencia de caballos de fuerza ($\text{HP}$) a kilovatios ($\text{kW}$), aplicando umbrales de seguridad electrónica basados en los límites de los neumáticos y del motor.

- Entrada: Velocidad en $\text{km/h}$ (flotante), potencia en $\text{HP}$ (flotante) y el mercado de destino del vehículo (texto: `"US"` o `"EU"`).
- Proceso: 
  1. Validar que la velocidad y la potencia no sean valores negativos.
  2. Convertir la velocidad: $1 \text{ km/h} \approx 0.621371 \text{ mph}$.
  3. Convertir la potencia: $1 \text{ HP} \approx 0.7457 \text{ kW}$.
  4. Si la velocidad convertida excede las $250 \text{ mph}$, se debe activar una bandera de alerta de seguridad en los neumáticos.
- Salida: Un objeto con los valores convertidos según el mercado solicitado y el estado de la alerta de seguridad.

## Reglas identificadas
1. Factores de Conversión Estrictos: 
   - Para velocidad: $\text{mph} = \text{km/h} \times 0.621371$.
   - Para potencia: $\text{kW} = \text{HP} \times 0.7457$.
2. Alerta de Carga Térmica (Neumáticos): Si el coche supera de forma equivalente las $250 \text{ mph}$ de manera sostenida, el atributo `alertaNeumáticos` debe activarse en `true`.
3. Control de Inconsistencias Físicas: Si la velocidad o los caballos de fuerza son menores a cero, el sistema frena la conversión devolviendo valores en 0.0 y un estado de "Error" en el reporte.

## Pruebas

### Caso normal (Mercado US - Requiere mph y kW)
Entrada: velocidadKmh = 415.0, potenciaHp = 1000.0, mercado = "US"
Resultado esperado: { "velocidadMph": 257.87, "potenciaKw": 745.7, "alertaNeumaticos": true }

### Caso borde (Valores en cero)
Entrada: velocidadKmh = 0.0, potenciaHp = 0.0, mercado = "EU"
Resultado esperado: { "velocidadMph": 0.0, "potenciaKw": 0.0, "alertaNeumaticos": false }

## Explicacion final
La solución funciona porque aplica multiplicadores de conversión física estandarizados internacionalmente y evalúa de manera paralela las restricciones de seguridad mecánica del hiperdeportivo.# Plantilla de solucion

## Analisis
El problema se diseñó para gestionar la telemetría de rendimiento en autos hiperdeportivos mediante un sistema de conversión de unidades de velocidad y potencia. Dado que estos vehículos se prueban en mercados globales, es indispensable transformar los valores de kilómetros por hora ($\text{km/h}$) a millas por hora ($\text{mph}$), y la potencia de caballos de fuerza ($\text{HP}$) a kilovatios ($\text{kW}$), aplicando umbrales de seguridad electrónica basados en los límites de los neumáticos y del motor.

- Entrada: Velocidad en $\text{km/h}$ (flotante), potencia en $\text{HP}$ (flotante) y el mercado de destino del vehículo (texto: `"US"` o `"EU"`).
- Proceso: 
  1. Validar que la velocidad y la potencia no sean valores negativos.
  2. Convertir la velocidad: $1 \text{ km/h} \approx 0.621371 \text{ mph}$.
  3. Convertir la potencia: $1 \text{ HP} \approx 0.7457 \text{ kW}$.
  4. Si la velocidad convertida excede las $250 \text{ mph}$, se debe activar una bandera de alerta de seguridad en los neumáticos.
- Salida: Un objeto con los valores convertidos según el mercado solicitado y el estado de la alerta de seguridad.

## Reglas identificadas
1. Factores de Conversión Estrictos: 
   - Para velocidad: $\text{mph} = \text{km/h} \times 0.621371$.
   - Para potencia: $\text{kW} = \text{HP} \times 0.7457$.
2. Alerta de Carga Térmica (Neumáticos): Si el coche supera de forma equivalente las $250 \text{ mph}$ de manera sostenida, el atributo `alertaNeumáticos` debe activarse en `true`.
3. Control de Inconsistencias Físicas: Si la velocidad o los caballos de fuerza son menores a cero, el sistema frena la conversión devolviendo valores en 0.0 y un estado de "Error" en el reporte.

## Pruebas

### Caso normal (Mercado US - Requiere mph y kW)
Entrada: velocidadKmh = 415.0, potenciaHp = 1000.0, mercado = "US"
Resultado esperado: { "velocidadMph": 257.87, "potenciaKw": 745.7, "alertaNeumaticos": true }

### Caso borde (Valores en cero)
Entrada: velocidadKmh = 0.0, potenciaHp = 0.0, mercado = "EU"
Resultado esperado: { "velocidadMph": 0.0, "potenciaKw": 0.0, "alertaNeumaticos": false }

## Explicacion final
La solución funciona porque aplica multiplicadores de conversión física estandarizados internacionalmente y evalúa de manera paralela las restricciones de seguridad mecánica del hiperdeportivo.