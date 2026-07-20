## Analisis
- **Entrada**: El tipo de clima y el nivel de presupuesto.
- **Proceso**: Utilizo una tabla de decisión lógica para evaluar todas las combinaciones posibles de condiciones.
- **Salida**: El material de construcción recomendado.

## Reglas aplicadas
| Clima | Presupuesto | Material Recomendado |
| :--- | :--- | :--- |
| Humedo | Alto | Acero inoxidable |
| Humedo | Bajo | Madera tratada |
| Seco | Alto | Piedra natural |
| Seco | Bajo | Ladrillo estándar |

## Pruebas
- **Caso Normal**: `clima: "humedo", presupuesto: "alto"` -> Resultado: "Acero inoxidable".
- **Caso Borde (Seco y Bajo)**: `clima: "seco", presupuesto: "bajo"` -> Resultado: "Ladrillo estándar".

## Explicacion
Una tabla de decisión es como un mapa de rutas. En lugar de escribir mil `if` desordenados, organicé las reglas en una estructura donde cada combinación de entrada tiene una única salida definida.