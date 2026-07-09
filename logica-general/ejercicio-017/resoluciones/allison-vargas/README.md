# Plantilla de solucion

## Analisis

- **Entrada:** Un objeto (`proyecto`) que agrupa las necesidades de modelado: la zona a diseñar (`tipoDiseno`), el capital disponible (`presupuestoAlto`) y la exigencia de fidelidad visual (`requiereRealismo`).
- **Proceso:** Validar la entrada de datos. Luego, contrastar simultáneamente las tres variables del plano contra una tabla interna de opciones para encontrar la combinación tecnológica adecuada.
- **Salida:** Un objeto con la respuesta definitiva del motor de renderizado idóneo, la calidad de texturas aprobada y un mensaje claro con la justificación comercial de la elección.

## Reglas identificadas

1. **Filtro de Requisitos:** Si los datos del plano están ausentes, el flujo se detiene para evitar configurar motores gráficos con valores vacíos.
2. **Prioridad de Alta Gama:** Los renders exteriores con alto presupuesto y necesidad de realismo quedan asignados automáticamente al motor de simulación de iluminación en tiempo real más potente.
3. **Optimización por Defecto:** Cualquier plano que no cumpla con los requisitos más altos o sea una muestra preliminar se deriva a herramientas de renderizado rápido para ahorrar tiempo y recursos de cómputo.

## Pruebas

### Caso normal

Entrada:
```javascript
const proyecto = {
  tipoDiseno: "Exterior",
  presupuestoAlto: true,
  requiereRealismo: true
};
Resultado esperado:
JSON
{
  "decision": "Motor Avanzado Seleccionado",
  "motor": "Unreal Engine 5",
  "texturas": "8K / Lumens",
  "motivo": "Se asigna la máxima calidad para renders exteriores de gran presupuesto con hiperrealismo."
}
Caso borde
Entrada:

JavaScript
const proyecto = {
  tipoDiseno: "Interior",
  presupuestoAlto: false,
  requiereRealismo: false
};
Resultado esperado
JSON
{
  "decision": "Motor Básico Seleccionado",
  "motor": "SketchUp / Twinmotion",
  "texturas": "2K estándar",
  "motivo": "Ideal para previsualizaciones rápidas o maquetas preliminares sin altos costos de cómputo."
}
Explicacion final
La solución funciona muy bien porque cruza varias condiciones al mismo tiempo de manera muy ordenada. Al usar una lógica donde se combinan el tipo de diseño, el dinero disponible y la calidad buscada, el programa puede elegir la herramienta correcta sin equivocarse. Esto ayuda a que el arquitecto reciba automáticamente el software perfecto para trabajar, asignando los programas pesados solo cuando hay presupuesto y dejando los fáciles para maquetas rápidas.