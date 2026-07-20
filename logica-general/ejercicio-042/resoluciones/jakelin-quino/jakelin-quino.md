# Analisis

- **Entrada:** `golesLocal`, `golesVisitante`, `faltasLocal`, `faltasVisitante` (todos números enteros).
- **Proceso:** Se aplican reglas de integridad para descartar valores negativos y reglas de negocio para marcar partidos con disciplina irregular.
- **Salida:** Un objeto que contiene un `estado` (Invalido, Observacion, Valido) y un `mensaje`.

## Reglas aplicadas

1. **Integridad básica:** Ninguna métrica de juego puede ser negativa.
2. **Control de disciplina:** Si cualquier equipo supera las 15 faltas, el sistema marca el partido en estado de observación para revisión arbitral.
3. **Estado normal:** Si los datos son positivos y las faltas están en rango, el registro es válido.

## Como ejecutar o revisar

1. Asegúrate de tener instalado Node.js.
2. Ejecuta el archivo en la terminal con: `node nombre-apellido.js`.
3. Prueba diferentes combinaciones de goles y faltas para observar los distintos estados de validación.

## Casos probados

### Caso normal
- **Entrada:** 3, 2, 5, 4
- **Resultado:** { estado: "Valido", mensaje: "Datos procesados correctamente" }

### Caso borde
- **Entrada:** 1, 1, 20, 2
- **Resultado:** { estado: "Observacion", mensaje: "Partido con exceso de faltas, requiere revisión arbitral" }

## Explicacion final

Primero verificamos los datos que harían imposible el cálculo (negativos) y, en segundo lugar, aplicamos las reglas de negocio específicas del torneo (límite de faltas).