# Lectura de Instrucciones - Viajes y Turismo

## Descripción
Sistema de recomendación de itinerarios turísticos que aplica restricciones de presupuesto y tiempo para filtrar la mejor experiencia para el usuario.

## Reglas Aplicadas
- **Filtrado inicial:** Las restricciones de tiempo y presupuesto actúan como un 'corte' que limita las opciones a rutas locales.
- **Selección basada en perfil:** El interés del usuario determina la categoría de la ruta dentro de las opciones disponibles.

## Cómo ejecutar
El script `nombre-apellido.js` contiene la lógica. Invoca `generarItinerario()` pasando un objeto con `presupuestoTotal`, `diasDisponibles` e `interes`.

## Casos Probados
- **Normal:** Usuario con recursos para ruta de aventura.
- **Borde:** Usuario con presupuesto mínimo forzado a ruta local.