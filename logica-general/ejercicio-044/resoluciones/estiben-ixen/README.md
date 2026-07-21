Análisis
Entrada: Un objeto que contiene: modelo (string), anio (entero), kilometraje (entero) y tieneDanio (booleano).

Proceso: Aplicar reglas de categorización para filtrar si la moto está apta para venta directa, requiere taller o debe ser dada de baja.

Salida: Un dictamen (Venta Directa, Taller, Baja) y el motivo técnico.

Reglas identificadas
Regla 1 (Estado crítico): Si tieneDanio es true, la moto pasa a Taller obligatoriamente.

Regla 2 (Antigüedad): Si el anio es menor a 2015, se cataloga como Baja (modelo obsoleto para inventario moderno).

Regla 3 (Uso excesivo): Si no tiene daños pero el kilometraje es superior a 50,000 km, pasa a Taller para revisión preventiva.

Regla 4 (Aprobación): Si ninguna de las anteriores se cumple, la moto es Venta Directa.

Pruebas
Caso normal
Entrada: modelo: "Yamaha MT-07", anio: 2022, kilometraje: 15000, tieneDanio: false

Resultado esperado: estado: "Venta Directa", razon: "Moto en condiciones óptimas para el mercado."

Caso borde
Entrada: modelo: "Honda CB", anio: 2012, kilometraje: 5000, tieneDanio: false

Resultado esperado: estado: "Baja", razon: "Modelo fuera del rango de año permitido para inventario activo."

Explicación final
La solución utiliza una cascada de condiciones. El orden es vital: primero validamos los daños físicos, luego el año (criterio excluyente) y finalmente el desgaste (kilometraje). Este enfoque asegura que la moto más "nueva" pero dañada sea detectada correctamente antes de revisar su kilometraje.

Sugerencia
Representa el flujo de tu inventario como un árbol de decisión. Colocar las condiciones más estrictas (como el año de fabricación) al inicio del árbol te permite reducir el número de comparaciones necesarias y hace que el código sea más legible.