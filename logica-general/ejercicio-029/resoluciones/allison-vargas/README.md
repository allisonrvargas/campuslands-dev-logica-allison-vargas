# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo de objetos (`grupoSobrevivientes`) donde cada personaje tiene variables del entorno de terror como su identificación (`nombre`), proximidad del peligro (`monstruoCerca`), energía eléctrica (`bateriaLinterna`) y compañía (`estaSolo`).
- **Proceso:** Validar la presencia de datos. Recorrer la lista con un ciclo analizando las variables lógicas combinadas mediante condiciones para transformar el estado base del personaje ("A salvo") hacia niveles de pánico superiores.
- **Salida:** Un reporte detallado con el estado del grupo completo, el conteo final de sobrevivientes que se mantienen activos y la situación personalizada de cada uno.

## Reglas identificadas

1. **Filtro de Escena:** Si la lista de personajes llega en blanco, la simulación se congela informando que no hay actores en pantalla para procesar.
2. **Estado Atrapado (Fallo Crítico):** Si el enemigo está en la misma zona (`monstruoCerca: true`) y el personaje no tiene forma de alumbrar (`bateriaLinterna: 0`), su estado pasa automáticamente a "Atrapado" y se cuenta como una baja.
3. **Estado Perseguido y Asustado:** Si tiene luz ante el peligro, el estado se mantiene en "Perseguido". Si el peligro está lejos pero el personaje no tiene compañeros cerca (`estaSolo: true`), su estado se degrada a "Asustado".

## Pruebas

### Caso normal

Entrada:
```javascript
const grupoSobrevivientes = [
  { nombre: "Carlos", monstruoCerca: false, bateriaLinterna: 50, estaSolo: true },
  { nombre: "Sofía", monstruoCerca: true, bateriaLinterna: 20, estaSolo: false },
  { nombre: "Luis", monstruoCerca: true, bateriaLinterna: 0, estaSolo: true }
];
Resultado esperado:
JSON
{
  "estadoGrupal": "Simulación completada",
  "personajesProcesados": 3,
  "sobrevivientesActivos": 2,
  "monitoreo": [
    {
      "nombre": "Carlos",
      "estadoFinal": "Asustado",
      "situacion": "No hay peligro directo en este momento, pero el aislamiento eleva el pánico."
    },
    {
      "nombre": "Sofía",
      "estadoFinal": "Perseguido",
      "situacion": "El peligro está al acecho, pero la linterna encendida les permite correr."
    },
    {
      "nombre": "Luis",
      "estadoFinal": "Atrapado",
      "situacion": "El peligro los alcanzó en la oscuridad total sin luz para escapar."
    }
  ]
}
Caso borde
Entrada:

JavaScript
const grupoSobrevivientes = [];
Resultado esperado
JSON
{
  "estadoGrupal": "Escena vacía",
  "motivo": "No hay personajes registrados en la escena actual para simular sus estados."
}
Explicacion final
La solución funciona muy bien porque imita los cambios de comportamiento clásicos de una película de miedo de forma totalmente automatizada. Al usar condiciones ordenadas, el programa puede evaluar el entorno de cada personaje para saber si están seguros, huyendo o si la falta de luz los hizo caer en manos del monstruo. Gracias a este ciclo, el sistema mantiene un conteo exacto de quiénes siguen activos y quiénes no, permitiendo recrear una escena tensa y lógica sin importar cuántos sobrevivientes queden en el mapa.