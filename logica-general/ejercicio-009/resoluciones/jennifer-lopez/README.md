# Plantilla de solucion

## Analisis

- Entrada: Una pelicula de terror El Conjuro y el estado de animo del espectador ("asustado", "valiente" o "durmiendo").

- Proceso: Aqui simulamos como cambia la pantalla segun el estado del usuario. Si la pelicula da mucho miedo y el sistema lee que el estado del usuario es "asustado", debe cambiar el estado del reproductor para bajar el volumen o encender las luces. Si se quedo dormido, debe apagar todo.

- Salida: El cambio de estado del sistema de cine en casa.

## Reglas identificadas

1. Si la peli es de terror y el espectador se pone en estado "asustado", el sistema cambia el modo a "Modo Seguro" para bajar el volumen y prender luces tenues.
2. Si el espectador sigue en estado "valiente", la peli continua en "Modo Cine" normal con las luces apagadas y sonido a tope.
3. Si el espectador cambia al estado "durmiendo", el sistema es inteligente y cambia a "Modo Apagado" para no gastar luz ni despertar a nadie con los gritos de la peli.

## Pruebas

### Caso normal
Entrada: peliula: "El Conjuro", espectador: "asustado"
Resultado esperado: modoPantalla: "Modo Seguro", accion: "Encender luces tenues y bajar volumen."

### Caso borde
Entrada: peli: "El Conjuro", espectador: "durmiendo"
Resultado esperado: modoPantalla: "Modo Apagado", accion: "Apagar la pantalla y el sonido por completo."

## Explicacion final
Esta simulacion lee el estado emocional del usuario en tiempo real. Al pasar de "valiente" a "asustado", el condicional altera los valores del entorno (luces y sonido); y si el usuario se duerme (como en nuestro caso borde), el programa cambia el estado general del sistema a apagado para proteger el descanso de la persona.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.
