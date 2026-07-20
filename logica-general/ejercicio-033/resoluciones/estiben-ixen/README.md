Análisis
Entrada: Un objeto con alturaMetros, velocidadVientoKmh, estadoParacaidas (string) y experienciaSaltador (int).

Proceso: Filtrado mediante condiciones de seguridad (criterios de exclusión) seguido de una evaluación de riesgo para determinar si el salto es apto.

Salida: Estado de aptitud (apto), nivel de riesgo detectado y recomendación técnica.

Reglas identificadas
Equipo: El paracaídas debe estar "certificado" para proceder.

Límites atmosféricos: Vientos superiores a 40 km/h cancelan el salto por seguridad.

Altitud: Alturas menores a 1000 metros son consideradas de alto riesgo o inviables.

Evaluación de Riesgo: Se define como "alto" si hay vientos moderados (>25 km/h) o si un saltador poco experimentado (<50 saltos) intenta un salto a baja altura (<2000m).

Pruebas
Caso normal
Entrada: Altura 3000m, Viento 15 km/h, Equipo "certificado", Experiencia 100 saltos.

Resultado esperado: apto: true, nivelRiesgo: "bajo".

Caso borde
Entrada: Altura 1500m, Viento 30 km/h, Equipo "certificado", Experiencia 10 saltos.

Resultado esperado: apto: true, nivelRiesgo: "alto", recomendacion: "Uso de reserva obligatorio".

Explicación final
La lógica se estructura bajo un enfoque de seguridad primero. Primero eliminamos los casos inseguros (fail-fast) y, si el salto es posible, procedemos a una evaluación secundaria de riesgo. Esto es estándar en protocolos de aviación y deportes extremos, donde un error en la toma de decisiones puede ser fatal.

Sugerencia
Verifica que las unidades de medida (metros, km/h) sean consistentes antes de ingresar los datos al sistema.