# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo de objetos (`instruccionesViaje`) que detalla los países a visitar con sus respectivas restricciones, y un objeto (`datosTurista`) que contiene el dinero y los visados del cliente.
- **Proceso:** Validar que las colecciones no estén vacías. Usar un bucle para recorrer los destinos de forma secuencial y aplicar condicionales que verifiquen si el usuario cumple con la documentación o el presupuesto requerido por el país actual.
- **Salida:** Un informe de la agencia indicando si el plan fue "Viaje Autorizado" o "Itinerario Rechazado", especificando el país donde se generó el problema y el dinero sobrante.

## Reglas identificadas

1. **Filtro de Control Inicial:** Si no se ingresa un mapa de destinos o faltan los datos del viajero, la evaluación se cancela para evitar reservas inválidas en el sistema.
2. **Control Migratorio:** Si un país de la lista exige visa de forma obligatoria y el turista no cuenta con ella, el viaje se frena por completo en ese punto exacto.
3. **Control Financiero:** Cada destino visitado consume presupuesto del turista de forma acumulativa. Si el costo de la parada actual supera los fondos restantes del usuario, la ruta se interrumpe inmediatamente.

## Pruebas

### Caso normal

Entrada:
```javascript
const instruccionesViaje = [
  { pais: "España", requiereVisa: false, costoMinimoUSD: 500 },
  { pais: "Francia", requiereVisa: false, costoMinimoUSD: 600 }
];

const datosTurista = { tieneVisaAprobada: false, presupuestoDisponibleUSD: 2000 };
Resultado esperado:
JSON
{
  "estado": "Viaje Autorizado",
  "motivo": "El turista leyó y cumplió con todas las instrucciones y requisitos de la ruta.",
  "resumenRuta": [
    "[APROBADO] Entrada permitida a España.",
    "[APROBADO] Entrada permitida a Francia."
  ],
  "presupuestoRestante": "$900"
}
Caso borde
Entrada:

JavaScript
const instruccionesViaje = [
  { pais: "Italia", requiereVisa: false, costoMinimoUSD: 800 },
  { pais: "Suiza", requiereVisa: false, costoMinimoUSD: 1500 }
];

const datosTurista = { tieneVisaAprobada: false, presupuestoDisponibleUSD: 1000 };
Resultado esperado
JSON
{
  "estado": "Itinerario">,
  "puntoDeQuiebre": "Suiza",
  "motivo": "Fondos insuficientes. Se requieren $1500 y solo dispone de $200.",
  "destinosAlcanzados": [
    "[APROBADO] Entrada permitida a Italia."
  ]
}
Explicacion final
La solución funciona muy bien porque simula las revisiones de un aeropuerto real que evalúa un itinerario de viaje paso a paso. Al procesar los destinos en orden con un ciclo, el programa se asegura de que el turista tenga los papeles al día y el presupuesto necesario para cada parada. Si el dinero se acaba a mitad del viaje o le falta una visa, el código detiene la secuencia al instante y reporta exactamente en qué país falló, garantizando una planificación de vacaciones segura, transparente y sin sorpresas en las escalas.