## Analisis
- **Entrada**: Un string que representa la estrategia actual del oponente.
- **Proceso**: Comparo la entrada con las tres estrategias posibles mediante condicionales `if/else if`.
- **Salida**: La recomendación de la raqueta ideal para contrarrestar esa estrategia.

## Reglas aplicadas
1. **Defensivo**: Se requiere más control para mover al rival.
2. **Agresivo**: Se requiere velocidad para neutralizar sus ataques.
3. **Equilibrado**: Se requiere una raqueta versátil.

## Pruebas
- **Caso Normal**: `estrategiaRival = "agresivo"` -> Resultado: "Raqueta de velocidad".
- **Caso Borde (Estrategia desconocida)**: `estrategiaRival = "inexistente"` -> Resultado: "Raqueta polivalente" (por defecto).

## Explicacion
Como solo hay tres opciones principales, la comparación directa con `if` es la forma más clara y legible de resolverlo, asegurando que cada estrategia tenga su contraparte lógica.