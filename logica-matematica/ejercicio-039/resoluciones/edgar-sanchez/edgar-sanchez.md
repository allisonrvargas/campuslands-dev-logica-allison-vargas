# Plantilla de solucion: Problema 48

## Analisis
El problema consiste en desarrollar un analizador de estabilidad y validación estequiométrica para fórmulas químicas de compuestos inorgánicos binarios y ternarios. El sistema debe procesar las proporciones atómicas y los estados de oxidación de los elementos constituyentes para verificar si la molécula cumple con el principio de electronegatividad y neutralidad de carga, clasificando las fórmulas en niveles de estabilidad estructural.

- Entrada: Un objeto que representa la fórmula química analizada (`compuesto` [texto], `elementos` [lista de objetos; cada uno con `simbolo` [texto], `cantidadAtomos` [entero], y `estadoOxidacion` [entero]]).
- Proceso:
  1. Validar la integridad de los datos de entrada, asegurando que las cantidades y rangos de valencias sean físicamente posibles.
  2. Calcular la carga neta total de la molécula sumando algebraicamente el producto de la cantidad de átomos por su respectivo estado de oxidación.
  3. Evaluar la estabilidad química combinando el balance de cargas y la cantidad de elementos involucrados.
- Salida: Un reporte técnico que detalla la carga total calculada, la clasificación de estabilidad del compuesto y un indicador booleano de validez.

## Reglas identificadas
1. Filtro de Integridad Molecular: Se rechaza una fórmula molecular si la lista de elementos contiene menos de 2 componentes (no es un compuesto) o más de 4 componentes, o si algún elemento tiene una `cantidadAtomos` menor o igual a cero.
2. Ley de Conservación de la Carga (Carga Neta): Para cada elemento $i$, se multiplica su cantidad de átomos por su estado de oxidación. La carga total molecular ($Q_{\text{neta}}$) es la sumatoria de estos valores:
   $$Q_{\text{neta}} = \sum (\text{cantidadAtomos}_i \times \text{estadoOxidacion}_i)$$
3. Clasificación de Estabilidad Estequiométrica:
   - Si $Q_{\text{neta}} = 0 \rightarrow$ Estado: `"Estable"` (Molécula neutra balanceada).
   - Si $Q_{\text{neta}} \neq 0$ pero el valor absoluto de la carga es menor o igual a 3 $\rightarrow$ Estado: `"Ion Poliatomico Viable"` (Puede existir como radical o ion en solución).
   - Si el valor absoluto de $Q_{\text{neta}} > 3 \rightarrow$ Estado: `"Inestable / Imposible"` (Desbalance electrónico crítico).
4. Excepción por Cargas Absurdas: Si algún estado de oxidación individual es mayor a +8 o menor a -4, el registro se procesa como `"Error de Valencia"` y la molécula se marca inmediatamente como no válida.

## Pruebas

### Caso 1: Compuesto neutro perfectamente balanceado (Agua)
Entrada: formula = `{"compuesto": "Agua (H2O)", "elementos": [{"simbolo": "H", "cantidadAtomos": 2, "estadoOxidacion": 1}, {"simbolo": "O", "cantidadAtomos": 1, "estadoOxidacion": -2}]}`
Explicación:
- Carga Hidrógeno = $2 \times 1 = 2$
- Carga Oxígeno = $1 \times (-2) = -2$
- Carga Neta = $2 + (-2) = 0$. Como la carga es 0, el estado es `"Estable"`.
Resultado esperado: `{ "cargaNeta": 0, "estabilidad": "Estable", "valido": true }`

### Caso 2: Radical iónico viable (Sulfato)
Entrada: formula = `{"compuesto": "Ion Sulfato (SO4)", "elementos": [{"simbolo": "S", "cantidadAtomos": 1, "estadoOxidacion": 6}, {"simbolo": "O", "cantidadAtomos": 4, "estadoOxidacion": -2}]}`
Explicación:
- Carga Azufre = $1 \times 6 = 6$
- Carga Oxígeno = $4 \times (-2) = -8$
- Carga Neta = $6 + (-8) = -2$. Al no ser 0, pero estar en el rango de -3 a 3, clasifica como `"Ion Poliatomico Viable"`.
Resultado esperado: `{ "cargaNeta": -2, "estabilidad": "Ion Poliatomico Viable", "valido": true }`

## Explicacion final
El algoritmo aborda la validación molecular mediante una reducción algebraica de vectores de estado (`cantidad` y `valencia`). Al transformar las propiedades de enlace químico en un balance aritmético simple de suma cero, permite al sistema automatizar la detección de inconsistencias de laboratorio o errores de transcripción en fórmulas complejas.