<<<<<<< HEAD
# Reto de Conteo Combinatorio - Kickboxing

# Autor:

Sergio Ajú

## Análisis
- **Entrada:** Un arreglo de números (puntos base de los participantes), un bono (entero) y una penalización (entero).
- **Proceso:** Sumatoria de puntos base, aplicación aritmética del bono y penalización, y clasificación según rangos establecidos.
- **Salida:** Un objeto con el puntaje final, la categoría asignada y una explicación del proceso.

## Reglas identificadas
1. **Cálculo base:** El puntaje final se calcula como: (Suma de participantes) + bono - penalización.
2. **Validación:** Si el arreglo está vacío, se asume una suma base de 0.
3. **Clasificación:**
   - `elite`: Puntaje final >= 50.
   - `competitivo`: Puntaje final entre 20 y 49.
   - `novato`: Puntaje final menor a 20.

## Pruebas

### Caso normal
- **Entrada:** `participantes: [12, 18, 25, 30]`, `bono: 8`, `penalización: 3`
- **Resultado esperado:** `puntaje_final: 90`, `clasificación: elite`

### Caso borde
- **Entrada:** `participantes: []`, `bono: 5`, `penalización: 10`
- **Resultado esperado:** `puntaje_final: -5`, `clasificación: novato`

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado [Node.js](https://nodejs.org/) en tu equipo.
2. Abre tu terminal en la carpeta `resoluciones/nombre-apellido/`.
3. Ejecuta el archivo utilizando el comando: `node nombre-apellido.js`.
4. El script mostrará en consola los resultados de las pruebas definidas.

## Explicación final
La solución utiliza el método `reduce()` para realizar la acumulación de los puntos base de manera limpia. Se implementó una función centralizada que recibe los parámetros y devuelve un objeto estructurado, lo cual facilita la lectura del resultado. Las reglas de clasificación se gestionaron mediante una estructura `if/else if/else`, garantizando que cada posible resultado de la operación aritmética caiga en una categoría lógica y definida.
=======
# Ejercicio 031 - Conteo Combinatorio en Kickboxing

## Autor: 

Sergio Ajú

## Analisis

- **Entrada**: 
  - `participantes`: Arreglo de números enteros.
  - `bono`: Valor numérico a sumar.
  - `penalizacion`: Valor numérico a restar.
- **Proceso**: 
  - Cálculo de la suma total del arreglo.
  - Aplicación de ajustes (bono y penalización).
  - Clasificación del resultado final según umbrales predefinidos.
- **Salida**: 
  - Objeto conteniendo el puntaje final, la clasificación obtenida y una breve explicación.

## Reglas identificadas

1. **Sumatoria**: El puntaje base se obtiene sumando todos los valores de la lista de participantes.
2. **Modificadores**: Se suma el bono al puntaje base y se resta la penalización.
3. **Clasificación**: 
   - `> 50`: "profesional"
   - `20 - 50`: "competitivo"
   - `< 20`: "amateur"

## Pruebas

### Caso normal

**Entrada**: 
```javascript
participantes: [12, 18, 25, 30], bono: 8, penalizacion: 3
>>>>>>> b5749f1b11320b83884e1c03eab41eca2d845b1b
