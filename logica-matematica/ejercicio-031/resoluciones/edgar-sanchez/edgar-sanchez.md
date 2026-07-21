# Conteo Combinatorio de Peleas de Kickboxing

## Pensamiento del Problema
El problema requiere determinar cuántos enfrentamientos únicos se pueden organizar entre dos grupos distintos de competidores (Categoría A y Categoría B), bajo la regla de que un miembro de la Categoría A solo se enfrenta a un miembro de la Categoría B.

Este escenario se resuelve mediante el principio multiplicativo del conteo combinatorio. Si cada competidor del primer grupo puede pelear con cualquiera del segundo grupo, el total de combinaciones posibles es el producto directo de ambos conjuntos. 

Como casos especiales, se determinó que si cualquiera de las categorías no tiene competidores (cero), el resultado debe ser cero, ya que no es posible estructurar un combate. Del mismo modo, si se ingresan valores negativos por error, el sistema los intercepta y retorna cero como medida de control de flujo.

## Elección del Lenguaje
Se seleccionó **JavaScript (.js)** debido a su ligereza para estructurar tipos de datos primitivos y ejecutar operaciones aritméticas directas sin sobrecarga de memoria. La arquitectura del código se centró en la claridad del flujo lógico, utilizando un arreglo de objetos para automatizar el ciclo de pruebas y validar el comportamiento del algoritmo ante escenarios de éxito, valores nulos y datos erróneos de forma inmediata.