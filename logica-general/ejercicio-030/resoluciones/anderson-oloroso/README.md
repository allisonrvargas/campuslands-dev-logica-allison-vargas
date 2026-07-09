# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) con instrucciones de un viaje.
  - Cada instrucción contiene:
    - `accion`: movimiento que debe realizar el viajero.
    - `distancia`: cantidad de kilómetros recorridos.
    - `tiempo`: duración de la acción.
    - `costo`: gasto generado por la acción.

- **Proceso:**
  - Validar que existan instrucciones.
  - Leer cada instrucción en orden.
  - Ejecutar la acción indicada.
  - Actualizar posición, tiempo acumulado y costo total.
  - Guardar un historial del recorrido.
  - Controlar acciones inválidas o desconocidas.

- **Salida:**
  - Un objeto con:
    - Distancia final recorrida.
    - Tiempo total del viaje.
    - Costo acumulado.
    - Cantidad de instrucciones procesadas.
    - Historial detallado de acciones.

## Reglas identificadas

1. El itinerario debe contener al menos una instrucción válida.

2. Los valores numéricos deben cumplir:

\[
Distancia \ge 0
\]

\[
Tiempo \ge 0
\]

\[
Costo \ge 0
\]

3. La acción **avanzar** modifica la posición:

\[
PosicionNueva = PosicionActual + Distancia
\]

4. La acción **regresar** modifica la posición:

\[
PosicionNueva = PosicionActual - Distancia
\]

5. La posición nunca puede ser negativa:

\[
Posicion \ge 0
\]

6. La acción **descansar** no modifica la posición, solamente aumenta tiempo y costo.

7. Cada instrucción debe procesarse en el orden recibido para respetar la secuencia del viaje.

8. Las acciones desconocidas o datos incorrectos se registran como errores sin detener el flujo.

## Pruebas

### Caso normal

Entrada:

```javascript
const instruccionesViaje = [
  {
    accion: "avanzar",
    distancia: 120,
    tiempo: 3,
    costo: 50
  },
  {
    accion: "descansar",
    distancia: 0,
    tiempo: 1,
    costo: 20
  },
  {
    accion: "regresar",
    distancia: 40,
    tiempo: 1,
    costo: 15
  }
];
```

Resultado esperado:

```javascript
{
  distanciaFinal: 80,
  tiempoTotal: 5,
  costoTotal: 85,
  cantidadInstrucciones: 3,
  historial: [
    {
      accion: "avanzar",
      resultado: "Se avanzaron 120 km",
      posicionActual: 120
    },
    {
      accion: "descansar",
      resultado: "Se realizó una pausa durante el viaje",
      posicionActual: 120
    },
    {
      accion: "regresar",
      resultado: "Se regresaron 40 km",
      posicionActual: 80
    }
  ]
}
```

### Caso borde

Entrada:

```javascript
const instruccionesViaje = [
  {
    accion: "regresar",
    distancia: 200,
    tiempo: 2,
    costo: 30
  }
];
```

Resultado esperado:

```javascript
{
  distanciaFinal: 0,
  tiempoTotal: 2,
  costoTotal: 30,
  cantidadInstrucciones: 1,
  historial: [
    {
      accion: "regresar",
      resultado: "Se regresaron 200 km",
      posicionActual: 0
    }
  ]
}
```

## Explicacion final

La solución interpreta un conjunto de instrucciones de viaje como una secuencia de pasos que deben ejecutarse en orden.

Cada acción modifica el estado del viaje: avanzar aumenta la distancia recorrida, regresar disminuye la posición y descansar únicamente afecta los recursos utilizados. Durante todo el proceso se acumulan datos importantes como tiempo y costo.

El algoritmo utiliza funciones, arreglos, ciclos, acumuladores y estructuras condicionales para simular un sistema de lectura de instrucciones capaz de procesar rutas turísticas y detectar errores en los datos recibidos.