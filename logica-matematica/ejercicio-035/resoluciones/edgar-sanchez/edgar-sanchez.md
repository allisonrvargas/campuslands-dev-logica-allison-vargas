# Monitoreo de Velocidad de Trazo en Dibujo Digital

## Pensamiento del Problema
El problema plantea analizar la dinámica del movimiento de un cursor o lápiz óptico sobre un lienzo digital interactivo. Para optimizar funciones como el suavizado de líneas (*stabilization*) o la opacidad dinámica en softwares artísticos, es indispensable medir la velocidad con la que se desplaza el usuario.

El reto matemático se reduce a evaluar el cociente de la tasa de cambio espacial sobre la temporal. Sin embargo, en un entorno interactivo real, los datos enviados por la tableta digitalizadora pueden arrojar lecturas extremas o corruptas (como un tiempo de cero milisegundos en actualizaciones instantáneas). Por ello, el algoritmo implementa filtros lógicos estrictos para asegurar que la división se realice exclusivamente sobre valores válidos del dominio de la física.

## Elección del Lenguaje
Se seleccionó **Python (.py)** porque proporciona una sintaxis limpia y expresiva que permite prescindir totalmente de comentarios internos, logrando que la semántica del flujo sea el propio manual de uso. Su manejo nativo de números reales con precisión flotante se alinea perfectamente con los requerimientos técnicos de cálculo dimensional en desarrollo de herramientas gráficas e interfaces de usuario avanzadas sin necesidad de módulos externos.