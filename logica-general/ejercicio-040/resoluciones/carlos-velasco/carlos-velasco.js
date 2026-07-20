const seleccionarPedido = (pedidos) => {
    let vipPrioritario = pedidos.find(p => p.tipo === "vip" && p.esperaMin > 15);
    
    if (vipPrioritario) {
        return { 
            atender: vipPrioritario.cliente, 
            prioridad: "VIP - Alta",
            urgente: vipPrioritario.esperaMin > 30 
        };
    }

    let regular = pedidos.filter(p => p.tipo === "regular").sort((a, b) => b.esperaMin - a.esperaMin)[0];

    return {
        atender: regular ? regular.cliente : "Ninguno",
        prioridad: "Regular",
        urgente: regular ? regular.esperaMin > 30 : false
    };
};

const listaPedidos = [
    { cliente: "Ana", tipo: "regular", esperaMin: 20 },
    { cliente: "Luis", tipo: "vip", esperaMin: 20 }
];

console.log(seleccionarPedido(listaPedidos));