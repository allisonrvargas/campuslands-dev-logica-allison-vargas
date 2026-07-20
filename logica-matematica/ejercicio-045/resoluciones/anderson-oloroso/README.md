# Plantilla de solucion

## Análisis

### Entrada

Un arreglo de servicios realizados en un taller mecánico.

Cada servicio contiene:

- `cliente`: persona propietaria del vehículo.
- `vehiculo`: modelo del vehículo.
- `horasTrabajo`: tiempo utilizado en reparación.
- `costoRepuestos`: valor de piezas utilizadas.
- `prioridad`: nivel de atención.
- `estadoVehiculo`: condición del vehículo.


---

## Proceso

1. Validar información del servicio.
2. Calcular costo de mano de obra.
3. Aplicar descuentos o recargos.
4. Aplicar límites mínimos y máximos de cobro.
5. Clasificar el tipo de servicio.
6. Acumular ingresos del taller.


---

## Salida

El programa muestra:

- cantidad de servicios.
- servicios urgentes.
- ingresos totales.
- detalle del costo de cada reparación.


---

# Fórmulas utilizadas


## Costo mano de obra


\[
ManoObra =
HorasTrabajo \times 25000
\]


Ejemplo:


\[
12 \times 25000 = 300000
\]


---

## Descuento


Si:


\[
HorasTrabajo \geq 10
\]


Entonces:


\[
Descuento = 10\%
\]


---

## Recargo urgente


Si:


\[
Prioridad = Urgente
\]


Entonces:


\[
Recargo = 15\%
\]


---

## Costo final


\[
Total =
ManoObra +
Repuestos -
Descuento +
Recargo
\]


---

# Reglas de límites


## Cobro mínimo


Si:


\[
Total < 30000
\]


Entonces:


\[
Total = 30000
\]


---

## Cobro máximo


Si:


\[
Total > 500000
\]


Entonces:


\[
Total = 500000
\]


---

# Clasificación del servicio


| Valor final | Categoría |
|-|-|
| 300000 o más | Servicio mayor |
| 100000 - 299999 | Servicio medio |
| Menor de 100000 | Servicio básico |


---

# Validaciones


Un servicio es válido si:


\[
HorasTrabajo > 0
\]


\[
CostoRepuestos \geq 0
\]


Los datos obligatorios no pueden estar vacíos.


---

# Caso normal


Entrada:


```javascript
{
 cliente:"Carlos",
 vehiculo:"Toyota Corolla",
 horasTrabajo:12,
 costoRepuestos:180000,
 prioridad:"Urgente"
}
```


Cálculo:


Mano de obra:


\[
12 \times 25000=300000
\]


Descuento:


\[
300000 \times 10\%=30000
\]


Recargo:


\[
300000 \times 15\%=45000
\]


Total:


\[
300000+180000-30000+45000
\]


\[
=495000
\]


Resultado:


```text
Servicio mayor
```


---

# Caso borde


Entrada:


```javascript
{
 cliente:"Luis",
 vehiculo:"Moto",
 horasTrabajo:1,
 costoRepuestos:0,
 prioridad:"Normal"
}
```


Cálculo:


\[
25000
\]


Como es menor al mínimo:


```text
Costo final = 30000
```


---

# Explicación final

La solución representa un sistema de control para un taller mecánico donde cada reparación se calcula utilizando reglas de negocio.

El programa maneja costos, descuentos, recargos y límites de cobro para evitar valores fuera del rango permitido. Utiliza funciones, arreglos, ciclos, acumuladores, condicionales y cálculos numéricos para simular una gestión real de servicios mecánicos.