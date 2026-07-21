
Conversación con Gemini
Tematica usada

viajes y turismo



Estas trabajando como estudiante de Campuslands en un reto de viajes y turismo



Objetivo

Crear una solucion que reciba datos, aplique reglas y entregue un resultado verificable. La solucion puede hacerse en JavaScript, Python, pseudocodigo o Markdown tecnico, segun indique el instructor.



crea el archivo js donde llevara la solucion



esto es lo que tiene que llevar el readme

2. Identifica las entradas: datos que recibe tu solucion.

3. Identifica las salidas: resultado que debes entregar. 

¡Hola! Como compañero estudiante de Campuslands, he estructurado la solución para el reto de Viajes y Turismo. Para este caso, he diseñado un sistema de "Calculadora de Presupuesto y Selección de Paquete Turístico", un escenario común que cumple con el objetivo de recibir datos, aplicar lógica de negocio y entregar un resultado verificable.

1. Archivo de solución (turismo.js)
JavaScript
/**
 * Reto Campuslands: Sistema de Gestión de Viajes
 * Lógica: Calcula el costo total de un viaje aplicando descuentos 
 * por temporada y cantidad de personas.
 */

function calcularViaje(destino, adultos, ninos, temporada) {
    const preciosBase = { "playa": 500, "montana": 400, "ciudad": 600 };
    
    // 1. Validación de entrada
    if (!preciosBase[destino]) return "Destino no disponible";

    let costoBase = (adultos * preciosBase[destino]) + (ninos * (preciosBase[destino] * 0.5));
    let descuento = 0;

    // 2. Aplicación de reglas de negocio
    if (temporada === "baja") {
        descuento = 0.20; // 20% descuento temporada baja
    }
    
    if ((adultos + ninos) > 5) {
        descuento += 0.05; // 5% extra por grupo grande
    }

    const total = costoBase * (1 - descuento);

    // 3. Resultado
    return {
        destino: destino,
        pasajeros: adultos + ninos,
        costoOriginal: costoBase,
        descuentoAplicado: (descuento * 100) + "%",
        totalAPagar: total.toFixed(2)
    };
}

// Ejemplo de uso:
console.log(calcularViaje("playa", 2, 2, "baja"));
2. Identificación de Entradas
Para que nuestra solución procese la información correctamente, requiere los siguientes datos:

destino (String): El lugar al que desea viajar (ej: "playa", "montana", "ciudad").

adultos (Number): Cantidad de personas mayores de 12 años.

ninos (Number): Cantidad de menores de 12 años (tienen una tarifa reducida al 50%).

temporada (String): Indica si es "alta" o "baja" para aplicar la lógica de precios.

3. Identificación de Salidas
El sistema procesará las entradas y devolverá un objeto con la información detallada para el usuario:

destino: Confirmación del lugar seleccionado.

pasajeros: Total de personas en la reserva.

costoOriginal: El valor antes de aplicar cualquier promoción.

descuentoAplicado: El porcentaje total de descuento obtenido tras evaluar las reglas.

totalAPagar: El valor final verificado que debe pagar el cliente.

¿Te gustaría que añadamos alguna regla adicional, como la validación de fechas o límites de cupos por destino?

hace falta el arhivo merckdown

¡Claro que sí! Aquí tienes el archivo README.md estructurado específicamente para tu reto de Campuslands, incluyendo las secciones solicitadas.

Tu archivo README.md está listo:
Ícono de MD
README
 MD 
Abrir

Contenido del archivo generado:
Reto de Viajes y Turismo - Campuslands
Descripción
Esta solución está diseñada para gestionar cotizaciones de viajes turísticos, aplicando reglas de negocio sobre los costos base, la cantidad de pasajeros y la temporada del año.

2. Identificación de Entradas
Los datos que recibe la función calcularViaje son:

destino (String): El lugar al que desea viajar (ej: "playa", "montana", "ciudad").

adultos (Number): Cantidad de personas mayores de 12 años.

ninos (Number): Cantidad de menores de 12 años.

temporada (String): Indica si es "alta" o "baja".

3. Identificación de Salidas
El sistema retorna un objeto JSON con el resultado verificado:

destino: Confirmación del lugar seleccionado.

pasajeros: Conteo total de personas en la reserva.

costoOriginal: Valor calculado antes de aplicar promociones.

descuentoAplicado: Porcentaje de descuento resultante de las reglas de negocio.

totalAPagar: Monto final a cobrar.

Reglas de Negocio Implementadas
Tarifa Infantil: Los niños pagan el 50% de la tarifa base del destino.

Temporada Baja: Descuento del 20% sobre el costo total.

Descuento por Grupo: Si la suma de pasajeros es mayor a 5, se añade un 5% de descuento adicional.




Gemini es una IA y puede cometer errores.

# Reto de Viajes y Turismo - Campuslands

## Descripción
Esta solución está diseñada para gestionar cotizaciones de viajes turísticos, aplicando reglas de negocio sobre los costos base, la cantidad de pasajeros y la temporada del año.

## 2. Identificación de Entradas
Los datos que recibe la función `calcularViaje` son:

* **`destino` (String):** El lugar al que desea viajar (ej: "playa", "montana", "ciudad").
* **`adultos` (Number):** Cantidad de personas mayores de 12 años.
* **`ninos` (Number):** Cantidad de menores de 12 años.
* **`temporada` (String):** Indica si es "alta" o "baja".

## 3. Identificación de Salidas
El sistema retorna un objeto JSON con el resultado verificado:

* **`destino`:** Confirmación del lugar seleccionado.
* **`pasajeros`:** Conteo total de personas en la reserva.
* **`costoOriginal`:** Valor calculado antes de aplicar promociones.
* **`descuentoAplicado`:** Porcentaje de descuento resultante de las reglas de negocio.
* **`totalAPagar`:** Monto final a cobrar.

## Reglas de Negocio Implementadas
1.  **Tarifa Infantil:** Los niños pagan el 50% de la tarifa base del destino.
2.  **Temporada Baja:** Descuento del 20% sobre el costo total.
3.  **Descuento por Grupo:** Si la suma de pasajeros es mayor a 5, se añade un 5% de descuento adicional.
README.md
Mostrando README.md.