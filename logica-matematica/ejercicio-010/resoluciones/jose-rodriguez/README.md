# Plantilla de solucion

## Analisis 

- Entrada:
    - `costo_total_paquete` (float): Monton total neto cobrando por la agencia de viajes por concepto de transportes y hospedaje.
    - `cantidad_viajeros` (int): Numero de personas que componen el grupo y entre cuales se distribuira el gasto de forma equitativa.

- Proceso:
    1. Dividir el costo total entre la cantidad de viajeros para obtener la cuota inicial con precision de punto flotante.
    2. Implementar una funcion de redondeo estrategico superior (`math.ceil`) escalando a dos decimales para proteger la recaudacion fisica de dinero, garantizando que el remanente fraccionario de los centavos sea cubierto por el redondeo tecnico.
    3. Evaluar mediante una estructura de control condicional si la cuota individual final redondeada se mantiene por debajo o igual al umbral critico de $150.0

- Salida:
    - `costo_exacto_individual` (flotante con alta precision decimal).
    - `costo_redondeado_individual` (flotante limitado y ajustado a 2 decimales).

    ## Reglas identificadas

    1. **Precedencia de la division cero:** El tamano del grupo de turistas actua como denominador de la proporcion de reparto. Si el valor ingresado es 0, el flujo matematico se detiene para prevenir un fallo de excepcion critica (`ZeroDivisionError`).
    2. **Proteccion de caja financiera (Redondeo hacia Arriba):** En la economia del turismo, los redondeos tradicionales (`round()`) pueden redondear hacia abajo, generando perdidas acumuladas cuando los grupos son grandes. El uso de `math.ceil` transfiere las fracciones sobrantes a favor de la agencia, asegurando que la suma de las partes cubra con presicion el total.
    3. **Frontera de accesibilidad comercial:** El limite para categorizar un viaje como accesible esta estrictamente fijado en las dos posiciones decimales monetarias ($Cuota \le 150.00$). El veredicto del sistema se ejecuta basandose en el numero ya procesado por el filtro de redondeo.

    ## Pruebas

    ### Caso normal 

Entrada:
- `costo_total_paquete`: 400.0
- `cantidad_viajeros`: 3

Resultado esperado:
- `Costo exacto`: 133.3333...
- `Cuota asignada (Redondeada)`: 133.34 *(Cálculo manual: 400 / 3 = 133.3333. Multiplicado por 100 = 13333.33. Techo entero = 13334. Dividido entre 100 = 133.34)*
- `Clasificación`: "Paquete Turístico Accesible (Económico / Backpacking)" *(Cálculo lógico: 133.34 <= 150.0 es Verdadero)*

### Caso borde

Entrada:
- `costo_total_paquete`: 450.0
- `cantidad_viajeros`: 3

Resultado esperado:
- `Costo exacto`: 150.0000
- `Cuota asignada (Redondeada)`: 150.00 *(Cálculo manual: Al ser una división exacta sin residuos flotantes, el techo del entero se mantiene intacto)*
- `Clasificación`: "Paquete Turístico Accesible (Económico / Backpacking)" *(Cálculo lógico: Evalúa de forma inclusiva la frontera exacta del rango mediante el operador `<=`, validándolo en el último centavo accesible disponible)*

## Explicacion Final

Estasolucion funcional porque sustituye el redondeo comercial empirico por un redondeo matematico determinista de techo superior (`ceil`). Al forzar que los centabos fraccionarios se desplacen hacia la unidad superior mas cercana en la escala de dos decimales, se elimina el riesgo de desajustes en el cobro a frupos de turistas. El aislamiento del codigo mediante bloques condicionales anidados garantiz estabilidad ante entradas iincoherentres o nulas.