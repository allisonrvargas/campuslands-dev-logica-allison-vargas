# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo de objetos (`inventarioReactivos`) donde cada elemento representa un compuesto químico con su nombre (`elemento`), la cantidad en gramos (`stockGramos`) y si es de manejo delicado (`esPeligroso`).
- **Proceso:** Validar que existan datos en la lista. Después, recorrer el inventario con un ciclo para examinar si las cantidades caen en niveles de riesgo o si están totalmente agotadas según el tipo de sustancia.
- **Salida:** Un objeto con el diagnóstico del laboratorio ("Inventario seguro" o "Alerta de reabastecimiento"), el conteo de materiales peligrosos en escasez y un mensaje con la lista de insumos que faltan.

## Reglas identificadas

1. **Filtro de Apertura:** Si no hay reactivos anotados en la lista de inventario, el programa se detiene avisando que no se puede trabajar por falta de insumos.
2. **Control Crítico de Peligro:** Si un compuesto es inflamable o tóxico (`esPeligroso: true`) y su cantidad baja de 50 gramos, se activa un reporte de emergencia de inmediato.
3. **Control de Insumo Agotado:** Cualquier elemento común que llegue a cero gramos se agrega a la lista de faltantes para mantener la continuidad de los experimentos.

## Pruebas

### Caso normal

Entrada:
```javascript
const inventarioReactivos = [
  { elemento: "Agua Destilada", stockGramos: 1000, esPeligroso: false },
  { elemento: "Ácido Sulfúrico", stockGramos: 250, esPeligroso: true },
  { elemento: "Cloruro de Sodio", stockGramos: 500, esPeligroso: false }
];
Resultado esperado:
JSON
{
  "estado": "Inventario seguro",
  "motivo": "Todos los reactivos químicos cuentan con los niveles de stock necesarios para trabajar."
}
Caso borde
Entrada:

JavaScript
const inventarioReactivos = [
  { elemento: "Agua Destilada", stockGramos: 800, esPeligroso: false },
  { elemento: "Ácido Clorhídrico", stockGramos: 20, esPeligroso: true },
  { elemento: "Nitrato de Potasio", stockGramos: 0, esPeligroso: false }
];
Resultado esperado
JSON
{
  "estado": "Alerta de reabastecimiento",
  "reactivosCriticosPeligrosos": 1,
  "detalles": "Se requiere compra urgente para: Ácido Clorhídrico (Stock crítico: 20g), Nitrato de Potasio (Agotado por completo)."
}
Explicacion final
La solución funciona muy bien porque controla el inventario de reactivos químicos revisando la lista uno por uno de forma rápida y automática. Al usar condiciones sencillas, el programa puede diferenciar entre sustancias comunes y peligrosas, asegurándose de pedir reabastecimiento urgente si los químicos delicados bajan de los 50 gramos o si algo se acaba por completo. De esta manera, el laboratorio siempre sabe qué materiales hacen falta para sus fórmulas, evitando detener los experimentos y manteniendo el lugar seguro.