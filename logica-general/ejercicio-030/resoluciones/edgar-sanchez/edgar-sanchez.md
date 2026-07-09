# Plantilla de solucion: Problema 30

## Analisis
El problema consiste en diseñar un procesador lógico automatizado para agencias de viajes que interpreta un bloque secuencial de instrucciones, restricciones de visado y condiciones climáticas de un itinerario multidestino antes de emitir los pases de abordar. El sistema debe procesar las directrices de viaje paso a paso para evitar que un turista quede varado en una frontera debido a un orden incorrecto de transbordo o por la falta de un requerimiento legal imprevisto.

- Entrada: Una lista de instrucciones de viaje (lista de textos como `"Check-in"`, `"Control de Visas"`, `"Embarque"`, `"Escala"`), el tipo de pasaporte del viajero (texto: `"Regular"`, `"Diplomático"`) y una bandera de alerta de clima severo en el destino (booleano).
- Proceso:
  1. Validar la consistencia estructural del paquete de instrucciones.
  2. Evaluar secuencialmente cada instrucción aplicando filtros de contingencia específicos para el tipo de documento del pasajero.
  3. Modificar o abortar el flujo si se lee una instrucción crítica bajo condiciones climáticas adversas.
- Salida: Un objeto de diagnóstico con el estado final del itinerario (`"Autorizado"`, `"Reprogramado"` o `"Denegado"`) y un conteo de los controles superados con éxito.

## Reglas identificadas
1. Flujo Legal Obligatorio (Control de Visas): Si la lista contiene la instrucción `"Control de Visas"`, los pasajeros con pasaporte `"Regular"` deben pasar el filtro. Si el pasaporte es `"Diplomático"`, este paso se aprueba automáticamente como exento. Si el pasaporte es un valor no reconocido, el flujo se marca como `"Denegado"`.
2. Restricción Meteorológica en Embarque: Si se procesa la instrucción `"Embarque"` y la bandera de `climaSevero` está activa (`true`), el estado del viaje cambia automáticamente a `"Reprogramado"` por motivos de seguridad aérea.
3. Secuencia Lógica de Aeropuerto: No se puede ejecutar `"Embarque"` si no se ha registrado previamente la instrucción de `"Check-in"` en algún punto anterior de la lista de instrucciones. De ocurrir este salto, el flujo se cataloga como `"Denegado"`.

## Pruebas

### Caso 1: Itinerario autorizado estándar
Entrada: instrucciones = ["Check-in", "Control de Visas", "Embarque"], tipoPasaporte = "Regular", climaSevero = false
Resultado esperado: { "estadoItinerario": "Autorizado", "controlesAprobados": 3 }

### Caso 2: Cancelación / Reprogramación por tormenta
Entrada: instrucciones = ["Check-in", "Embarque"], tipoPasaporte = "Diplomático", climaSevero = true
Resultado esperado: { "estadoItinerario": "Reprogramado", "controlesAprobados": 1 }

### Caso 3: Denegado por saltarse el Check-in
Entrada: instrucciones = ["Embarque"], tipoPasaporte = "Regular", climaSevero = false
Resultado esperado: { "estadoItinerario": "Denegado", "controlesAprobados": 0 }

## Explicacion final
La solución funciona porque implementa un procesador iterativo con memoria de estados anteriores (banderas de seguimiento como `checkInHecho`), permitiendo interceptar anomalías operacionales y legales antes de validar el viaje.