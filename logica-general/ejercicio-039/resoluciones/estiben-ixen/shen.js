function gestionarInventario(quimico) {
    const { esCorrosivo, esInflamable, cantidad } = quimico;

    if (cantidad <= 0) {
        return { ubicacion: "Error", razon: "Cantidad insuficiente o inválida." };
    }

    if (esCorrosivo && esInflamable) {
        return { ubicacion: "Bloqueado", razon: "Incompatibilidad química extrema: corrosivo e inflamable." };
    } 
    
    if (esCorrosivo || esInflamable) {
        return { ubicacion: "Almacén B", razon: "Sustancia peligrosa, requiere contenedores especiales." };
    }

    return { ubicacion: "Almacén A", razon: "Almacenamiento estándar permitido." };
}

const reactivo = { nombre: "Sodio", esCorrosivo: false, esInflamable: true, cantidad: 20 };
console.log(gestionarInventario(reactivo));