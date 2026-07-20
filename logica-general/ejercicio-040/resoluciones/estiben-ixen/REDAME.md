Análisis
Entrada: Un objeto con los datos del pedido: presupuesto (número), tieneAlergias (booleano), tiempoMaximo (minutos) y tipoPreferido ("rápida", "saludable", "gourmet").

Proceso: Filtrar las opciones disponibles en el "Food Truck" según las restricciones del cliente.

Salida: Un dictamen con la recomendacion y el motivo de la elección.

Reglas identificadas
Regla 1 (Alergia): Si el cliente tieneAlergias, solo se ofrecen opciones certificadas (dictamen: "Menú Especial").

Regla 2 (Tiempo): Si tiempoMaximo es menor a 15 minutos, solo se consideran opciones de comida "rápida".

Regla 3 (Presupuesto): Si presupuesto es menor a $5, solo se recomienda "comida rápida" básica.

Regla 4 (Preferencia): Si se cumplen todas las anteriores, se asigna la opción que coincida con tipoPreferido.

Pruebas
Caso normal
Entrada: presupuesto: 10, tieneAlergias: false, tiempoMaximo: 20, tipoPreferido: "saludable"

Resultado esperado: recomendacion: "Ensalada Urbana", razon: "Opción saludable que se ajusta a su presupuesto y tiempo."

Caso borde
Entrada: presupuesto: 3, tieneAlergias: true, tiempoMaximo: 10, tipoPreferido: "gourmet"

Resultado esperado: recomendacion: "Menú Especial Básico", razon: "Opción segura para alérgicos con presupuesto limitado y tiempo reducido."

Explicación final
La solución emplea una tabla de decisión jerárquica. La prioridad se asigna a la salud (alergias), seguida por la restricción de tiempo y finalmente el presupuesto. Este enfoque asegura que el sistema nunca recomiende un producto que pueda dañar al cliente o que sea imposible de preparar en el tiempo solicitado.

Sugerencia
Crea una tabla con las columnas [Alergia, Tiempo, Presupuesto, Resultado]. Esto te ayudará a visualizar cómo el sistema "descarta" opciones antes de llegar a la lógica de selección final.