# Filtros por Condiciones - Inventario de Motos

## Descripción
Sistema de filtrado para optimizar la gestión de inventario, separando motos que necesitan reposición o mantenimiento de las que están en estado normal.

## Reglas Aplicadas
- **Reposición:** Triggered cuando el stock es < 3.
- **Técnica:** Triggered cuando el estado es 'en-revision'.
- **Limpieza:** Los registros 'vendidos' son filtrados antes de cualquier análisis.

## Cómo ejecutar
El archivo `nombre-apellido.js` contiene la función principal `gestionarInventario`. Ejecútalo pasando un arreglo de objetos como argumento.

## Casos Probados
- **Normal:** Motos con stock bajo detectadas correctamente.
- **Borde:** Motos vendidas correctamente ignoradas por el sistema.