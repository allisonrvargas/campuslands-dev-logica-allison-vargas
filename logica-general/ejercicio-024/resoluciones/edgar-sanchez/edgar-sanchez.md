# Plantilla de solucion

## Analisis
El problema se diseñó para implementar un motor de filtrado avanzado de datos para el inventario de una concesionaria de motocicletas de alta gama. A diferencia de un filtro simple, el sistema debe evaluar simultáneamente múltiples criterios técnicos, económicos y logísticos (tipo de transmisión, rango de precio y disponibilidad inmediata de stock) para generar catálogos personalizados destinados a clientes potenciales, descartando registros incompletos o con incongruencias en sus atributos comerciales.

- Entrada: Una lista de objetos que representan motocicletas (con atributos `modelo`, `transmision` ["Manual" o "Automática"], `precio`, y `unidadesDisponibles`), un rango de presupuesto (`precioMinimo` y `precioMaximo`), y un requerimiento de transmisión específica.
- Proceso: 
  1. Validar la coherencia de los rangos de precios de búsqueda.
  2. Iterar sobre el inventario y aplicar filtros concurrentes: la motocicleta debe coincidir exactamente con el tipo de transmisión solicitado, su precio debe caer dentro del rango inclusivo y debe contar con al menos una unidad disponible en piso de venta (stock activo).
- Salida: Una lista de motocicletas que cumplen simultáneamente con todas las condiciones del perfil de búsqueda del cliente.

## Reglas identificadas
1. Validación del Rango de Cotización: El `precioMaximo` de búsqueda debe ser estrictamente mayor o igual al `precioMinimo`, y ambos deben ser mayores a cero. Si el rango es incoherente, el proceso se aborta devolviendo una lista vacía.
2. Filtro Multivariable Concurrente: Para que una motocicleta sea incluida en el resultado final, debe cumplir simultáneamente las siguientes condiciones lógicas:
   - Tipo de transmisión idéntico al solicitado (insensible a mayúsculas/minúsculas).
   - Precio en el intervalo cerrado: $\text{precioMinimo} \leq \text{precio} \leq \text{precioMaximo}$.
   - Disponibilidad física activa: $\text{unidadesDisponibles} > 0$.
3. Exclusión de Modelos en Exhibición o Agotados: Aunque un modelo se encuentre en el rango de precio y tipo de transmisión perfectos, si sus `unidadesDisponibles` son iguales a 0, queda estrictamente excluido del catálogo final editable.

## Pruebas

### Caso normal (Múltiples motos con coincidencia parcial)
Entrada: 
- inventario: `[{"modelo": "M1", "transmision": "Manual", "precio": 5000, "unidadesDisponibles": 3}, {"modelo": "M2", "transmision": "Manual", "precio": 12000, "unidadesDisponibles": 5}, {"modelo": "M3", "transmision": "Manual", "precio": 7000, "unidadesDisponibles": 0}]`
- precioMinimo = 4000, precioMaximo = 9000, transmisionRequerida = "Manual"
Resultado esperado: `[{"modelo": "M1", "transmision": "Manual", "precio": 5000, "unidadesDisponibles": 3}]` *(M2 fuera de precio, M3 sin stock)*

### Caso borde (Rango de precio erróneo)
Entrada: inventario = `[...]`, precioMinimo = 8000, precioMaximo = 5000, transmisionRequerida = "Automática"
Resultado esperado: `[]`

## Explicacion final
La solución funciona porque utiliza estructuras condicionales compuestas (`and` / `&&`) que actúan como compuertas lógicas estrictas de filtrado lineal, evaluando de forma simultánea el estado comercial de cada registro en el arreglo.