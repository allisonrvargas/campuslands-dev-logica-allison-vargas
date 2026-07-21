# Plantilla de solucion

## Analisis

- **Entrada:** Lista de películas (items), prioridad y la regla a seguir.
- **Proceso:** Reviso que haya datos. Si algo sale como "bloqueado", el sistema avisa de una vez para que no se nos pase nada y el catálogo esté correcto.
- **Salida:** Qué hay que hacer y por qué.

## Reglas aplicadas

1. **Prioridad ante fallos:** Si una película tiene datos bloqueados, es lo primero que se revisa.
2. **Control de vacíos:** Si la lista está vacía, no se hace nada.

## Pruebas

### Caso normal
- **Entrada:** `items: ["aprobado", "pendiente", "bloqueado"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "toca revisar esto primero porque hay un problema con la peli de terror."`

### Caso borde
- **Entrada:** `items: []`, `prioridad: "baja"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "sin accion inmediata"`
  `motivo: "no hay pelis en la lista para revisar."`

## Como revisar la solucion

1. Buscar la ruta: `ejercicio-069/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

La idea es que el catálogo de peliculas de miedo esté siempre al día. Si algún título está bloqueado, hay que ponerle atención rápido para que todo el catálogo se vea bien y no tengamos sorpresas desagradables al intentar reproducir algo.