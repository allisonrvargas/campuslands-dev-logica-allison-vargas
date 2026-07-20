Análisis
Entrada: Un objeto con los datos de un partido: golesLocal (número), golesVisitante (número), faltasTecnicas (número) y jugado (booleano).

Proceso: Validar la coherencia de los datos numéricos y técnicos. Un partido con datos incoherentes (goles negativos, faltas excesivas) no debe entrar al ranking.

Salida: Un dictamen de validación (aprobado, rechazado) y el motivo detallado.

Reglas identificadas
Regla 1 (Integridad): Si jugado es false, el partido no es válido para el ranking.

Regla 2 (Goles): Ningún marcador puede tener goles negativos.

Regla 3 (Fair Play): Si la suma de faltasTecnicas en ambos equipos supera 10, el partido es anulado por conducta antideportiva.

Regla 4 (Validación): Si todo es correcto, el partido se considera válido.

Pruebas
Caso normal
Entrada: golesLocal: 3, golesVisitante: 2, faltasTecnicas: 4, jugado: true

Resultado esperado: estado: "aprobado", motivo: "Datos validados correctamente."

Caso borde
Entrada: golesLocal: 1, golesVisitante: 1, faltasTecnicas: 15, jugado: true

Resultado esperado: estado: "rechazado", motivo: "Partido anulado por exceso de faltas técnicas (Fair Play)."

Explicación final
La solución aplica un filtro de validación secuencial. Antes de realizar cálculos estadísticos (como sumar puntos), el sistema limpia los datos rechazando registros que no cumplen con los estándares de juego o la integridad numérica. Esto previene errores de "basura entra, basura sale" (GIGO) en la tabla de clasificación final.

Sugerencia
Antes de programar, dibuja un diagrama de flujo con cada regla como una decisión (rombo). Si una regla falla, el flujo debe ir directo a "rechazado", ahorrándote comprobaciones innecesarias.