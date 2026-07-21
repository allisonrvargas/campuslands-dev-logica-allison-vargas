# Plantilla de solucion

## Analisis

- **Entrada:**
  - `zona`: Una cadena de texto (String) que define el tipo de proyecto ("Residencial", "Comercial", "Industrial").
  - `metros_cuadrados`: Un número (entero o flotante) que representa la extensión del plano arquitectónico.
  - `presupuesto_usd`: Un número que representa el dinero asignado para el procesamiento del render 3D.
- **Proceso:**
  - Validar que los datos numéricos sean coherentes (valores mayores a cero).
  - Evaluar las condiciones combinadas usando una estructura de árbol de decisión (tabla de decisión) para cruzar el tipo de zona con el tamaño y presupuesto.
- **Salida:**
  - Una cadena de texto con el tipo de motor de renderizado o nivel de detalle (LOD) recomendado para el proyecto arquitectónico.

## Reglas identificadas

1. **Prioridad por Presupuesto Comercial:** En proyectos comerciales, si el presupuesto supera los $5,000 USD, se ignora el tamaño en metros cuadrados y se asigna directamente la experiencia interactiva en tiempo real.
2. **Prevalencia Técnica Industrial:** En zonas industriales, el presupuesto pasa a segundo plano; el motor decide la complejidad visual (LOD 300 o 400) basándose estrictamente en el tamaño de la infraestructura.
3. **Restricción Residencial de Calidad:** Para viviendas residenciales menores a 100 m², se exige un presupuesto mínimo de $1,500 USD para acceder al motor Premium; si supera los 100 m², el requisito sube a $3,000 USD debido a la carga de procesamiento de polígonos.

## Pruebas

### Caso normal

Entrada:
- Zona: "Residencial"
- Metros Cuadrados: 80
- Presupuesto USD: 2000

Resultado esperado:
"Renderizado Fotorrealista Premium (Path Tracing)"

### Caso borde

Entrada:
- Zona: "Comercial"
- Metros Cuadrados: -10
- Presupuesto USD: 5000

Resultado esperado:
"Error: Datos de dimensiones o presupuesto inválidos"

## Explicacion final

Escribe aqui por que tu solucion funciona:
Esta solución funciona porque traduce de forma directa una matriz o tabla de decisión multidimensional en bloques lógicos `if-elif-else` jerárquicos. Al evaluar primero los casos de error (valores negativos o en cero), el programa evita realizar cálculos lógicos costosos o incoherentes con datos corruptos. La segmentación limpia por zonas garantiza que el flujo tome el camino óptimo rápidamente, asegurando escalabilidad si el estudio de arquitectura decide añadir nuevas reglas de negocio en el futuro.