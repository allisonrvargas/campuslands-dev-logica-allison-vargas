# Plantilla de solucion: Problema 44

## Analisis
El problema consiste en desarrollar un motor de validación y optimización de itinerarios para una agencia de viajes y turismo. El sistema debe procesar un listado de paquetes turísticos internacionales y aplicar un conjunto secuencial de instrucciones de selección de acuerdo con las restricciones de presupuesto del cliente, días disponibles y políticas de sostenibilidad de los destinos. Se busca organizar los datos de origen para descartar ofertas incoherentes o sobrecosteadas, y finalmente clasificar los destinos aptos.

- Entrada: Una lista de objetos de paquetes de viaje (cada uno con `destino` [texto], `costoPorDia` [entero], `duracionDias` [entero], `huellaCarbonoKg` [flotante] y `requiereVisado` [booleano]), un `presupuestoTotalMaximo` [entero] y un límite de `diasDisponibles` [entero].
- Proceso:
  1. Validar la integridad de los datos de entrada, descartando registros con valores ilógicos.
  2. Filtrar los paquetes que no sobrepasen la duración del viaje del cliente ni el presupuesto financiero total calculado ($\text{costoPorDia} \times \text{duracionDias}$).
  3. Clasificar los paquetes aptos en dos categorías ecológicas basadas en el impacto de su huella de carbono por día de estancia.
- Salida: Un reporte que detalla los paquetes turísticos viables divididos por su categoría de impacto ecológico y el costo promedio de los viajes aprobados.

## Reglas identificadas
1. Filtro de Control de Datos: Se ignora un paquete turístico si su `costoPorDia`, `duracionDias` o `huellaCarbonoKg` son menores o iguales a cero.
2. Instrucción de Viabilidad Operativa: Un paquete es apto si la `duracionDias` es menor o igual a los `diasDisponibles` y si el costo total ($\text{costoPorDia} \times \text{duracionDias}$) es menor o igual al `presupuestoTotalMaximo`.
3. Clasificación de Impacto Ecológico: Para los paquetes aprobados, se evalúa la huella de carbono diaria promedio ($\text{huellaCarbonoKg} / \text{duracionDias}$):
   - Si la huella diaria es menor o igual a 15.0 kg $\rightarrow$ Categoría `"EcoAmigable"`.
   - Si la huella diaria es mayor a 15.0 kg $\rightarrow$ Categoría `"Estandar"`.
4. Control de Excepciones de Datos: Si la lista inicial de paquetes está vacía o ningún destino se ajusta a las instrucciones del cliente, se devuelven listas vacías y un costo promedio de 0.0.

## Pruebas

### Caso 1: Procesamiento exitoso de itinerarios mixtos
Entrada: 
- paquetes = `[{"destino": "Costa Rica", "costoPorDia": 120, "duracionDias": 5, "huellaCarbonoKg": 50.0, "requiereVisado": false}, {"destino": "Japon", "costoPorDia": 300, "duracionDias": 7, "huellaCarbonoKg": 210.0, "requiereVisado": true}, {"destino": "Europa Express", "costoPorDia": 400, "duracionDias": 10, "huellaCarbonoKg": 100.0, "requiereVisado": false}]`
- presupuestoTotalMaximo = 2500
- diasDisponibles = 8

Explicación:
- "Europa Express" se descarta inmediatamente porque dura 10 días (excede los 8 días disponibles).
- "Costa Rica": Costo total = $120 \times 5 = 600$ (Apto). Huella diaria = $50.0 / 5 = 10.0$ (EcoAmigable).
- "Japon": Costo total = $300 \times 7 = 2100$ (Apto). Huella diaria = $210.0 / 7 = 30.0$ (Estandar).
- Costo promedio de los aprobados = $(600 + 2100) / 2 = 1350.0$.

Resultado esperado: `{ "ecoAmigable": ["Costa Rica"], "estandar": ["Japon"], "costoTotalPromedioAptos": 1350.0 }`

### Caso 2: Exclusión por rebasar el presupuesto máximo
Entrada:
- paquetes = `[{"destino": "Dubai Luxury", "costoPorDia": 800, "duracionDias": 4, "huellaCarbonoKg": 160.0, "requiereVisado": false}]`
- presupuestoTotalMaximo = 2000
- diasDisponibles = 5
Explicación: El costo total es de $800 \times 4 = 3200$, superando los 2000 de presupuesto.
Resultado esperado: `{ "ecoAmigable": [], "estandar": [], "costoTotalPromedioAptos": 0.0 }`

## Explicacion final
La solución estructura de forma estricta los requerimientos del usuario mediante un ordenamiento relacional. Al resolver primero los limitantes físicos y de presupuesto, el algoritmo optimiza el uso de memoria calculando métricas ecológicas complejas únicamente en el subconjunto de datos final que es realmente viable.