# Analisis

- **Entrada:** `nave` (objeto que contiene un sub-objeto `sistemas` con estados booleanos).
- **Proceso:** Se utiliza una lista de control (`pasos`) para iterar sobre los sistemas de la nave. Se valida si cada sistema obligatorio está activo.
- **Salida:** Un objeto que confirma si el `despegue` es posible o indica el `error` específico.

## Reglas aplicadas

1. **Dependencia Crítica:** Si un sistema marcado como `requerido` está en `false`, el proceso se detiene inmediatamente.
2. **Flexibilidad:** Los sistemas no marcados como `requerido` (ej. escudos) no detienen el flujo si están desactivados.
3. **Validación Secuencial:** El despegue solo se autoriza si todos los pasos obligatorios pasan la verificación.

## Casos probados

### Caso normal
- **Entrada:** Todos los sistemas críticos en `true`.
- **Resultado:** { despegue: true, mensaje: "Despegue autorizado." }

### Caso borde
- **Entrada:** `oxigeno` en `false`.
- **Resultado:** { despegue: false, error: "Fallo crítico en: oxigeno" }

## Explicacion final

Esta arquitectura es ideal para flujos de trabajo donde los pasos pueden cambiar o aumentar en el futuro, ya que no necesitamos modificar la lógica del ciclo, solo actualizar el arreglo de configuraciones `pasos`.