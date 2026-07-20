# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo de objetos `pedidos`, donde cada uno contiene `cliente`, `tipo` y `esperaMin`.
* **Proceso**: Evaluación jerárquica que prioriza clientes VIP con más de 15 minutos de espera; de lo contrario, selecciona al cliente regular con el mayor tiempo de espera.
* **Salida**: Un objeto que indica el cliente a `atender`, el nivel de `prioridad` y un estado de `urgente` (booleano).

## Reglas identificadas

1. Un cliente VIP es atendido preferencialmente si su `esperaMin` es mayor a 15.
2. Si no hay clientes VIP prioritarios, se selecciona el cliente "regular" con el tiempo de espera más alto.
3. Un pedido es considerado "urgente" si el tiempo de espera supera los 30 minutos.

## Pruebas

### Caso normal

* **Entrada**: `pedidos: [{ cliente: "Ana", tipo: "regular", esperaMin: 20 }, { cliente: "Luis", tipo: "vip", esperaMin: 20 }]`
* **Resultado esperado**: `{ atender: "Luis", prioridad: "VIP - Alta", urgente: false }`

### Caso borde

* **Entrada**: `pedidos: [{ cliente: "Ana", tipo: "regular", esperaMin: 40 }]`
* **Resultado esperado**: `{ atender: "Ana", prioridad: "Regular", urgente: true }`

## Explicacion final

La solución funciona mediante una estrategia de "cortocircuito": primero intenta satisfacer la condición VIP, que es la más estricta. Al no cumplirse, el algoritmo transita a una lógica de filtrado y ordenamiento para los clientes regulares, garantizando siempre una respuesta procesable sin errores de referencia.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Condición VIP**: `p.tipo === "vip" && p.esperaMin > 15`.
* **Condición Regular**: `p.tipo === "regular"`.
* **Condición Urgencia**: `esperaMin > 30`.