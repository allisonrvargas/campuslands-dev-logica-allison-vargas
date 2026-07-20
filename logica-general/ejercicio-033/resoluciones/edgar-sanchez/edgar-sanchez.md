# Plantilla de solucion: Problema 33

## Analisis
El problema consiste en diseñar el sistema informático de control para un software de salto en paracaidismo deportivo y militar. El software procesa la telemetría en tiempo real recibida desde el altímetro y el sensor de velocidad de caída para emitir alertas automatizadas y gestionar la activación del Dispositivo de Apertura Automática (AAD) de emergencia en caso de que el paracaidista sufra un desmayo o pierda la noción del tiempo. El algoritmo debe resolver múltiples escenarios combinando la altitud, la velocidad terminal y las condiciones atmosféricas.

- Entrada: Altitud actual en pies (entero), velocidad de caída en $\text{km/h}$ (entero), y el tipo de salto (texto: `"Manual"`, `"Tándem"`, `"Militar"`).
- Proceso:
  1. Validar que la altitud y la velocidad de caída sean coherentes (no negativas).
  2. Evaluar de forma exhaustiva los umbrales críticos de altitud.
  3. Resolver los casos de activación por velocidad: si la velocidad es extremadamente alta a una altitud baja, se determina una falla de apertura y el sistema de emergencia debe activarse.
- Salida: Un objeto que indica el estado del salto ("Seguro", "Despliegue Obligatorio", "Activación de Emergencia (AAD)" o "Error").

## Reglas identificadas
1. Caso de Altitud de Seguridad Alta ($> 4500 \text{ pies}$): Si la altitud es superior a los 4500 pies, el paracaidista se encuentra en zona de planeo o caída libre controlada. El estado es `"Seguro"`, a menos que la velocidad supere los $250 \text{ km/h}$ en salto `"Manual"`, lo que activa una advertencia de velocidad de arrastre alta.
2. Caso de Altitud de Despliegue Crítico ($1500 \text{ pies} \leq \text{Altitud} \leq 4500 \text{ pies}$): Es la ventana obligatoria de apertura.
   - Si la velocidad es menor o igual a $60 \text{ km/h}$, significa que el paracaídas principal ya está abierto: Estado `"Seguro"`.
   - Si la velocidad es superior a $60 \text{ km/h}$, el estado es `"Despliegue Obligatorio"`.
3. Caso de Activación de Emergencia AAD ($< 1500 \text{ pies}$): Si el paracaidista cae por debajo de los 1500 pies y su velocidad sigue siendo superior a los $100 \text{ km/h}$, el sistema asume un fallo total del paracaídas principal y el de reserva, ordenando la `"Activación de Emergencia (AAD)"`.
4. Control de Consistencia: Si la altitud es menor a 0 o el tipo de salto no es uno de los tres permitidos, el sistema retorna `"Error"`.

## Pruebas

### Caso 1: Caída libre controlada a gran altura
Entrada: altitud = 6000, velocidad = 190, tipoSalto = "Manual"
Resultado esperado: { "estadoSeguridad": "Seguro", "accionRequerida": "Mantener posición" }

### Caso 2: Ventana de despliegue obligatoria
Entrada: altitud = 3000, velocidad = 200, tipoSalto = "Tándem"
Resultado esperado: { "estadoSeguridad": "Despliegue Obligatorio", "accionRequerida": "Abrir paracaídas principal inmediatamente" }

### Caso 3: Activación de emergencia (AAD)
Entrada: altitud = 1200, velocidad = 180, tipoSalto = "Militar"
Resultado esperado: { "estadoSeguridad": "Activación de Emergencia (AAD)", "accionRequerida": "Disparar paracaídas de reserva" }

## Explicacion final
La solución funciona porque segmenta el espacio aéreo en rangos de altitud e interseca cada franja con vectores de velocidad límite, resolviendo de manera jerárquica cada caso de uso para salvaguardar la vida del atleta.