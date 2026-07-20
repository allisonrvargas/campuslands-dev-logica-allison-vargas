# Resolución Ejercicio: Validación de Fórmulas Químicas

## Como pensaste el problema
El reto se abordó tratando la reacción química como un sistema lógico. Primero, validé la "Ley de Conservación de la Masa" mediante una comparación de flotantes (usando tolerancia para errores de redondeo). Segundo, apliqué una validación de rango para las valencias, simulando estabilidad atómica.

## Reglas aplicadas
1. **Conservación de la masa:** La masa de los reactivos debe ser prácticamente igual a la de los productos.
2. **Estabilidad:** La valencia del elemento debe estar dentro del rango permitido (1-4).
3. **Verificación:** Si cualquiera de las dos reglas falla, la fórmula se marca como inválida.

## Como ejecutar o revisar tu solucion
1. Asegúrate de tener Node.js instalado.
2. Ejecuta el comando: `shen.js`.

## Que casos probaste
- **Caso normal:** Reactivos y productos balanceados con valencia estable.
- **Caso borde:** Desbalance de masa significativo que dispara el error de la Ley de Lavoisier.