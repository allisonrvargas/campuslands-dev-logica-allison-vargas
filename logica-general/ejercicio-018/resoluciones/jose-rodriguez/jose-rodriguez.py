# 1. IDENTIFICAR ENTRADAS (Inputs)

print("=== SISTEMA DE GESTION DE TURNOS: ESTACION DE SOLDADURA ===")

# Capturamos la informacion critica de la pieza y su estado
identificador_pieza = input("Codigo o nombre de la pieza: ").strip()
tipo_material = input("Tipo de material (Acero / Aluminio / Hierro): ").strip().capitalize()
es_estructura_critica = input("Es estructura de sopoorte critica o de emergencia? (Si/No): ").strip().capitalize()
nivel_deformacion = input("Nivel de deformacion previo detectado (Alto / Bajo):").strip().capitalize()

# 2. PROCESAMIENTO (Estructura de asignacion de turnos por jerarquia)

# Aplicamos un logica de triage industrial de arriba hacia abajo (Mecanismo de esccape rapido).
# La prioridad mas alta absorbe el flujo de inmediato para garantizar la seguridad del taller.

if es_estructura_critica == "Si" or nivel_deformacion == "Alto":
    turno_asignado = "TURNO 1: ATENCION INMEDIATA (Bahia de Emergencia)"
    proceso_soldadura = "TIG ( Alta precision y contorl termico riguroso para evitar fallas estructurales)"
    tiempo_estimado_minutos = 30

elif tipo_material == "Aluminio":
# El aluminio requiere una preparacion especial de limpieza de capa de oxido antes de soldar
    turno_asignado = "TURNO 2: PRIORIDAD MEDIA (bahia de materiales no ferrosos)"   
    proceso_soldadura = "MMIG con gas Argon puto (Alimentacion continua de alambre)"
    tiempo_estimado_minutos = 60

elif tipo_material == "Acero":
    turno_asignado = "TURNO 3: REPARACION ESTANDAR (fila general)"
    proceso_soldadura = "MIG / MAG estandar (Flujo continuo de alta productivdad)"
    tiempo_estimado_minutos = 45

else:
    # Caso por defecto: Fundiciones pesadas, hierro fundido o mantenimiento menor de piezas ordinartias 
    turno_asignado = " TURNO 4: RESERVA / MANTENIMIENTO PREVENTIVO"
    proceso_soldadura = "SMAW (Electrodo Revestido - Ideal para espesoresz gruesos de hierro)"
    tiempo_estimado_minutos = 90

# 3. Entregar resultado verificable (Output)

print("\n-----------------------------------------")
print("=== ORDEN DE TRABAJO Y ASIGNACIÓN DE TURNO ===")
print(f"Elemento Indexado:    {identificador_pieza}")
print(f"Material Detectado:   {tipo_material}")
print(f"Turno Asignado:       {turno_asignado}")
print(f"Proceso Técnico:      {proceso_soldadura}")
print(f"Tiempo de Ocupación:  {tiempo_estimado_minutos} minutos")
print("-----------------------------------------")
