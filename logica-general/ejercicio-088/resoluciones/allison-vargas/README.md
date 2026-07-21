# Plantilla de solucion

## Analisis

- **Entrada:** Lista de estados de archivos de películas (items), prioridad y la regla a seguir.
- **Proceso:** Dividí el código en funciones pequeñas. Primero valido la lista, y luego aplico una lógica de flujo para detectar archivos bloqueados que detengan la producción de la película.
- **Salida:** Qué acción tomar y por qué.

## Reglas aplicadas

1. **Prioridad ante errores:** Si un archivo de película está "bloqueado", se debe revisar primero para mantener el flujo de trabajo.
2. **Control de vacíos:** Si la lista no tiene datos, no se procesa ninguna acción.
3. **Modularidad:** Funciones separadas para validar los archivos y aplicar el flujo paso a paso.

## Pruebas

### Caso normal
- **Entrada:** `items: ["aprobado", "pendiente", "bloqueado"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "toca revisar este archivo de película primero porque el flujo de render está bloqueado."`

### Caso borde
- **Entrada:** `items: []`, `prioridad: "baja"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "sin accion inmediata"`
  `motivo: "la lista de archivos de películas está vacía."`

## Como revisar la solucion

1. Buscar la ruta: `ejercicio-088/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

En ciencia ficción, la calidad de los efectos visuales depende de un flujo de trabajo impecable. Con esta lógica, puedo asegurar que cada archivo de película sea procesado correctamente paso a paso, detectando cualquier error antes de que afecte la línea de tiempo de producción.