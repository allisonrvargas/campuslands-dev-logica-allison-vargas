# Plantilla de solucion

## Analisis

- Entrada: Un objeto `solicitudTatuaje` con las propiedades `cliente` (texto), `edad` (número), `tieneConsentimientoFirmado` (booleano) y `zonaCuerpo` (texto).
- Proceso: Evaluar los datos de la solicitud mediante reglas lógicas y de salud para diagnosticar si existen errores en el registro o impedimentos legales antes de proceder con el procedimiento en el estudio.
- Salida: Un objeto que indica si la solicitud contiene errores, el tipo de diagnóstico ("aprobado" o el error específico hallado) y el motivo detallado de la resolución.

## Reglas identificadas

1. Regla de Mayoría de Edad Absoluta: Si el cliente tiene menos de `18` años y la propiedad `tieneConsentimientoFirmado` es falsa (`false`), el sistema debe diagnosticar un error crítico de tipo `"error_legal_edad"`.
2. Regla de Zonas Restringidas del Estudio: Si la `zonaCuerpo` es igual a "rostro" o "cuello" y el cliente no posee un registro previo de tatuajes (o no cumple la normativa interna del local), se diagnostica un `"error_zona_restringida"`, bloqueando la sesión de forma preventiva.

## Pruebas

### Caso normal

Entrada:
solicitudTatuaje: {
  cliente: "Esteban Ruiz",
  edad: 24,
  tieneConsentimientoFirmado: true,
  zonaCuerpo: "antebrazo"
}

Resultado esperado:
tieneErrores: false
tipoDiagnostico: "aprobado"
motivo: "La solicitud de Esteban Ruiz cumple con todos los requisitos de edad, documentación legal y parámetros de zona del cuerpo establecidos."

### Caso borde

Entrada:
solicitudTatuaje: {
  cliente: "Kevin Sosa",
  edad: 16,
  tieneConsentimientoFirmado: false,
  zonaCuerpo: "espalda"
}

Resultado esperado:
tieneErrores: true
tipoDiagnostico: "error_legal_edad"
motivo: "Diagnóstico: El cliente Kevin Sosa es menor de edad y no cuenta con el consentimiento firmado por sus tutores legales."

## Explicacion final

La solución funciona porque opera como un validador preventivo de riesgos biológicos y legales en un entorno de modificación corporal. Al organizar los condicionales en un orden de jerarquía estricto (anteponiendo la edad legal y las firmas de deslinde de responsabilidades), el script diagnostica de manera precisa cualquier omisión en el protocolo sanitario del estudio de tatuajes antes de preparar las tintas o las agujas.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.