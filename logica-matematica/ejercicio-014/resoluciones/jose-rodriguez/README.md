# Plantilla de solucion

## Analisis

- Entrada:
  - `ancho_cm` (flotante): Medida lineal horizontal del lienzo del diseño sobre la piel.
  - `alto_cm` (flotante): Medida lineal vertical del lienzo del diseño sobre la piel.

- Proceso:
  1. Validar que ambas dimensiones espaciales de entrada sean estrictamente positivas para asegurar la existencia real de la superficie.
  2. Implementar la fórmula del área del plano rectangular para estimar el gasto de tinta por superficie: $Área = Ancho \times Alto$.
  3. Implementar la fórmula del perímetro para determinar la longitud de recorrido de la aguja de trazado: $Perímetro = 2 \times (Ancho + Alto)$.
  4. Evaluar mediante una estructura de control condicional si el perímetro calculado es estrictamente mayor que el límite de tolerancia técnica de 30.0 cm.

- Salida:
  - `area_cm2` (flotante redondeado a 2 decimales).
  - `perimetro_cm` (flotante redondeado a 2 decimales).
  - `necesita_aguja_especial` (booleano: `True` o `False`).
  - `diagnostico_insumos` (cadena de texto con la orden de preparación de la mesa de trabajo).

## Reglas identificadas

1. **Dependencia Bidimensional:** El cálculo del área responde a una escala cuadrática ($cm^2$) que rige la cantidad de pigmento sólido para el sombreado, mientras que el perímetro responde a una escala lineal ($cm$) que rige el desgaste mecánico del contorno de la aguja.
2. **Frontera de Desgaste Mecánico:** La regla de negocio establece un punto de quiebre en los 30.0 cm de trazo continuo ($Perímetro > 30.0$). Cruzar esta frontera lineal obliga a cambiar el tipo de aguja para evitar la fatiga del material y cuidar la piel del cliente.
3. **Restricción de Existencia Física:** Si cualquiera de las dos variables de entrada es $\le 0$, el software bloquea la operación matemática. Una dimensión nula o negativa destruiría la integridad del cálculo de área y presupuesto del estudio.

## Pruebas

### Caso normal

Entrada:
- `ancho_cm`: 8.0
- `alto_cm`: 5.0

Resultado esperado:
- `Área calculada`: 40.0 cm² *(Cálculo manual: 8.0 * 5.0 = 40.0)*
- `Perímetro calculado`: 26.0 cm *(Cálculo manual: 2 * (8.0 + 5.0) = 2 * 13.0 = 26.0)*
- `Asignación de Insumos`: "Insumos estándar. Kit de agujas básico suficiente." *(Cálculo lógico: 26.0 > 30.0 resulta en Falso)*

### Caso borde

Entrada:
- `ancho_cm`: 10.0
- `alto_cm`: 5.0

Resultado esperado:
- `Área calculada`: 50.0 cm² *(Cálculo manual: 10.0 * 5.0 = 50.0)*
- `Perímetro calculado`: 30.0 cm *(Cálculo manual: 2 * (10.0 + 5.0) = 2 * 15.0 = 30.0)*
- `Asignación de Insumos`: "Insumos estándar. Kit de agujas básico suficiente." *(Cálculo lógico: El comparador es estrictamente mayor `>`. Al ser exactamente 30.0, la condición da Falso, manteniéndose en el borde superior del kit estándar)*

## Explicacion final

Esta solución funciona debido a que descompone las propiedades espaciales del diseño en dos variables métricas diferenciadas (área y perímetro). Esto permite al estudio automatizar tanto la compra de consumibles superficiales como la planeación de la resistencia de las agujas contorneadoras. El manejo estructurado de errores y validaciones numéricas directas previene distorsiones en las cotizaciones y asegura la reproducibilidad de los resultados en Campuslands.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.