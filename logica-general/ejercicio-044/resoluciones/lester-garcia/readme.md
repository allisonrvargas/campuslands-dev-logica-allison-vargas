# Plantilla de solucion

## Analisis

- Entrada:
  - motos:
    - { modelo: "Yamaha FZ", disponible: true, cilindraje: 150 }
    - { modelo: "Honda CB190R", disponible: false, cilindraje: 190 }
    - { modelo: "Suzuki Gixxer 250", disponible: true, cilindraje: 250 }
    - { modelo: "KTM Duke 390", disponible: true, cilindraje: 390 }

- Proceso:
  - Recorrer el inventario de motos.
  - Verificar que cada moto esté disponible.
  - Comprobar que su cilindraje sea mayor o igual a 200 cc.
  - Agregar las motos que cumplan ambas condiciones a la lista de resultados.

- Salida:
  - motos seleccionadas:
    - Suzuki Gixxer 250
    - KTM Duke 390
  - motivo: Cumplen con las condiciones del filtro.

## Reglas identificadas

1. Solo se consideran motos que estén disponibles.
2. El cilindraje debe ser mayor o igual a 200 cc.
3. Las motos que cumplan ambas condiciones se agregan al resultado.
4. Si ninguna moto cumple las condiciones, se informa que no existen resultados.

## Pruebas

### Caso normal

Entrada:

motos:
- { modelo: "Yamaha FZ", disponible: true, cilindraje: 150 }
- { modelo: "Honda CB190R", disponible: false, cilindraje: 190 }
- { modelo: "Suzuki Gixxer 250", disponible: true, cilindraje: 250 }
- { modelo: "KTM Duke 390", disponible: true, cilindraje: 390 }

Resultado esperado:

motos seleccionadas:
- Suzuki Gixxer 250
- KTM Duke 390

motivo: Cumplen con las condiciones del filtro.

### Caso borde

Entrada:

motos:
- { modelo: "Yamaha FZ", disponible: false, cilindraje: 150 }
- { modelo: "Honda CB190R", disponible: false, cilindraje: 190 }

Resultado esperado:

motos seleccionadas:
[]

motivo: Ninguna moto cumple con las condiciones.

## Explicacion final

La solución funciona porque recorre el inventario y aplica dos condiciones de filtrado de forma simultánea: que la moto esté disponible y que tenga un cilindraje de al menos 200 cc. Solo las motos que satisfacen ambas reglas se incluyen en el resultado, garantizando una selección correcta y verificable.