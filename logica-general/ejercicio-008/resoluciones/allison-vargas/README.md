# Plantilla de solucion

## Analisis

- **Entrada:** Un objeto (`pelicula`) que representa una pieza audiovisual de ciencia ficción con atributos obligatorios de título, año de lanzamiento y duración.
- **Proceso:** Ejecutar una cadena ordenada de condicionales (flujo paso a paso). Cada etapa actúa como un filtro estricto; si la película no cumple con los requisitos del paso actual, el flujo se interrumpe inmediatamente y devuelve el punto exacto de quiebre.
- **Salida:** Un objeto de diagnóstico con el estado final ("Aprobado" o "Rechazado"), indicando el paso donde falló y el motivo justificado de la decisión.

## Reglas identificadas

1. **Estructura por Etapas:** No se evalúan todas las reglas a la vez. El flujo progresa al Paso N únicamente si el Paso N-1 fue superado con éxito.
2. **Restricción de Época:** El festival solo acepta largometrajes producidos en el año 1970 o posterior. Películas anteriores quedan descalificadas de forma automática.
3. **Criterio de Formato:** Para garantizar una experiencia de maratón viable, la duración debe oscilar estrictamente entre un mínimo de 60 minutos y un máximo de 240 minutos.

## Pruebas

### Caso normal

Entrada:
```javascript
const pelicula = {
  titulo: "Interstellar",
  anio: 2014,
  duracionMinutos: 169
};
Resultado esperado:
JSON
{
  "estado": "Aprobado",
  "tituloPelicula": "Interstellar",
  "motivo": "La película superó exitosamente todas las etapas secuenciales del flujo de admisión."
}
Caso borde
Entrada:

JavaScript
const pelicula = {
  titulo: "Metropolis",
  anio: 1927,
  duracionMinutos: 153
};
Resultado esperado
JSON
{
  "estado": "Rechazado",
  "pasoFallo": "Paso 2: Filtro Cronológico",
  "motivo": "El año de estreno (1927) es anterior al límite permitido de 1970."
}
Explicacion final
La solución es efectiva porque utiliza estructuras de control condicional de retorno temprano (early return), lo cual previene procesamientos innecesarios y anidaciones complejas de código (el clásico infierno de los 'if' anidados). Al evaluar metadatos, cronología y formato en una secuencia rígida paso a paso, blindamos el sistema de organización del festival frente a registros inválidos o incompatibles con la temática del evento.