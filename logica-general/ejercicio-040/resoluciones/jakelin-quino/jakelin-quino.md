## Analisis
- **Entrada**: Presupuesto disponible y preferencia alimenticia.
- **Proceso**: Primero evalúo si el presupuesto alcanza para algo más que el "básico". Si es así, selecciono el plato según la dieta.
- **Salida**: La sugerencia del menú más adecuado.

## Reglas aplicadas
1. **Presupuesto mínimo**: Si es menor a 10 USD, siempre se ofrece el combo básico.
2. **Personalización**: Si el presupuesto permite, se elige según la dieta (vegano, carnívoro o equilibrado).

## Pruebas
- **Caso Normal**: `presupuesto: 15, dieta: "vegano"` -> Resultado: "Bowl de quinua...".
- **Caso Borde (Presupuesto bajo)**: `presupuesto: 5, dieta: "carnívoro"` -> Resultado: "Combo básico...".

## Explicacion
Primero filtro por el presupuesto (que es la restricción más fuerte) y, solo si se cumple, paso a evaluar la preferencia del usuario. Esto hace que el sistema sea más inteligente, ya que no ofrece platos caros si el cliente no puede pagarlos.