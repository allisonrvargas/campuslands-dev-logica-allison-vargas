# Validación de Datos - Ranking Fútbol Sala

## Autor 

Sergio Ajú

## Descripción
Sistema de control de calidad para el ingreso de datos en un torneo de fútbol sala. Evita que equipos con datos matemáticamente imposibles ingresen al ranking oficial.

## Pensamiento del problema
El problema se reduce a una validación de límites. Siendo que en el fútbol cada victoria otorga 3 puntos, la relación `puntos <= partidos * 3` es la ley fundamental para validar la integridad del dato.

## Reglas aplicadas
- **Validación de rango:** Se rechazan equipos con puntos negativos o partidos negativos.
- **Validación lógica:** Se rechazan equipos que superen la cantidad de puntos matemáticamente posibles según los juegos disputados.

## Ejecución
1. Coloca el archivo en tu carpeta `resoluciones/nombre-apellido/`.
2. Ejecuta con `node nombre-apellido.js`.

## Casos probados
- **Normal:** Equipo con 9 puntos en 3 partidos (resultado válido).
- **Borde:** Equipo con 15 puntos en 3 partidos (resultado inválido: 15 > 9).