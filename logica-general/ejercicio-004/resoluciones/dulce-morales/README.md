# Plantilla de solucion

## Analisis

- Entrada: Un objeto `sensor` con las propiedades `tipo` (texto), `voltajeLectura` (número) y `limiteMaximo` (número).
- Proceso: Validar que el voltaje de lectura no sea negativo y evaluar si la señal supera el límite tolerable para prevenir un cortocircuito o sobrecarga en el pin del microcontrolador.
- Salida: Un objeto con el estado de la señal analógica, si se encuentra en niveles de peligro o desbordamiento y si se debe activar el sistema de protección de hardware.

## Reglas identificadas

1. Regla de Sobretensión: Si el `voltajeLectura` es mayor o igual al `limiteMaximo`, el estado de la señal cambia a `"sobrecarga"` y la activación de protección debe ponerse en verdadero (`true`).
2. Regla de Ruido Eléctrico Absoluto: Si el voltaje es menor que cero, se clasifica como una anomalía física de la línea de datos y se interrumpe la lectura para proteger los registros de memoria.

## Pruebas

### Caso normal

Entrada:
sensor: {
  tipo: "Infrarrojo TCRT5000",
  voltajeLectura: 4.8,
  limiteMaximo: 3.3
}

Resultado esperado:
estadoSenal: "sobrecarga"
voltajeExcedido: 1.5
activarProteccion: true

### Caso borde

Entrada:
sensor: {
  tipo: "Ultrasonico HC-SR04",
  voltajeLectura: -1.2,
  limiteMaximo: 5.0
}

Resultado esperado:
estadoSenal: "error_voltaje_negativo"
voltajeExcedido: 0
activarProteccion: false

## Explicacion final

La solución funciona porque utiliza una estructura de control condicional que actúa como un fusible de software (Software Fuse). Al interceptar valores menores a cero voltios, descarta lecturas ruidosas que dañarían las operaciones aritméticas, y mediante una resta matemática simple determina la diferencia exacta de voltaje excedido para disparar los protocolos de mitigación de hardware de forma inmediata.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.