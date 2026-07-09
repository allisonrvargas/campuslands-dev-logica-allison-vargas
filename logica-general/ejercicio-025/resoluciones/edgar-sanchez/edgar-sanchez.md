# Plantilla de solucion

## Analisis
El problema se diseñó para implementar un sistema de filtrado automatizado en el software de inventario de una distribuidora de motocicletas. Cuando se gestiona un catálogo físico o digital de vehículos, es crucial clasificar las motocicletas según su cilindrada y su precio de venta para segmentar correctamente las estrategias de marketing o las cotizaciones de seguros, descartando los modelos que no cumplan con el perfil de búsqueda del cliente.

- Entrada: Una lista de objetos que representan motocicletas (cada una con `modelo` en texto, `cilindrada` en enteros y `precio` en flotante) y un criterio de cilindrada mínima requerida (entero).
- Proceso: 
  1. Validar que la lista de inventario contenga datos estructurados.
  2. Recorrer el arreglo aplicando un filtro condicional doble: clasificar motocicletas que alcancen o superen la cilindrada solicitada y cuyo costo no exceda un presupuesto estándar de gama (por ejemplo, $10,000).
- Salida: Una nueva lista optimizada que contenga únicamente los modelos que superaron con éxito los criterios de filtrado seleccionados.

## Reglas identificadas
1. Criterio de Selección de Motor: Una motocicleta califica en el filtro si su cilindrada de fábrica es mayor o igual al parámetro mínimo especificado por el cliente ($\text{cilindrada} \geq \text{cilindradaMinima}$).
2. Límite de Presupuesto del Filtro: Para esta campaña de inventario, se añade una condición de tope financiero automático; solo se listarán los vehículos cuyo precio sea menor o igual a $10,000.
3. Control de Catálogo Vacío: Si la lista de motocicletas de entrada no posee elementos registrados, el proceso retorna inmediatamente una lista vacía para evitar iteraciones innecesarias sobre punteros nulos.

## Pruebas

### Caso normal (Filtro exitoso)
Entrada: inventario = `[{modelo: "Scooter 150", cilindrada: 150, precio: 2500}, {modelo: "Sport 600", cilindrada: 600, precio: 8500}, {modelo: "Touring 1200", cilindrada: 1200, precio: 15000}]`, cilindradaMinima = 250
Resultado esperado: `[{modelo: "Sport 600", cilindrada: 600, precio: 8500}]` *(La Touring 1200 supera los $10,000 y se descarta)*

### Caso borde (Ninguna cumple)
Entrada: inventario = `[{modelo: "Moped 100", cilindrada: 100, precio: 1500}]`, cilindradaMinima = 250
Resultado esperado: `[]`

## Explicacion final
La solución funciona porque utiliza métodos iterativos funcionales para evaluar de manera lineal las propiedades mecánicas y comerciales de cada elemento, segregando los datos que satisfacen las restricciones combinadas de negocio.