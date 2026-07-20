muestras = [
    {
        "compuesto": "Ácido Clorhídrico",
        "ph": 2.5
    },
    {
        "compuesto": "Agua Destilada",
        "ph": 7.0
    },
    {
        "compuesto": "Hidróxido de Sodio",
        "ph": 12.3
    },
    {
        "compuesto": "Ácido Acético",
        "ph": 3.8
    },
    {
        "compuesto": "Amoníaco",
        "ph": 11.2
    }
]


def validar_ph(muestras):

    print("=== VALIDACIÓN NUMÉRICA DEL pH ===")

    for muestra in muestras:

        ph = muestra["ph"]

        print(f'Compuesto: {muestra["compuesto"]}')
        print(f'Valor de pH: {ph}')

        if 0 <= ph <= 14:
            print("Resultado: Valor de pH válido.")
        else:
            print("Resultado: Valor de pH inválido.")

        print("---------------------------------")


validar_ph(muestras)