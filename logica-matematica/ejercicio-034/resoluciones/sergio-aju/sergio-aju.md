# Ejercicio 034: Calculadora de Costos de Tatuajes

##  Descripción
Este proyecto resuelve el cálculo automatizado de costos para un estudio de tatuajes. El programa procesa las dimensiones, el tipo de diseño (lineal o relleno) y la complejidad para determinar un precio final, aplicando descuentos automáticos cuando el valor supera los 500.

## Lógica del Problema

### Tabla de Procesamiento
| Entrada | Proceso | Salida |
| :--- | :--- | :--- |
| `ancho`, `alto` | Validación (deben ser > 0) | Error si son inválidos |
| `tipo` | Cálculo de perímetro o área | Costo base |
| `esComplejo` | Aplicación de recargo (30%) | Costo ajustado |
| `costo` | Aplicación de descuento (10%) si > 500 | Costo final |

### Reglas de Negocio
1. **Validación:** Cualquier medida de 0 o negativa retorna costo 0.
2. **Cálculo Base:**
   - **Lineal:** Perímetro $\times$ 5 ($2 \times (\text{ancho} + \text{alto}) \times 5$).
   - **Relleno:** Área $\times$ 10 ($\text{ancho} \times \text{alto} \times 10$).
3. **Complejidad:** Si es complejo, el costo se multiplica por 1.30.
4. **Descuento:** Si el total excede 500, se aplica un 10% de descuento multiplicando por 0.90.

## Cómo ejecutar
1. Asegúrate de tener **Node.js** instalado.
2. Copia el archivo `.js` en tu carpeta local.
3. Ejecuta el siguiente comando en tu terminal:
   ```bash
   node nombre-apellido.js