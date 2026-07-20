## Analisis
- **Entrada**: Dos objetos: uno con las existencias totales y otro con lo necesario para la fórmula.
- **Proceso**: Recorro cada elemento de la receta. Si un ingrediente falta en el inventario o su cantidad es menor a la necesaria, marco un error.
- **Salida**: Mensaje de aprobación o aviso de qué ingrediente falta.

## Reglas aplicadas
1. **Existencia**: Si el ingrediente no existe en el objeto `inventario`, es error.
2. **Cantidad**: Si `inventario[i] < receta[i]`, es error.
3. **Aprobación**: Solo si todos los ingredientes pasan las reglas, se autoriza la fórmula.

## Pruebas
- **Caso Normal**: `receta: {Hidrógeno: 2}` -> Resultado: "Inventario aprobado".
- **Caso Borde (Falta material)**: `receta: {Carbono: 5}` -> Resultado: "Error: Inventario insuficiente de Carbono".

## Explicacion
Utilicé un objeto para el inventario porque facilita buscar ingredientes por su nombre (clave). El ciclo `for...in` es perfecto aquí porque recorre la receta y compara rápidamente con el inventario.