# Plantilla de solucion

## Analisis

- **Entrada:** Un objeto (`pasajero`) que almacena las variables de estado de un cliente de turismo, tales como su nombre, tipo de destino ("Nacional" o "Internacional"), validez de pasaporte y cobertura de seguro médico.
- **Proceso:** Validar la integridad del objeto de entrada. Posteriormente, ejecutar comparaciones lógicas cruzadas basadas en las instrucciones de la agencia turística (ej: evaluar la coincidencia de un viaje internacional con la ausencia de seguro médico).
- **Salida:** Un objeto con la acción inmediata a ejecutar ("Aprobar pase de abordar", "Rechazar reserva" o "Retener equipaje") y el motivo descriptivo que justifica el control.

## Reglas identificadas

1. **Obligatoriedad de Identificación:** Bajo ninguna circunstancia se permite el procesamiento de abordaje si la propiedad `pasaporteValido` es falsa o no está definida.
2. **Instrucción de Frontera:** Las reservas catalogadas con destino "Internacional" añaden de forma obligatoria la cláusula de validación para la propiedad `seguroMedico`.
3. **Control de Flujo Limpio:** Si el pasajero cuenta con toda la documentación en regla, se emite un dictamen aprobatorio liberando el pase de viaje inmediatamente.

## Pruebas

### Caso normal

Entrada:
```javascript
const pasajero = {
  nombre: "Allison Vargas",
  destino: "Internacional",
  pasaporteValido: true,
  seguroMedico: true
};
Resultado esperado:
JSON
{
  "accion": "Aprobar pase de abordar",
  "motivo": "El pasajero Allison Vargas cumple con todas las instrucciones de documentación del operador turístico."
}
Caso borde
Entrada:

JavaScript
const pasajero = {
  nombre: "Turista Despistado",
  destino: "Internacional",
  pasaporteValido: true,
  seguroMedico: false
};
Resultado esperado
JSON
{
  "accion": "Retener equipaje",
  "motivo": "Instrucción incumplida: Los vuelos internacionales exigen una póliza de seguro médico activa."
}
Explicacion final
La solución es efectiva porque aborda el análisis de reglas de negocio mediante condicionales jerárquicos y el uso de variables booleanas explícitas (tienePasaporte, destinoInternacional). Al estructurar la lógica con retornos rápidos (early returns), evitamos que un pasajero sin pasaporte avance a evaluar cláusulas secundarias como el seguro, modelando fielmente un puesto de control real en un aeropuerto y garantizando un código óptimo, robusto