# Resolución Ejercicio: Gestión de Inventario de Motos

## Como pensaste el problema
Se abordó el control de inventario utilizando un sistema de "semáforo" lógico. Definí los límites superior e inferior (stock mínimo y máximo) como las variables de control que disparan acciones automáticas para mantener la eficiencia operativa del almacén.

## Reglas aplicadas
1. **Nivel Crítico:** Si el stock es menor al `stockMinimo`, se recomienda reposición inmediata hasta llegar al `stockMaximo`.
2. **Sobreabastecimiento:** Si el stock supera el `stockMaximo`, se recomienda detener compras para evitar costos de almacenamiento.
3. **Nivel Óptimo:** Rango seguro entre los dos puntos definidos.

## Como ejecutar o revisar tu solucion
1. Asegúrate de tener Node.js instalado.
2. Ejecuta el archivo: `node shen.js`.

## Casos
- **Caso normal:** Stock dentro de los límites, obteniendo un estado "Óptimo".
- **Caso borde (Crítico):** Stock por debajo del mínimo, validando la recomendación de pedido urgente.