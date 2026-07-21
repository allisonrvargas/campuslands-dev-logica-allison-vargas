# Plantilla de solucion

## Analisis

- **Entrada:** Una lista con el estado de las canciones en la playlist (items), la urgencia (prioridad) y la regla de control (regla).
- **Proceso:** Validar si la playlist tiene datos. Si se detecta algún elemento en estado "bloqueado" (archivo corrupto o sin licencia), el sistema frena la reproducción para evitar errores técnicos antes de continuar con las canciones normales.
- **Salida:** Un mensaje directo que dice qué acción tomar y la explicación del motivo.

## Reglas aplicadas

1. **Atención a la calidad:** Si alguna canción está bloqueada, el sistema se detiene para reportar el fallo y asegurar que la experiencia musical no se interrumpa con errores.
2. **Control de vacíos:** Si la playlist viene sin canciones, el código avisa de inmediato que no hay nada para analizar.

## Pruebas

### Caso normal
- **Entrada:** `items: ["aprobado", "pendiente", "bloqueado"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "la regla prioriza riesgos antes de tareas normales."`

### Caso borde
- **Entrada:** `items: []`, `prioridad: "baja"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "sin accion inmediata"`
  `motivo: "no se encontraron elementos registrados en la lista para evaluar."`

## Como revisar la solucion

1. Buscar la ruta: `ejercicio-047/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

La solución funciona genial para mantener la playlist impecable. Al revisar la lista, el código identifica rápidamente si hay alguna canción bloqueada y nos avisa que debemos revisar antes de reproducir. Esto evita errores molestos durante la escucha y mantiene la lista organizada y lista para sonar sin interrupciones técnicas.