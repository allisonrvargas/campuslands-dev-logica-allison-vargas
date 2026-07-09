pedidos = [
    {
        "cliente": "Carlos",
        "cantidad": 2,
        "precio_unitario": 35
    },
    {
        "cliente": "Laura",
        "cantidad": 4,
        "precio_unitario": 28
    },
    {
        "cliente": "Miguel",
        "cantidad": 3,
        "precio_unitario": 42
    },
    {
        "cliente": "Sofía",
        "cantidad": 5,
        "precio_unitario": 30
    },
    {
        "cliente": "Andrés",
        "cantidad": 1,
        "precio_unitario": 50
    }
]


def simular_ventas(pedidos):

    print("=== SIMULACIÓN DE VENTAS ===")

    for pedido in pedidos:

        subtotal = pedido["cantidad"] * pedido["precio_unitario"]
        iva = subtotal * 0.12
        total = subtotal + iva

        print(f'Cliente: {pedido["cliente"]}')
        print(f'Cantidad: {pedido["cantidad"]}')
        print(f'Precio unitario: Q{pedido["precio_unitario"]:.2f}')
        print(f'Subtotal: Q{subtotal:.2f}')
        print(f'IVA (12%): Q{iva:.2f}')
        print(f'Total a pagar: Q{total:.2f}')
        print("---------------------------------")


simular_ventas(pedidos)