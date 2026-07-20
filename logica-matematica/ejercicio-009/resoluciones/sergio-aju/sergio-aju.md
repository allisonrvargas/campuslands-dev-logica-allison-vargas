# Plantilla de solucion

## Analisis

- **Entrada:** Un número `espectadores` y un número `capacidadSala`.
- **Proceso:** Usar el operador módulo (`%`) para hallar cuántas personas sobran fuera de los grupos completos de la sala y clasificar la situación del evento.
- **Salida:** Un objeto con el estado de la sala y una explicación basada en el residuo.

## Reglas identificadas

1. **Sala Llena:** Si `espectadores % capacidadSala === 0`, la sala está perfectamente ocupada.
2. **Aforo Parcial:** Si el residuo es menor o igual a la mitad de la capacidad, se considera baja demanda (aplicar descuento).
3. **Alta Demanda:** Si el residuo es mayor a la mitad de la capacidad, se necesita abrir otra sala.

## Pruebas

### Caso normal

**Entrada:**
```javascript
espectadores: 45, capacidadSala: 20