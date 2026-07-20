# Plantilla de solucion: Problema 38

## Analisis
El problema consiste en desarrollar un sistema de filtrado inteligente para un inventario de motocicletas en un concesionario. El software debe evaluar un lote de vehículos para identificar cuáles son aptos para la venta inmediata, cuáles requieren revisión en taller y cuáles deben ser retirados de exhibición. La clasificación se basa en la cilindrada, el kilometraje actual y el estado de la revisión técnico-mecánica obligatoria.

- Entrada: Una lista de objetos que representan motocicletas (cada una con `modelo` [texto], `cilindradaCc` [entero], `kilometraje` [entero] y `tecnicoMecanicaAlDia` [booleano]).
- Proceso:
  1. Recorrer la colección de motocicletas.
  2. Filtrar y descartar vehículos con inconsistencias físicas (valores negativos).
  3. Clasificar cada motocicleta según su nivel de desgaste mecánico y su estado legal.
- Salida: Una lista de motocicletas aptas para la venta.

## Reglas identificadas
1. Criterio de Aceptación Comercial (Apta para Venta): Una motocicleta se considera lista para exhibición y venta si su `kilometraje` es menor o igual a 45,000 km, su `cilindradaCc` es mayor o igual a 100 cc y cuenta con la documentación `tecnicoMecanicaAlDia` como verdadera (`true`).
2. Descarte por Inconsistencia: Si un vehículo registra un kilometraje o cilindrada menor a cero, se omite automáticamente del reporte por sospecha de alteración de datos.
3. Lista Vacía: Si ninguna motocicleta cumple las condiciones de venta o el inventario inicial no tiene registros, el sistema retorna una lista vacía (`[]`).

## Pruebas

### Caso 1: Filtrado exitoso
Entrada: motos = `[{"modelo": "Moto A", "cilindradaCc": 150, "kilometraje": 12000, "tecnicoMecanicaAlDia": true}, {"modelo": "Moto B", "cilindradaCc": 250, "kilometraje": 50000, "tecnicoMecanicaAlDia": true}]`
Resultado esperado: `[{"modelo": "Moto A", "cilindradaCc": 150, "kilometraje": 12000, "tecnicoMecanicaAlDia": true}]`

### Caso 2: Exclusión por documentación vencida
Entrada: motos = `[{"modelo": "Moto C", "cilindradaCc": 200, "kilometraje": 5000, "tecnicoMecanicaAlDia": false}]`
Resultado esperado: `[]`

## Explicacion final
La solución evalúa en una sola iteración el cumplimiento simultáneo de los límites operativos (kilometraje y cilindraje) y las restricciones normativas del país, aislando de forma segura las unidades comerciales listas para entrega.