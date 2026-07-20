## Analisis
- **Entrada**: Velocidad del viento y nivel de experiencia del paracaidista.
- **Proceso**: Evalúo primero el peligro absoluto (viento muy fuerte) y luego una combinación de viento moderado con falta de experiencia.
- **Salida**: La decisión final (saltar o cancelar) junto con el motivo.

## Reglas aplicadas
1. **Seguridad Absoluta**: Si el viento es > 40 km/h, no se salta sin importar la experiencia.
2. **Seguridad Gradual**: Si el viento es > 25 km/h, solo saltan quienes tienen experiencia >= 5.
3. **Normalidad**: Si el viento es <= 25 km/h, se procede con el salto.

## Pruebas
- **Caso Normal**: `viento: 15, experiencia: 2` -> Resultado: "Proceder con el salto".
- **Caso Borde**: `viento: 30, experiencia: 3` -> Resultado: "Cancelar salto (viento moderado, poca experiencia)".

## Explicacion
Para resolver este problema, apliqué la lógica de "filtros": primero descarto lo más peligroso. La estructura de `if` encadenados me permite evaluar primero la restricción más crítica, asegurando que no ocurra un error humano en condiciones inseguras.