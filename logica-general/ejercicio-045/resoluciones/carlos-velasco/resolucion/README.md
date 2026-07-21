# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo de objetos `vehiculos`, donde cada uno contiene `placa`, `averia` y `urgente`.
* **Proceso**: Segmentación del inventario en tres grupos de prioridad mediante filtrado, seguido de una concatenación en orden jerárquico.
* **Salida**: Un nuevo arreglo de objetos reordenado según la prioridad establecida.

## Reglas identificadas

1. Prioridad absoluta: Vehículos con avería en "frenos".
2. Prioridad intermedia: Vehículos marcados como "urgentes" que no tienen avería en frenos.
3. Prioridad baja: Vehículos sin urgencia y con averías que no son de frenos.

## Pruebas

### Caso normal

* **Entrada**: `[{ placa: "ABC-123", averia: "cambio aceite", urgente: false }, { placa: "XYZ-789", averia: "frenos", urgente: false }, { placa: "LMN-456", averia: "motor", urgente: true }]`
* **Resultado esperado**: `[{ placa: "XYZ-789", averia: "frenos", urgente: false }, { placa: "LMN-456", averia: "motor", urgente: true }, { placa: "ABC-123", averia: "cambio aceite", urgente: false }]`

### Caso borde

* **Entrada**: `[{ placa: "CAR-001", averia: "frenos", urgente: true }, { placa: "CAR-002", averia: "frenos", urgente: false }]`
* **Resultado esperado**: `[{ placa: "CAR-001", averia: "frenos", urgente: true }, { placa: "CAR-002", averia: "frenos", urgente: false }]`

## Explicacion final

La solución funciona al utilizar métodos de filtrado funcional que separan los datos en subgrupos basados en reglas de negocio específicas; luego, al combinar estos grupos mediante el operador spread, se garantiza que los vehículos críticos aparezcan siempre al principio de la lista, cumpliendo con la jerarquía establecida.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Frenos**: `v.averia === "frenos"`
* **Otros Urgentes**: `v.urgente && v.averia !== "frenos"`
* **Normales**: `!v.urgente && v.averia !== "frenos"`