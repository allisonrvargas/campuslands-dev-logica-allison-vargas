function validarMaterial(material) {
    const { esIgnifugo, esReciclado } = material;

    if (esIgnifugo && esReciclado) {
        return { dictamen: "apto", razon: "Cumple con normas de seguridad y sostenibilidad." };
    } 
    
    if (esIgnifugo && !esReciclado) {
        return { dictamen: "limitado", razon: "Cumple seguridad, requiere mejora sostenibilidad." };
    }
    
    if (!esIgnifugo && esReciclado) {
        return { dictamen: "limitado", razon: "Ecológico, requiere tratamiento de seguridad." };
    }

    return { dictamen: "no apto", razon: "No cumple con las normas básicas de seguridad ni sostenibilidad." };
}

const testMaterial = { tipo: "acero", esIgnifugo: true, esReciclado: false };
console.log(validarMaterial(testMaterial));