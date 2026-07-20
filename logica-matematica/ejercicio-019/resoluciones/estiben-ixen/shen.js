/**
 * Valida si una reacción química simple está balanceada en número de átomos.
 * @param {Object} reactivos - Cantidad de átomos por elemento.
 * @param {Object} productos - Cantidad de átomos por elemento.
 */
function validarBalanceoQuimico(reactivos, productos) {
    const elementosReactivos = Object.keys(reactivos);
    
    for (let elemento of elementosReactivos) {
        if (reactivos[elemento] !== productos[elemento]) {
            return {
                valido: false,
                mensaje: `Desbalance en ${elemento}: ${reactivos[elemento]} en reactivos vs ${productos[elemento]} en productos.`
            };
        }
    }
    
    return { valido: true, mensaje: "La ecuación está balanceada." };
}

const reactivos = { H: 4, O: 2 };
const productos = { H: 4, O: 2 };

console.log(validarBalanceoQuimico(reactivos, productos));