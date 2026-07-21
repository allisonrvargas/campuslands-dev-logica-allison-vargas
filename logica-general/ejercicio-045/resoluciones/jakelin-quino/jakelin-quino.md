# Analisis

- **Entrada:** `esEmergencia` (boolean), `tipoReparacion` (string), `esClienteFiel` (boolean).
- **Proceso:** Evaluación de condiciones jerárquicas que determinan el nivel de urgencia, desde la emergencia hasta el mantenimiento rutinario.
- **Salida:** Un objeto con la `prioridad` asignada y la `accion` a seguir.

## Reglas aplicadas

1. **Emergencia (Crítica):** Cualquier situación marcada como emergencia pasa al frente de la fila.
2. **Seguridad (Alta):** Reparaciones críticas como motor o frenos tienen prioridad alta.
3. **Fidelización (Media):** Clientes frecuentes tienen mejor turno que el resto.
4. **Mantenimiento (Baja):** Todo lo demás se programa según la agenda disponible.

## Casos probados

### Caso normal
- **Entrada:** esEmergencia: True, tipoReparacion: "electrico", esClienteFiel: False
- **Resultado:** { prioridad: "Crítica", accion: "Atención inmediata" }

### Caso borde
- **Entrada:** esEmergencia: False, tipoReparacion: "mantenimiento", esClienteFiel: False
- **Resultado:** { prioridad: "Baja", accion: "Programar según disponibilidad" }

## Explicacion final

Al evaluar primero la condición de mayor gravedad (emergencia), filtramos los casos críticos inmediatamente. El resto de las reglas se organizan de tal manera que el cliente fiel siempre obtenga un beneficio.