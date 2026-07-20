function asignarTurnosSoldadura(listadoSoldadores, chispasMaximas) {
    if (!listadoSoldadores || listadoSoldadores.length === 0) {
      return [];
    }
  
    const asignacionFinal = [];
  
    for (let ficha = 0; ficha < listadoSoldadores.length; ficha++) {
      const empleado = listadoSoldadores[ficha];
      let rolAsignado = "Auxiliar";
  
      if (empleado.experienciaAnios >= 5 && empleado.certificacionVigente) {
        rolAsignado = "Soldador Principal";
      } else if (empleado.experienciaAnios >= 2 || empleado.certificacionVigente) {
        rolAsignado = "Soldador Especialista";
      }
  
      if (empleado.horasTrabajadasSemana > 40) {
        rolAsignado = "Descanso Obligatorio";
      }
  
      asignacionFinal.push({
        nombreEmpleado: empleado.nombre,
        puestoTurno: rolAsignado,
        nivelRiesgo: empleado.experienciaAnios < 1 ? "Alto" : "Estandar"
      });
    }
  
    return asignacionFinal;
  }