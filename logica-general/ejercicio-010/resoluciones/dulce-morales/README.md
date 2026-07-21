# Plantilla de solucion

## Analisis

- Entrada: Un objeto `itinerarioViaje` con las propiedades `destino` (texto), `esVueloInternacional` (booleano), `horasAntesAbordaje` (número) y `tieneVisaRequerida` (booleano).
- Proceso: Verificar si el pasajero leyó y aplicó correctamente las instrucciones obligatorias de la aerolínea respecto al tiempo de anticipación en el aeropuerto y la documentación migratoria.
- Salida: Un objeto que indica si el pasajero tiene permitido el abordaje, el estado de su documentación y el motivo de la resolución técnica.

## Reglas identificadas

1. Regla de Documentación Migratoria: Si el destino `esVueloInternacional` es verdadero (`true`) y la propiedad `tieneVisaRequerida` es falsa (`false`), el acceso al avión se deniega inmediatamente por incumplimiento de leyes internacionales.
2. Regla de Puntualidad e Instrucciones: Para vuelos internacionales se exige un mínimo de `3` horas de anticipación en la terminal, y para vuelos nacionales un mínimo de `2` horas. Si `horasAntesAbordaje` es menor al límite requerido, el pasajero pierde el vuelo por llegar tarde.

## Pruebas

### Caso normal

Entrada:
itinerarioViaje: {
  destino: "Madrid",
  esVueloInternacional: true,
  horasAntesAbordaje: 4,
  tieneVisaRequerida: true
}

Resultado esperado:
permitirAbordaje: true
estadoPasajero: "listo_para_embarcar"
motivo: "El pasajero cumplió con las instrucciones: llegó con la anticipación mínima de 3 horas para vuelos internacionales y cuenta con su documentación migratoria al día."

### Caso borde

Entrada:
itinerarioViaje: {
  destino: "Tokio",
  esVueloInternacional: true,
  horasAntesAbordaje: 1,
  tieneVisaRequerida: true
}

Resultado esperado:
permitirAbordaje: false
estadoPasajero: "vuelo_perdido_por_tiempo"
motivo: "Abordaje denegado. No se siguieron las instrucciones de la aerolínea: se presentó con 1 hora(s) de anticipación, omitiendo el mínimo de 3 horas requerido para rutas internacionales."

## Explicacion final

La solución funciona porque actúa como un filtro inteligente de políticas de embarque aeroportuario. El script contrasta los datos cronológicos de llegada al aeropuerto contra los requerimientos del tipo de ruta (nacional o internacional). Al anteponer las restricciones legales de visado y el reloj de la puerta de embarque, la lógica evita cuellos de botella migratorios y asegura que solo los viajeros que leyeron correctamente las instrucciones puedan abordar.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.