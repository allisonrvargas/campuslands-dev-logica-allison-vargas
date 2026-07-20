# Plantilla de solucion

## Analisis

- Entrada: Una lista de items que estan en diferentes estados: ("aprobado","pendiente",
"bloquedo").El nivel de prioridad es alta.La regla es revisar lo de estado bloqueados primero.

- Proceso: Lo primero ue haremos sera revisar si la prioridad es alta y cuál es la regla. Luego, buscaremos dentro de la lista de ítems para ver si hay alguno que esté bloqueado. Si lo encuentro, tengo que darle atención a ese antes que a los demás.


- Salida: Un mensaje que diga qué acción debe de tomar en este caso revisar los de estado bloqueado y la razón de por qué se hace usando la regla prioriza riesgos.

## Reglas identificadas

1.  Si la orden dice que los bloqueados van primero y la cosa es urgente, lo primero que debe de buscar es si hay alguien con etsado bloqueado.

2. Si hay alguien en estado "bloqueado" en la lista, la acción que debe hacer es ir a revisar ese caso.

3. Si no hay nadie bloqueado paso a revisar lo que sigue, que sería los de estado pendiente.

## Pruebas

### Caso normal

Entrada: 

items: ["aprobado", "pendiente", "bloqueado"]
prioridad: "alta"
regla: "revisar bloqueados primero"

Resultado esperado:

accion: revisar bloqueado
motivo: la regla prioriza riesgos antes de tareas normales.

### Caso borde

Entrada:
(¿Qué pasa si debe buscar los de estado bloueados primero pero en la lista no hay ninguno?)
items: ["aprobado", "pendiente"]
prioridad: "alta"
regla: "revisar bloqueados primero"

Resultado esperado:
accion: revisar pendiente
motivo: como no encontré a nadie bloqueado, sigo con las tareas pendientes.

## Explicacion final

En esta solución el programa no da una respuesta automática, sino que lo que hace es ponerse a leer lo que hay en la lista. Primero revisa si la orden de revisar bloqueados está activa. Si esta activa buscara la palabra bloqueado en el grupo de datos. Si la encuentra, avisa que va a revisar el de estado bloqueado; y si no lo encuentra como en el caso borde donde no había ningún bloqueado, pasar a revisar lo que está pendiente.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.
