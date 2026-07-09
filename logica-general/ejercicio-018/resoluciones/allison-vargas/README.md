# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo de objetos (`colaTrabajos`) que contiene las solicitudes del taller con datos como el nombre del cliente, el tipo de unión mecánica (`tipoSoldadura`) y si requiere atención inmediata (`prioridadAlta`).
- **Proceso:** Verificar que existan pedidos en la lista. Después, recorrer el listado usando un ciclo para separar las tareas prioritarias o industriales de las tareas comunes, guardándolas en bandejas de espera independientes.
- **Salida:** Un único arreglo ordenado donde todos los trabajos urgentes quedan posicionados al inicio de la fila de atención, seguidos por los trabajos regulares.

## Reglas identificadas

1. **Control de Apertura:** Si el arreglo de entrada viene completamente vacío, el programa se detiene avisando que no hay órdenes para organizar en la jornada.
2. **Criterio de Turno Preferente:** Cualquier trabajo marcado con alta prioridad o que requiera el proceso especializado "TIG Industrial" salta automáticamente al frente de la cola de turnos.
3. **Orden de Fusión:** El sistema debe juntar las listas de forma estricta, asegurando que las tareas normales nunca bloqueen o retrasen los proyectos críticos de herrería y estructuras.

## Pruebas

### Caso normal

Entrada:
```javascript
const colaTrabajos = [
  { cliente: "Talleres Unidos", descripcion: "Rejas estándar", tipoSoldadura: "MIG", prioridadAlta: false },
  { cliente: "Constructora Alfa", descripcion: "Tubería de alta presión", tipoSoldadura: "TIG Industrial", prioridadAlta: true },
  { cliente: "Particular", descripcion: "Reparación chasis", tipoSoldadura: "Electrodo", prioridadAlta: false }
];
Resultado esperado:
JSON
[
  {
    "cliente": "Constructora Alfa",
    "tarea": "Tubería de alta presión",
    "tipo": "TIG Industrial"
  },
  {
    "cliente": "Talleres Unidos",
    "tarea": "Rejas estándar",
    "tipo": "MIG"
  },
  {
    "cliente": "Particular",
    "tarea": "Reparación chasis",
    "tipo": "Electrodo"
  }
]
Caso borde
Entrada:

JavaScript
const colaTrabajos = [];
Resultado esperado
JSON
{
  "accion": "Taller inactivo",
  "motivo": "No hay trabajos de soldadura programados en la lista de espera."
}
Explicacion final
La solución funciona muy bien porque organiza la fila del taller de soldadura de forma automática y sin enredos. Al revisar los trabajos uno por uno, el programa separa de inmediato los proyectos urgentes o industriales de los arreglos comunes. Luego, los vuelve a juntar asegurándose de poner los más importantes al principio de la lista. Esto permite que los soldadores sepan exactamente qué pieza trabajar primero, optimizando los tiempos del taller y evitando que los trabajos críticos se queden olvidados al fondo de la fila.