# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo de objetos (`inventarioMotos`) donde cada motocicleta cuenta con propiedades de control como su nombre (`modelo`), costo (`precioUSD`), estado legal (`documentosAlDia`) y salud mecánica (`requiereMantenimiento`).
- **Proceso:** Validar la presencia de datos. Luego, recorrer el lote de vehículos con un ciclo, evaluando mediante condicionales si cumplen los requisitos comerciales o si deben enviarse a revisión por fallas o falta de papeles.
- **Salida:** Un objeto de reporte que clasifica las motocicletas en dos listas independientes: las listas para ser vendidas de inmediato y las retenidas en el área técnica.

## Reglas identificadas

1. **Filtro de Apertura:** Si el inventario no contiene ninguna motocicleta registrada, el flujo se frena informando que no hay vehículos para organizar en el sistema.
2. **Prioridad de Retención:** Cualquier motocicleta que requiera reparaciones o que no tenga sus documentos legales en orden se descarta de la exhibición y se envía a la lista del taller.
3. **Aprobación Comercial:** Solo se clasifican como listas para la venta aquellas motos que superen de forma simultánea los controles mecánicos y legales del concesionario.

## Pruebas

### Caso normal

Entrada:
```javascript
const inventarioMotos = [
  { modelo: "Yamaha R3", precioUSD: 5500, documentosAlDia: true, requiereMantenimiento: false },
  { modelo: "Honda CB190R", precioUSD: 3200, documentosAlDia: true, requiereMantenimiento: true },
  { modelo: "Suzuki Gixxer", precioUSD: 2800, documentosAlDia: false, requiereMantenimiento: false }
];
Resultado esperado:
JSON
{
  "estado": "Filtro aplicado con éxito",
  "totalMotosAnalizadas": 3,
  "listas": {
    "aptasParaVenta": [
      {
        "modelo": "Yamaha R3",
        "precio": 5500
      }
    ],
    "retenidasEnTaller": [
      {
        "modelo": "Honda CB190R",
        "motivo": "Mantenimiento urgente"
      },
      {
        "modelo": "Suzuki Gixxer",
        "motivo": "Documentación incompleta"
      }
    ]
  }
}
Caso borde
Entrada:

JavaScript
const inventarioMotos = [];
Resultado esperado
JSON
{
  "estado": "Inventario inactivo",
  "motivo": "No hay registros de motocicletas en la base de datos para filtrar."
}
Explicacion final
La solución funciona muy bien porque organiza el lote de motocicletas separándolas de manera automática según sus necesidades. Al revisar cada vehículo con un ciclo, el programa descarta de inmediato las motos que no tienen papeles o que necesitan reparaciones mecánicas, enviándolas a la lista de espera del taller. De esta forma, el concesionario solo muestra en su mostrador las motos que están al 100% listas y seguras, logrando un control del inventario impecable, transparente y libre de errores.