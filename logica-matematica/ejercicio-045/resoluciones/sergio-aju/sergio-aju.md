# Mínimos y Límites - Taller Mecánico

## Autor

Sergio Ajú

## Descripción
Sistema para el cálculo automático de reposición de repuestos basado en niveles mínimos de inventario.

## Reglas Aplicadas
- **Reposición:** Se dispara cuando el stock actual es menor al mínimo.
- **Stock de Seguridad:** Se calcula reponiendo hasta alcanzar el doble del mínimo.
- **Prioridad:** Los ítems con stock cero se marcan como 'Emergencia'.

## Ejecución
Ejecuta `node nombre-apellido.js`. La función `verificarInventario` procesa los niveles y devuelve la orden de compra.

## Casos Probados
- **Normal:** Reposición estándar calculada por debajo del mínimo.
- **Emergencia:** Piezas con cero unidades disponibles para despacho.