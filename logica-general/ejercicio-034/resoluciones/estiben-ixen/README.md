Análisis
Entrada: Un objeto que contiene tamanoCm (float), complejidad (string: "baja", "media", "alta"), ubicacion (string) y tipoTinta (string).

Proceso: Evaluación de restricciones físicas (tamaño vs detalle) y de salud dermatológica (ubicación vs técnica), seguido de una estimación de tiempo.

Salida: Estado de viabilidad (viable), error si aplica, y estimación de tiempo de ejecución.

Reglas identificadas
Restricción de Escala: Los diseños con complejidad "alta" requieren un tamaño mínimo (>= 5cm) para evitar que la tinta se expanda y pierda detalle.

Compatibilidad Dérmica: Ciertas técnicas como la "acuarela" tienen mayor riesgo de desvanecimiento en zonas de alta fricción (manos, pies, costillas).

Cálculo de Tiempo: Estimación lineal basada en el tamaño del diseño con un factor adicional por complejidad.

Pruebas
Caso normal
Entrada: tamanoCm: 10, complejidad: "media", ubicacion: "brazo", tipoTinta: "negro"

Resultado esperado: viable: true, estimadoHoras: 6

Caso borde
Entrada: tamanoCm: 3, complejidad: "alta", ubicacion: "espalda", tipoTinta: "negro"

Resultado esperado: viable: false, error: "Diseño demasiado pequeño para este nivel de detalle"

Explicación final
La solución utiliza una lógica de "validación previa" (fail-fast). Si las condiciones iniciales sugieren un mal resultado estético o dermatológico, se aborta el diagnóstico. Esto imita la consulta profesional donde el tatuador analiza la viabilidad del diseño antes de aplicar la aguja, priorizando la calidad artística y la salud de la piel del cliente.

Sugerencia
Asegúrate de validar siempre el nombre de la ubicación convertida a minúsculas (toLowerCase()) para evitar errores de coincidencia por formato de texto.