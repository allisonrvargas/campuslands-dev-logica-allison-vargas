Análisis
Entrada: Un objeto con dpi (int), modoColor (string), pesoMb (float) y dimensionesCm (objeto con ancho y alto).

Proceso: Verificación de estándares técnicos dividida en tres categorías: calidad de impresión, optimización web y gestión de recursos del sistema (área del lienzo).

Salida: Estado de aptitud (apto), nivel de viabilidad del lienzo y recomendaciones de flujo de trabajo.

Reglas identificadas
Estándar Impresión: El modo CMYK exige al menos 300 DPI para asegurar nitidez.

Estándar Web: El peso del archivo no debe superar los 20MB en modo RGB para garantizar tiempos de carga rápidos.

Gestión de Hardware: Un área mayor a 2000cm² obliga al usuario a segmentar su flujo de trabajo para evitar bloqueos del software.

Para entender mejor cómo la resolución afecta la calidad visual y la impresión, es útil visualizar la densidad de píxeles: .

Pruebas
Caso normal
Entrada: dpi: 300, modoColor: "CMYK", pesoMb: 15, dimensionesCm: {ancho: 20, alto: 30}

Resultado esperado: apto: true, viabilidadArea: "Óptima"

Caso borde
Entrada: dpi: 72, modoColor: "CMYK", pesoMb: 5, dimensionesCm: {ancho: 10, alto: 10}

Resultado esperado: apto: false, razon: "Resolución insuficiente para impresión CMYK"

Explicación final
La solución aplica una arquitectura de validación de entrada (input validation). Al clasificar los errores en "impresión" y "web", permitimos que el artista digital sepa exactamente por qué su archivo no es apto sin tener que adivinar las restricciones técnicas. Esto profesionaliza el proceso de entrega de artes digitales.

Sugerencia
Asegúrate de que las dimensionesCm se calculen con precisión, ya que un error de una unidad puede cambiar la viabilidad del lienzo en proyectos de gran escala.