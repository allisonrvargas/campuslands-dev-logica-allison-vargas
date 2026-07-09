# Ejercicio 027: Motor de Auditoría de Inventario y Segmentación Comercial de Motocicletas

## Análisis del Problema

El objetivo es desarrollar un componente de software para la gestión de inventarios en concesionarios que procese un lote de motocicletas, calcule métricas cuantitativas totales, clasifique las unidades por su gama de cilindraje y extraiga de forma eficiente la unidad con el precio más elevado bajo principios de inmutabilidad y programación defensiva.

* **Entrada:** Un objeto contenedor con la siguiente firma:
    * `inventario`: Array de Objetos (Cada objeto representa una motocicleta con las propiedades: `modelo` [String], `cilindraje` [Number], y `precio` [Number]).
* **Proceso:** 1. Validar la existencia de elementos en la colección mediante cláusulas de guarda preventivas para anular excepciones o desbordamientos en tiempo de ejecución.
    2. Inicializar contadores en cero para los tres rangos comerciales de cilindraje definidos.
    3. Establecer la primera motocicleta del lote como el máximo provisional de referencia.
    4. Ejecutar un ciclo iterativo lineal ($O(n)$) donde se evalúe el cilindraje con condicionales para sumarlo al contador correspondiente.
    5. Evaluar dinámicamente si el precio actual es mayor al de la referencia máxima, actualizando el puntero si se cumple la condición.
* **Salida:** Un objeto con la estructura estricta: `{ total_motos: number, clasificacion_gama: { urbana: number, intermedia: number, alta: number }, unidad_top: { modelo: string, precio: number } }`.

---

## Reglas de Negocio

1. **Segmentación de Rangos de Capacidad (Gamas):** Una unidad se clasifica en base a su motor en:
    * **Urbana:** Cilindraje estrictamente menor a 250cc ($< 250\text{cc}$).
    * **Intermedia:** Cilindraje desde 250cc hasta 600cc inclusive ($\ge 250\text{cc}$ y $\le 600\text{cc}$).
    * **Alta Cilindrada:** Cilindraje estrictamente mayor a 600cc ($> 600\text{cc}$).
2. **Determinación Eficiente del Máximo:** La búsqueda del elemento con el costo más elevado debe realizarse en un único recorrido lineal de tiempo $O(n)$ comparando elemento a elemento de forma progresiva.
3. **Control de Inventario Vacío (Caso Borde):** Si el lote ingresado no contiene registros (arreglo vacío), el sistema realiza una parada segura devolviendo los contadores en cero y la propiedad `unidad_top` como `null` para evitar errores de lectura.

---

## Casos de Prueba

### 1. Procesamiento de Inventario Estándar (Caso Normal)
* **Entrada:**
    ```json
    {
      "inventario": [
        { "modelo": "Honda Navi 110", "cilindraje": 110, "precio": 1500 },
        { "modelo": "Yamaha MT-03", "cilindraje": 321, "precio": 5500 },
        { "modelo": "BMW S 1000 RR", "cilindraje": 999, "precio": 22000 },
        { "modelo": "Kawasaki Ninja 400", "cilindraje": 399, "precio": 6800 }
      ]
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "total_motos": 4,
      "clasificacion_gama": {
        "urbana": 1,
        "intermedia": 2,
        "alta": 1
      },
      "unidad_top": {
        "modelo": "BMW S 1000 RR",
        "precio": 22000
      }
    }
    ```

### 2. Activación de Guarda por Lote Vacío (Caso Borde)
* **Entrada:**
    ```json
    {
      "inventario": []
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "total_motos": 0,
      "clasificacion_gama": {
        "urbana": 0,
        "intermedia": 0,
        "alta": 0
      },
      "unidad_top": null
    }
    ```

---

## Arquitectura de la Solución

La solución se diseña utilizando el patrón de **Cláusulas de Guarda** para sanear de inmediato el flujo de la aplicación ante colecciones vacías o parámetros nulos, evitando el anidamiento innecesario de bloques `if/else` (*Arrow Anti-pattern*). La acumulación de las clasificaciones y la búsqueda de la unidad más costosa se unifican dentro de un único ciclo iterativo optimizado, asegurando que la complejidad de tiempo se mantenga en un estricto $O(n)$ en el peor de los casos y una complejidad espacial de $O(1)$ al no duplicar estructuras de datos pesadas.

---

## Ejecución del Módulo

1. Asegúrate de contar con [Node.js](https://nodejs.org/) instalado en tu estación de trabajo (versión LTS recomendada).
2. Abre la consola de comandos o terminal en el directorio raíz de este ejercicio.
3. Ejecuta el script de la solución utilizando el comando:
    ```bash
    node maria-montepeque.js
    ```