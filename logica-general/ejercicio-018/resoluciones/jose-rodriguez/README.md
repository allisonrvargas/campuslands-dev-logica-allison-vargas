# Reto: Getor de turnos y triage de produccion - Estacion de soldadura 

Este repositorio contiene la arquitectura logica y el codigo de resolucion para el reto de ordenamiento de turnos de atencion en un entorno de manufactura y metalmecanica. A diiferencia de los filtros binarios cruzados, este ejercicio implementa un **algoritmo de clasificacion jerarquica (Triage)** para optimizar la carga de trabajo de los operarios, seleccionando el proceso metalurgico ideal segun el riesgo tecnico y los materiales.

---

## Objetivo del Reto

Construir un script interactivo por interfaz de linea de comandos (CLI) capaz de evaluar las condiciones de seguridad y estructurales de un componente metalico, asignar un turno inequivoco en la linea de produccion y emitir un reporte tecnico completamente verificable por el instructor.

---

# Plantilla de solucion

## Analisis

- **Entrada:**

    - identificador_pieza: Cadena de texto (str) que almacena el codigo de trazabilidad del componente, sanitizando con .strip().
    - tipo_material: Cadena de texto (str) que define la metalurgia de la pieza, estandarizada mediante .strip().capitalize() (Acero / Aluminio / Hierro).
    - es_estructura_critica: Indicador cualitativo (str) normalizado en consola para detectar urgencias de soporte (Si/no).
    - nivel_deformacion: Indicador cualitativo (str) de control de calidad previo (Alto / Bajo).
- **Proceso:**
    - **Embudo de Clasificacion jerarquica:** El programa aplica un orden de prioridad descendente estricto usando un bloque if=elif-else. Las variables de riesgo de accidente humano o colapso estructural (es_estructura_critica o nivel_deformacion == "Alto") actuan como "mecanismo de interrup'cion", absorbiendo el flujo de inmediato.
    - **Escape secuencial para Atributos:** Si la pieza es segura, el procesador evalua la naturaleza quimica del material para asignar bahias de trabajo especializadas (por ejemplo, el Aluminio requiere tratamientos distintos al Acero).
- **Salida:**
    - turno_asignado: Cadena de texto (str) con el veredicto visual del nivel del turno de la pieza (Turno 1 al 4).
    - proceso_soldadura: Directiva tecnica que indica el metodo de arco electronico ideal (MIG, TIG o Electrodo).
    - tiempo_estimado_minutos: Valor ccuantitativo entero (int) de planificacion logistica de tiempo.

## Reglas identificadas 

1. **Turno 1 (Prioridad Critica):** Si el componente es de una estructura critica **O** tiene un nivel de deformacion alto, se interrumpe la fila ordinaria para enviarlo a la bahia de emergencia (Uso de conector logico inclusivo or).
2. **Turno 2 (Prioridad Media):** Si la pieza es segura, pero su material es aluminio, pasa a una linea especial de alimentacion continua con gas Argon para evitar la contaminacion del bano de fusion.
3. **Turno 3 (Fila Estandar):** Piezas estables de "Acero" para al proceso MIG/MAG comun de alta velocidad para produccion continua.
4. **Turno 4(Fila de reserva):** Cualquier otro material (como hierro fundido) o pieza comun cae en el bloque else general por descarte, asignandosele soldadura por electrodo revestido de mantenimiento.

## Pruebas

### Caso normal

- **Entrada:**
  - `identificador_pieza`: Vigas_Soporte_A3
  - `tipo_material`: aluminio
  - `es_estructura_critica`: No
  - `nivel_deformacion`: Bajo
- **Resultado esperado:**
  - `Turno Asignado:       实时 ⏱️ TURNO 2: PRIORIDAD MEDIA (Bahía de Materiales No Ferrosos)`
  - `Proceso Técnico:      MIG con gas Argón puro (Alimentación continua de alambre)`
  - `Tiempo de Ocupación:  60 minutos`

### Caso borde

- **Entrada:**
  - `identificador_pieza`: Tuberia_Presion_B6
  - `tipo_material`: acero
  - `es_estructura_critica`: No
  - `nivel_deformacion`: Alto
- **Resultado esperado:**
  - `Turno Asignado:       ⚡ TURNO 1: ATENCIÓN INMEDIATA (Bahía de Emergencia)`
  - `Proceso Técnico:      TIG (Alta precisión y control térmico riguroso para evitar fallas estructurales)`
  *(Prueba la precisión del conector `or`: aunque la tubería es de acero común y no es una emergencia declarada, el nivel de deformación alto dispara de inmediato el protocolo de máxima prioridad en la estación).*

## Explicacion final 

Mi solucion funciona de manera eficiente porque modela la priorizacion de un taller utilizando una estructura de control lineal de descarte jerarquico. En lugar de procesar los datos de forma caotica o mediante condicioonales anindados dificiles de mantener, elk algritmo situa los riesgos estructurales en la cuspide del bloque condicional. Una vez que se detecta un peligro, el programa ejecuta una salida rapida e ignora el resto de comprobaciones secundarias en la CPU. Al utilizar metodos defensivos como .capitalize() y aislar las variables de tiempo y proceso en cada bloque, se garantiza una entrega limpia, libre de redundancias y prefectamente verificable para el control de calidad.