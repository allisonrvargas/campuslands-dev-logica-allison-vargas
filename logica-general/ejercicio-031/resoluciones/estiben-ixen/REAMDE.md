Analisis
Entrada: Un arreglo de objetos, donde cada objeto contiene el nombre del peleador, su peso en kg y sus años de experiencia.

Proceso: Categorizar a cada peleador según su peso corporal y ordenar la lista completa basándose en su nivel de experiencia de forma descendente.

Salida: Un objeto que contiene el conteo total de atletas y la lista organizada con su nueva categoría asignada.

Reglas identificadas
Categorización por peso:

< 60 kg: Pluma.

60 - 75 kg: Welter.

> 75 kg: Pesado.

Jerarquía de experiencia: Ordenar la lista final para que los peleadores con mayor trayectoria aparezcan primero.

Validación: Manejo de listas vacías para evitar errores en el procesamiento.

Pruebas
Caso normal
Entrada: peleadores: [{nombre: "Juan", peso: 70, experiencia: 5}, {nombre: "Ana", peso: 55, experiencia: 8}]

Resultado esperado:

```JSON


{
  "total": 2,
  "lista": [
    { "nombre": "Ana", "peso": 55, "experiencia": 8, "categoria": "Pluma" },
    { "nombre": "Juan", "peso": 70, "experiencia": 5, "categoria": "Welter" }
  ]
}
```
Caso borde
Entrada: peleadores: []

Resultado esperado: { mensaje: "No hay peleadores registrados" }

Explicacion final
La solución utiliza map para enriquecer los datos originales con la nueva propiedad categoria, lo cual es una técnica eficiente para transformar estructuras sin perder información. Posteriormente, el método sort organiza la información basándose en la experiencia, permitiendo que los promotores del torneo identifiquen rápidamente a los atletas más experimentados en cada categoría. Este flujo lógico asegura que, sin importar el tamaño de la lista, el resultado esté siempre categorizado y jerarquizado.

Sugerencia
Verifica cada operacion con calculos manuales antes de confiar en el codigo.