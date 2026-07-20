Plantilla de solución
Análisis
Entrada: Un objeto con las propiedades de un material: tipo (ej. madera, hormigón, vidrio), esIgnifugo (booleano) y esReciclado (booleano).

Proceso: Evaluar las condiciones mediante una tabla de decisión para determinar si el material es apto para construcción de alto riesgo o estándar.

Salida: Un dictamen (apto, limitado, no apto) y la justificación técnica.

Reglas identificadas
Regla 1: Si es ignifugo y reciclado, el dictamen es apto (Material premium).

Regla 2: Si es ignifugo pero no reciclado, el dictamen es limitado (Cumple seguridad, requiere mejora sostenibilidad).

Regla 3: Si no es ignifugo pero es reciclado, el dictamen es limitado (Ecológico, requiere tratamiento de seguridad).

Regla 4: Si no es ignifugo y no es reciclado, el dictamen es no apto (Riesgo estructural).

Pruebas
Caso normal
Entrada: material: "madera", esIgnifugo: true, esReciclado: true

Resultado esperado: dictamen: "apto", razon: "Cumple con normativas de seguridad y sostenibilidad."

Caso borde
Entrada: material: "plástico", esIgnifugo: false, esReciclado: false

Resultado esperado: dictamen: "no apto", razon: "No cumple con las normas básicas de seguridad ni sostenibilidad."

Explicación final
La solución utiliza una estructura lógica basada en una tabla de decisión, lo cual evita el anidamiento excesivo de sentencias if-else. Al tratar las variables como factores de una matriz, podemos mapear todas las combinaciones posibles de forma ordenada. Este enfoque es fundamental en arquitectura 3D donde los componentes de un modelo deben cumplir con múltiples validaciones simultáneas.

Sugerencia
Antes de programar, construye una tabla física con las columnas [ignifugo, reciclado, resultado]. Esto te permitirá visualizar "huecos" lógicos donde una combinación de datos podría no estar definida.