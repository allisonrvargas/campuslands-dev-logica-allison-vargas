# Inventario de Motos - Rangos y Máximos

## Descripción
Sistema de análisis de inventario que determina el estado de saturación de modelos de motocicletas en almacén.

## Reglas Aplicadas
- **Cálculo:** Se utiliza la relación porcentual entre el stock actual y la capacidad máxima.
- **Clasificación:** - < 20%: Crítico.
    - 20% - 90%: Óptimo.
    - > 90%: Sobrecarga.

## Ejecución
Ejecuta el script con `node nombre-apellido.js`.

## Casos Probados
1. **Normal:** Moto al 75% (Óptimo).
2. **Sobrecarga:** Moto al 95% (Sobrecarga).