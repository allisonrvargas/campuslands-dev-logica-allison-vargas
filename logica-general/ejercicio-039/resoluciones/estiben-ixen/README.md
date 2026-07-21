Análisis
Entrada: Un objeto con las propiedades de una sustancia química: nombre, esCorrosivo (booleano), esInflamable (booleano) y cantidad (entero).

Proceso: Evaluar las condiciones de peligrosidad mediante una tabla de decisión lógica para determinar el área de almacenamiento permitida (Almacén A: Seguro, Almacén B: Especial, Bloqueado).

Salida: Un dictamen de ubicación y el motivo técnico basado en la normativa de seguridad.

Reglas identificadas
Regla 1 (Bloqueo): Si es corrosivo y inflamable, el almacenamiento es Bloqueado (Alto riesgo de reacción explosiva).

Regla 2 (Especial): Si es solo corrosivo o solo inflamable, se asigna al Almacén B (requiere contenedores específicos).

Regla 3 (Seguro): Si no es ni corrosivo ni inflamable, se asigna al Almacén A (almacenamiento general).

Regla 4 (Validación): Si la cantidad es menor o igual a 0, se emite un error de inventario.

Pruebas
Caso normal
Entrada: nombre: "Acetona", esCorrosivo: false, esInflamable: true, cantidad: 50

Resultado esperado: ubicacion: "Almacén B", razon: "Sustancia inflamable, requiere contenedores de seguridad."

Caso borde
Entrada: nombre: "Ácido Nítrico", esCorrosivo: true, esInflamable: true, cantidad: 10

Resultado esperado: ubicacion: "Bloqueado", razon: "Incompatibilidad química extrema: corrosivo e inflamable."

Explicación final
La solución utiliza una estructura de tabla de decisión booleana. Al verificar primero las condiciones críticas (la combinación de riesgos) y luego las individuales, garantizamos que el sistema priorice la seguridad del laboratorio. Esto modela cómo se gestionan físicamente los inventarios químicos para evitar incidentes.

Sugerencia
Representa tus reactivos en un diagrama de flujo de decisión antes de programar; esto te permitirá ver gráficamente cómo los "caminos" de peligrosidad separan las sustancias en diferentes áreas físicas.