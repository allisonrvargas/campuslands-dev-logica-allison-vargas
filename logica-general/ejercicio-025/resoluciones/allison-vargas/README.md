# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo de objetos (`listaVehiculos`) donde cada uno representa un auto con su número de identificación (`placa`), el problema reportado (`tipoFalla`) y si es un transporte prioritario (`esEmergencia`).
- **Proceso:** Validar que la lista de ingreso no esté vacía. Posteriormente, agrupar las órdenes en tres categorías independientes de acuerdo con la severidad del riesgo mecánico o el rol del vehículo, y unirlas manteniendo la jerarquía de urgencia.
- **Salida:** Un arreglo unificado y ordenado de forma secuencial donde los carros con mayor peligro técnico o de salud pública ocupan los primeros turnos del taller.

## Reglas identificadas

1. **Filtro de Inactividad:** Si el taller arranca el día sin carros registrados en la cola, el sistema se detiene y notifica que no hay trabajo por secuenciar.
2. **Turno de Emergencia y Seguridad:** Cualquier ambulancia, patrulla o automóvil que ingrese con fallas en los sistemas de frenado salta automáticamente al primer lugar de atención para evitar accidentes o retrasar servicios públicos.
3. **Jerarquía de Mecánica:** Los daños graves del motor se atienden inmediatamente después de las emergencias, dejando las revisiones estéticas o cambios de fluidos comunes en los últimos puestos de la jornada.

## Pruebas

### Caso normal

Entrada:
```javascript
const listaVehiculos = [
  { placa: "M-521ABC", tipoFalla: "Cambio de Aceite", esEmergencia: false },
  { placa: "M-990XYZ", tipoFalla: "Motor", esEmergencia: false },
  { placa: "AMB-123", tipoFalla: "Chequeo general", esEmergencia: true },
  { placa: "M-112DEF", tipoFalla: "Frenos", esEmergencia: false }
];
Resultado esperado:
JSON
[
  { "placa": "AMB-123", "falla": "Chequeo general", "nivel": "Crítica" },
  { "placa": "M-112DEF", "falla": "Frenos", "nivel": "Crítica" },
  { "placa": "M-990XYZ", "falla": "Motor", "nivel": "Alta" },
  { "placa": "M-521ABC", "falla": "Cambio de Aceite", "nivel": "Normal" }
]
Caso borde
Entrada:

JavaScript
const listaVehiculos = [];
Resultado esperado
JSON
{
  "estado": "Taller vacío",
  "motivo": "No hay vehículos registrados en la lista de espera para ordenar."
}
Explicacion final
La solución funciona muy bien porque distribuye los turnos del taller mecánico de una forma sumamente inteligente y segura. Al clasificar los autos en tres bandejas distintas según la gravedad de su situación, el programa garantiza que los mecánicos reparen primero las ambulancias o los carros sin frenos antes de pasar a revisar problemas de motor o realizar un mantenimiento simple. Al final, junta las listas en el orden correcto, logrando que el taller trabaje con organización y salve vidas al priorizar los casos más peligrosos.