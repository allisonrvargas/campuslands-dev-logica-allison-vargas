# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo ordenado de objetos (`pasosMision`) que contiene las fases consecutivas de un viaje espacial junto con el estado de sus servidores o motores (`sistemaEstable`).
- **Proceso:** Validar que el plan de viaje cuente con fases registradas. Recorrer la secuencia paso a paso utilizando un bucle `for` clásico; si se detecta un fallo en el entorno actual, la simulación se interrumpe para impedir que se ejecuten las acciones siguientes.
- **Salida:** Un informe de la base espacial detallando si el trayecto fue completado con éxito o fallido, indicando la bitácora de navegación con las fases que sí se lograron procesar.

## Reglas identificadas

1. **Filtro de Lanzamiento:** Si el itinerario de vuelo no cuenta con ninguna instrucción o viene vacío, la misión se declara como cancelada para resguardar la seguridad de la tripulación.
2. **Dependencia de Flujo Secuencial:** En las tramas de ciencia ficción, no se puede aterrizar sin antes haber despegado. Si una fase del medio falla, el ciclo se rompe con un `break` impidiendo que continúen los demás pasos.
3. **Registro de Bitácora:** Cada etapa analizada debe guardar una cadena de texto personalizada indicando si se superó la prueba o si se produjo un incidente técnico crítico.

## Pruebas

### Caso normal

Entrada:
```javascript
const pasosMision = [
  { fase: "Despegue Planetario", sistemaEstable: true },
  { fase: "Salto Hiperespacial", sistemaEstable: true },
  { fase: "Inserción Orbital", sistemaEstable: true }
];
Resultado esperado:
JSON
{
  "estado": "Misión exitosa",
  "secuenciaEjecutada": [
    "[ÉXITO] Fase de Despegue Planetario completada al 100%.",
    "[ÉXITO] Fase de Salto Hiperespacial completada al 100%.",
    "[ÉXITO] Fase de Inserción Orbital completada al 100%."
  ],
  "motivo": "Todos los pasos de la navegación espacial se completaron en el orden correcto y sin anomalías."
}
Caso borde
Entrada:

JavaScript
const pasosMision = [
  { fase: "Despegue Planetario", sistemaEstable: true },
  { fase: "Salto Hiperespacial", sistemaEstable: false },
  { fase: "Aterrizaje Seguro", sistemaEstable: true }
];
Resultado esperado
JSON
{
  "estado": "Misión fallida",
  "faseDelIncidente": "Salto Hiperespacial",
  "secuenciaEjecutada": [
    "[ÉXITO] Fase de Despegue Planetario completada al 100%.",
    "[FALLO EN SISTEMA] El flujo se detuvo críticamente en: Fase de Salto Hiperespacial."
  ],
  "motivo": "El protocolo de ciencia ficción exige abortar el flujo si un subsistema no está estable."
}
Explicacion final
La solución funciona muy bien porque evalúa el viaje espacial paso a paso, tal como sucedería en una película de ciencia ficción. Al utilizar un ciclo inteligente, el programa revisa la estabilidad de la nave en cada fase. Si detecta que los motores o escudos fallan en alguna etapa, cancela el viaje inmediatamente y guarda el historial de lo que pasó. Esto simula a la perfección un protocolo de emergencia cibernético, asegurando que la historia no salte a fases imposibles si la nave se ha quedado atrapada a mitad de camino.