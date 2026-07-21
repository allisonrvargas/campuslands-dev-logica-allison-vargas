# Plantilla de solucion

## Analisis

- **Entrada:** Una lista con el estado de las películas (items), la urgencia (prioridad) y la regla de control (regla).
- **Proceso:** Validar si la lista tiene datos. Si se encuentra alguna película con estado "bloqueado" (archivo corrupto o falta de datos técnicos), el sistema detiene el flujo para corregir el inconveniente antes de continuar con el procesamiento.
- **Salida:** Un mensaje directo que dice qué acción tomar y la explicación del motivo.

## Reglas aplicadas

1. **Atención a la calidad:** Si algún dato técnico de una película está bloqueado, se frena el proceso general para asegurar que la base de datos no contenga información errónea.
2. **Control de vacíos:** Si la lista de chequeo viene sin elementos, el código avisa de inmediato que no hay nada para analizar.

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

1. Buscar la ruta: `ejercicio-048/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

La solución es muy efectiva para mantener organizada nuestra base de datos de ciencia ficción. Al realizar la revisión paso a paso, detectamos rápido si hay algún archivo bloqueado, evitando que datos dañados pasen a la plataforma principal. Esto garantiza que nuestro flujo de trabajo limpio y una mejor experiencia para el usuario.