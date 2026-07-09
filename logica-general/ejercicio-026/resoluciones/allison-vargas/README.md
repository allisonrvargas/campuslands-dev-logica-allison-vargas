# Plantilla de solucion

## Analisis

- **Entrada:** Una lista con el catálogo de vehículos (`catalogoHiperdeportivos`) y un objeto con los requerimientos del comprador (`criteriosBusqueda`), como el nombre aproximado del auto y la potencia de velocidad mínima esperada.
- **Proceso:** Validar que existan datos en el inventario. Recorrer el arreglo con un bucle evaluando de forma simultánea que el texto coincida con el nombre del modelo y que la velocidad técnica registrada cubra o supere la exigencia del cliente.
- **Salida:** Un objeto con el estado del vehículo ("Vehículo localizado" o "No disponible"), su ficha técnica reducida y una etiqueta especial según su nivel de escasez en el mercado mundial.

## Reglas identificadas

1. **Filtro de Consulta:** Si el catálogo está vacío o no se envían especificaciones de rastreo, el proceso se aborta de inmediato para proteger los índices de búsqueda.
2. **Criterio de Coincidencia:** Un auto se considera hallado únicamente si su nombre contiene el texto buscado (sin importar mayúsculas) y al mismo tiempo su velocidad máxima es igual o mayor a la solicitada.
3. **Regla de Exclusividad:** Si el auto seleccionado cuenta con una producción total de 10 unidades o menos a nivel global, se etiqueta automáticamente como un producto bajo la modalidad de "Sobrepedido".

## Pruebas

### Caso normal

Entrada:
```javascript
const catalogoHiperdeportivos = [
  { nombre: "Bugatti Chiron Super Sport", velocidadMaxKmH: 440, precioAproximado: "$3.9M", unidadesProducidas: 30 },
  { nombre: "Koenigsegg Jesko Absolut", velocidadMaxKmH: 530, precioAproximado: "$3.0M", unidadesProducidas: 5 }
];

const criteriosBusqueda = { marcaModelo: "Chiron", velocidadMinimaKmH: 400 };
Resultado esperado:
JSON
{
  "estado": "Vehículo localizado",
  "datos": {
    "modelo": "Bugatti Chiron Super Sport",
    "velocidadMaxima": "440 km/h",
    "precioEstimado": "$3.9M",
    "disponibilidad": "Entrega Estándar"
  }
}
Caso borde
Entrada:

JavaScript
const catalogoHiperdeportivos = [
  { nombre: "Ferrari SF90 Stradale", velocidadMaxKmH: 340, precioAproximado: "$500k", unidadesProducidas: 500 }
 ];

const criteriosBusqueda = { marcaModelo: "SF90", velocidadMinimaKmH: 450 };
Resultado esperado
JSON
{
  "estado": "No disponible",
  "motivo": "No se encontró ningún hiperdeportivo que coincida con 'SF90' y alcance al menos 450 km/h."
}
Explicacion final
La solución funciona muy bien porque realiza un rastreo inteligente y rápido dentro del catálogo de autos de carreras hiperdeportivos. Al usar un ciclo ordenado, el programa compara las letras del modelo y la velocidad exacta al mismo tiempo, deteniendo la búsqueda en el momento justo en que encuentra el carro ideal. Además, incluye una regla de negocio excelente que revisa las unidades fabricadas para avisar si el vehículo es tan raro que requiere un pedido de fabricación especial, garantizando un servicio premium y sin fallas.