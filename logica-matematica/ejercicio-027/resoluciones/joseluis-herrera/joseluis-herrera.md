# Ejercicio 27

# Explicación
en este ejercicio encapsula las reglas de negocio en un motor validador externo (verificar_metadatos), abstrayendo las comparaciones complejas. El programa procesa la playlist guardando los errores detectados dentro de un diccionario clave-valor ({Título: Tipo de Inconsistencia}), lo que simplifica la lectura del reporte y optimiza las consultas directas por nombre de pista.