# Plantilla de solucion

## Analisis

- Entrada:
  - `listadoSoldadores`: Un arreglo de objetos donde cada objeto contiene la información técnica de un soldador (`nombre`, `experienciaAnios`, `certificacionVigente`, `horasTrabajadasSemana`).
  - `chispasMaximas`: Un valor de control ambiental que limita la carga de trabajo simultánea en el taller.

- Proceso:
  - El algoritmo verifica primero que el listado de personal no se encuentre vacío para evitar ejecuciones innecesarias.
  - Recorre secuencialmente cada registro de los soldadores mediante un ciclo controlado.
  - Evalúa los años de experiencia y la vigencia de su certificación técnica para categorizar el rol que le corresponde en el turno (`Soldador Principal`, `Soldador Especialista` o `Auxiliar`).
  - Aplica una sobrecondición de seguridad laboral basada en las horas trabajadas en la semana para forzar el descanso si excede el límite legal.
  - Determina el nivel de riesgo del puesto según la falta de experiencia en el área de chispas y fundición.

- Salida:
  - Un nuevo arreglo de objetos con el nombre del empleado, su puesto asignado para el turno y su nivel de riesgo operativo.

## Reglas identificadas

1. **Jerarquía por Capacidad:** El rol principal requiere obligatoriamente una combinación de alta experiencia (igual o mayor a 5 años) y certificación activa. Los roles intermedios se flexibilizan requiriendo solo una de las dos condiciones.
2. **Prioridad de Seguridad Laboral:** Cualquier soldador que acumule más de 40 horas de trabajo semanales es enviado automáticamente a "Descanso Obligatorio", ignorando sus competencias técnicas para prevenir accidentes por fatiga.
3. **Control de Riesgo Crítico:** Todo el personal con menos de 1 año de experiencia en el oficio se etiqueta bajo nivel de riesgo "Alto" para asignarle supervisión directa en el taller.

## Pruebas

### Caso normal

Entrada:
- `listadoSoldadores`: `[{ nombre: "Carlos", experienciaAnios: 6, certificacionVigente: true, horasTrabajadasSemana: 38 }, { nombre: "Luis", experienciaAnios: 0, certificacionVigente: false, horasTrabajadasSemana: 10 }]`

Resultado esperado:
- `[{ nombreEmpleado: "Carlos", puestoTurno: "Soldador Principal", nivelRiesgo: "Estandar" }, { nombreEmpleado: "Luis", puestoTurno: "Auxiliar", nivelRiesgo: "Alto" }]`

### Caso borde

Entrada:
- `listadoSoldadores`: `[{ nombre: "Jorge", experienciaAnios: 10, certificacionVigente: true, horasTrabajadasSemana: 45 }]`

Resultado esperado:
- `[{ nombreEmpleado: "Jorge", puestoTurno: "Descanso Obligatorio", nivelRiesgo: "Estandar" }]`

## Explicacion final

Escribe aqui por que tu solucion funciona.
Esta solución funciona porque implementa una estructura condicional en cascada que respeta estrictamente el orden de prioridades del taller de soldadura. Al evaluar primero las capacidades técnicas y posteriormente aplicar el filtro de seguridad de horas acumuladas, se garantiza que la fatiga prevalezca sobre el rango del empleado, evitando fallas humanas en entornos de alto riesgo. El filtrado preventivo al inicio del script blinda el sistema contra arreglos nulos o vacíos, manteniendo un rendimiento óptimo y un código limpio.