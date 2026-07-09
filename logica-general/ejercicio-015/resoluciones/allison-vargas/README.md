# Plantilla de solucion

## Analisis

- **Entrada:** Un objeto (`encargo`) que contiene las especificaciones artísticas del cliente: el tipo de lienzo (`formato`), los puntos por pulgada (`resolucionDpi`) y los derechos de distribución (`usoComercial`).
- **Proceso:** Validar la entrada. Posteriormente, asignar un precio según el tamaño, rechazar los valores técnicos insuficientes y aplicar un recargo porcentual si la ilustración se usará para fines comerciales.
- **Salida:** Un objeto con el estado del trámite ("Cotizado", "Rechazado" o "Fallo técnico"), el precio final en dólares y un resumen con los detalles evaluados.

## Reglas identificadas

1. **Catálogo de Formatos:** Solo se manejan precios estipulados para "Avatar" ($25) e "Ilustración Completa" ($70). Cualquier otro formato se cancela.
2. **Estándar de Calidad:** Si el cliente pide menos de 300 DPI de resolución, la solicitud se detiene para evitar entregar un archivo pixelado.
3. **Derechos de Autor:** Si la obra se marca para uso comercial, se suma un recargo extra equivalente al 50% del valor base asignado al inicio.

## Pruebas

### Caso normal

Entrada:
```javascript
const encargo = {
  formato: "Ilustración Completa",
  resolucionDpi: 300,
  usoComercial: true
};
Resultado esperado:
JSON
{
  "estado": "Cotizado",
  "precioTotalUSD": 105,
  "motivo": "El encargo de tipo 'Ilustración Completa' con 300 DPI fue procesado correctamente (Uso comercial: Sí)."
}
Caso borde
Entrada:

JavaScript
const encargo = {
  formato: "Avatar",
  resolucionDpi: 72,
  usoComercial: false
};
Resultado esperado
JSON
{
  "estado": "Fallo técnico",
  "motivo": "La resolución solicitada debe ser de al menos 300 DPI para garantizar una calidad profesional."
}
Explicacion final
La solución funciona muy bien porque procesa los pedidos de dibujo digital siguiendo un orden comercial lógico. Al verificar primero el tipo de dibujo y su calidad técnica, el programa descarta trabajos inviables antes de hacer cuentas. El uso de reglas sencillas permite calcular el costo base rápidamente y aplicar el extra por uso comercial sin enredos, garantizando que el presupuesto final sea exacto y cumpla con las políticas del artista de forma automatizada.