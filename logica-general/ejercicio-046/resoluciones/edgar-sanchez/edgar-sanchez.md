# Plantilla de solucion: Problema 40

## Analisis
El problema consiste en desarrollar un módulo de búsqueda y selección especializada para un catálogo internacional de autos hiperdeportivos (*hypercars*). En el sector de alta gama, los clientes y escuderías buscan vehículos que cumplan con hitos específicos de ingeniería (como romper la barrera de velocidad o mantener una relación peso-potencia óptima). El software debe procesar una base de datos de vehículos, descartar registros con inconsistencias técnicas y localizar el hiperdeportivo que mejor se adapte a un criterio de rendimiento avanzado dentro de un presupuesto límite.

- Entrada: Una lista de objetos de hiperdeportivos (cada uno con `marca` [texto], `modelo` [texto], `velocidadMaxima` [entero en km/h], `pesoKg` [entero], `caballosFuerza` [entero] y `precioMilones` [flotante]), una `velocidadMinimaRequerida` [entero] y un `presupuestoMaximo` [flotante].
- Proceso:
  1. Filtrar los vehículos que cumplan estrictamente con los requisitos mínimos de velocidad y presupuesto.
  2. Calcular internamente la relación peso-potencia ($\text{pesoKg} / \text{caballosFuerza}$) para los autos preseleccionados.
  3. Buscar y extraer el vehículo con la mejor eficiencia de peso (la relación más baja).
- Salida: El objeto del hiperdeportivo óptimo encontrado o un mensaje indicando que no hay coincidencias.

## Reglas identificadas
1. Filtros de Admisión Obligatorios: Para entrar en la fase de búsqueda, un vehículo debe registrar una `velocidadMaxima` mayor o igual a la `velocidadMinimaRequerida` y su `precioMilones` debe ser menor o igual al `presupuestoMaximo`.
2. Consistencia de Ingeniería: Se ignoran del catálogo los autos que tengan valores de peso, caballos de fuerza, velocidad o precio menores o iguales a cero.
3. Criterio de Selección Eficiente: De los autos que pasan el filtro, el ganador absoluto es aquel con la **menor relación peso-potencia** (menos kilogramos por cada caballo de fuerza). 
4. Ausencia de Coincidencias: Si ningún hiperdeportivo cumple con los filtros de entrada o el catálogo está vacío, el sistema debe retornar un valor nulo (`None`).

## Pruebas

### Caso 1: Búsqueda y selección exitosa
Entrada: 
- catalogo = `[{"marca": "Bugatti", "modelo": "Chiron", "velocidadMaxima": 420, "pesoKg": 1995, "caballosFuerza": 1500, "precioMilones": 3.2}, {"marca": "Koenigsegg", "modelo": "Jesko", "velocidadMaxima": 480, "pesoKg": 1420, "caballosFuerza": 1600, "precioMilones": 3.0}]`
- velocidadMinimaRequerida = 400
- presupuestoMaximo = 3.5
Explicación: Ambos cumplen velocidad y presupuesto. Relación Chiron: $1995 / 1500 = 1.33$. Relación Jesko: $1420 / 1600 = 0.88$. Gana el Jesko por tener la relación más baja.
Resultado esperado: `{"marca": "Koenigsegg", "modelo": "Jesko", ...}`

### Caso 2: Exclusión por presupuesto excedido
Entrada:
- catalogo = `[{"marca": "Pagani", "modelo": "Huayra", "velocidadMaxima": 383, "pesoKg": 1350, "caballosFuerza": 730, "precioMilones": 2.8}]`
- velocidadMinimaRequerida = 350
- presupuestoMaximo = 2.0
Resultado esperado: `None`

## Explicacion final
La solución funciona porque ejecuta un pre-filtrado restrictivo que reduce el universo de búsqueda basado en los límites del cliente. Posteriormente, transforma los datos técnicos en una métrica única de rendimiento para garantizar una decisión matemática objetiva.