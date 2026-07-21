# Plantilla de solucion: Problema 34

## Analisis
El problema se enfoca en resolver la asignación automatizada de zonas de aterrizaje y la autorización de salto para equipos de paracaidismo en función de las ráfagas de viento y la experiencia acumulada del grupo. A diferencia de un análisis de telemetría individual, la gestión en tierra de un aeródromo debe coordinar la logística de los aviones de transporte según la velocidad del viento en diferentes capas atmosféricas y el peso total de la carga para evitar derivas peligrosas fuera del perímetro de seguridad.

- Entrada: Velocidad del viento en superficie en nudos (entero), peso total del equipo con equipamiento en kilogramos (flotante) y nivel de certificación del instructor a cargo (texto: `"A"`, `"B"`, `"C"`, `"D"`).
- Proceso:
  1. Validar las restricciones climáticas de viento en superficie.
  2. Determinar la viabilidad del salto cruzando la fuerza del viento con la licencia del instructor.
  3. Calcular la zona de dispersión o el área de aterrizaje recomendada basada en la masa total de la carga para evitar accidentes en zonas residenciales colindantes.
- Salida: Un objeto con el veredicto de la operación ("Lanzamiento Autorizado", "Operación Suspendida") y el código de la zona asignada.

## Reglas identificadas
1. Restricción Climática Absoluta por Viento: Si la velocidad del viento en superficie es estrictamente mayor a 25 nudos, la operación se declara automáticamente como `"Operación Suspendida"` para todas las licencias debido al riesgo de arrastre.
2. Ventana de Restricción por Licencia:
   - Si el viento está entre 16 y 25 nudos, únicamente los instructores con licencias avanzadas (`"C"` o `"D"`) pueden liderar el salto. Si la licencia es `"A"` o `"B"`, el estado será `"Operación Suspendida"`.
   - Si el viento es menor o igual a 15 nudos, cualquier tipo de licencia (`"A"`, `"B"`, `"C"`, `"D"`) está autorizada para saltar.
3. Asignación Logística de Zona de Aterrizaje: Si el salto es autorizado, la zona se calcula según el peso combinado:
   - Peso superior a $180 \text{ kg}$ (Saltos Tándem pesados o equipos acoplados) $\rightarrow$ `"Zona Alfa (Pista Principal)"`.
   - Peso entre $90 \text{ kg}$ y $180 \text{ kg}$ $\rightarrow$ `"Zona Bravo (Campo Abierto)"`.
   - Peso inferior a $90 \text{ kg}$ $\rightarrow$ `"Zona Charly (Área Ligera)"`.
4. Control de Consistencia de Datos: Si el peso es menor o igual a cero o la licencia no coincide con los estándares de la federación, el resultado final es un estado de `"Error de Parámetros"`.

## Pruebas

### Caso 1: Viento moderado con instructor calificado
Entrada: vientoNudos = 18, pesoKg = 200.0, licenciaInstructor = "C"
Explicación: El viento de 18 nudos exige licencia C o D (Cumple). El peso de 200 kg asigna Zona Alfa.
Resultado esperado: { "veredicto": "Lanzamiento Autorizado", "zonaAsignada": "Zona Alfa (Pista Principal)" }

### Caso 2: Suspensión por falta de rango en la licencia
Entrada: vientoNudos = 18, pesoKg = 85.0, licenciaInstructor = "B"
Explicación: El viento de 18 nudos es muy fuerte para un instructor con licencia B. El salto se cancela.
Resultado esperado: { "veredicto": "Operación Suspendida", "zonaAsignada": "Ninguna" }

### Caso 3: Error en parámetros
Entrada: vientoNudos = 10, pesoKg = -5.0, licenciaInstructor = "A"
Resultado esperado: { "veredicto": "Error de Parámetros", "zonaAsignada": "Invalida" }

## Explicacion final
La solución funciona porque implementa condicionales anidados estructurados que actúan como filtros en cascada. Primero evalúa la viabilidad meteorológica y legal, y solo si se aprueba el despacho del avión, procede a calcular las asignaciones físicas y logísticas en función de la masa del equipamiento.