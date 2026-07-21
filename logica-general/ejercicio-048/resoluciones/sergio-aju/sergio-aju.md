# Flujos paso a paso - Películas de Ciencia Ficción

## Descripción
Sistema de gestión de flujos para proyectos cinematográficos. Automatiza la clasificación y el estado de los guiones basándose en presupuesto y naturaleza del proyecto.

## Reglas Aplicadas
- **Jerarquía:** El presupuesto alto sobrepasa cualquier estado inicial.
- **Automatización:** Las secuelas pasan a desarrollo inmediatamente si están en fase de propuesta.
- **Clasificación:** Etiquetado dinámico entre 'independiente', 'estándar' y 'secuela'.

## Cómo ejecutar
El archivo `nombre-apellido.js` procesa un array de objetos. Puedes invocar `procesarFlujoPeliculas(listaProyectos)` para obtener el nuevo flujo de estados.

## Casos Probados
- **Propuesta:** Proyectos nuevos sin secuela.
- **Blockbuster:** Presupuestos extremos que requieren junta directiva.