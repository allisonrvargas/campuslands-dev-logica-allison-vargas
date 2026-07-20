# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo con las alternativas del menú (`opcionesComida`) y un objeto con los filtros del cliente (`preferencias`) que incluye el límite de dinero y el tiempo de tolerancia.
- **Proceso:** Validar que los datos de entrada existan. Recorrer el menú usando un ciclo para descartar los platos caros o tardados, y luego comparar las calificaciones para quedarse con la comida más rica y popular.
- **Salida:** Un objeto con el resultado de la búsqueda ("Opción seleccionada" o "Sin coincidencias"), el nombre del platillo ganador y un mensaje con la razón de la elección.

## Reglas identificadas

1. **Filtro de Registro:** Si no se introduce una lista de alimentos o faltan las preferencias del usuario, la búsqueda se cancela inmediatamente para evitar errores.
2. **Límites Obligatorios:** Ningún platillo puede pasar del costo máximo establecido ni demorarse más minutos de los que el cliente está dispuesto a esperar.
3. **Estrategia de Calidad:** Si hay varias comidas que cumplen con el precio y el tiempo, el sistema elegirá de forma automática la que tenga más estrellas de calificación.

## Pruebas

### Caso normal

Entrada:
```javascript
const opcionesComida = [
  { nombre: "Tacos de Asada", precio: 15, tiempoEsperaMinutos: 10, calificacionEstrellas: 4.2 },
  { nombre: "Mega Hamburguesa", precio: 35, tiempoEsperaMinutos: 25, calificacionEstrellas: 4.8 },
  { nombre: "Hot Dog Especial", precio: 20, tiempoEsperaMinutos: 12, calificacionEstrellas: 4.5 }
];

const preferencias = { presupuestoMax: 25, tiempoMaxMinutos: 15 };
Resultado esperado:
JSON
{
  "estado": "Opción seleccionada",
  "recomendacion": "Hot Dog Especial",
  "precio": "$20",
  "motivo": "Es la opción mejor calificada (4.5 estrellas) que llega a tiempo y cuida tu bolsillo."
}
Caso borde
Entrada:

JavaScript
const opcionesComida = [
  { nombre: "Tacos de Asada", precio: 15, tiempoEsperaMinutos: 10, calificacionEstrellas: 4.2 }
];

const preferencias = { presupuestoMax: 5, tiempoMaxMinutos: 10 };
Resultado esperado
JSON
{
  "estado": "Sin coincidencias",
  "motivo": "Ningún platillo de comida urbana se ajusta al presupuesto o al tiempo de espera solicitado."
}
Explicacion final
La solución funciona muy bien porque busca la mejor comida urbana siguiendo los gustos del cliente de forma inteligente. Primero, el programa borra de la lista los antojos que sean muy caros o que tarden demasiado en prepararse. Después, revisa los platos que quedaron y escoge el que tenga más estrellas. De esta manera, el sistema asegura una respuesta rápida y garantizada, eligiendo la opción más rica sin pasarse del dinero disponible ni hacer esperar de más al usuario.