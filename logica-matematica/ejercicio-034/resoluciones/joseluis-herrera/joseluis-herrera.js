const disenosTatuajes = [
  { Diseno: "Daga Tradicional", forma: "Rectangulo", base: 5, altura: 15 },
  { Diseno: "Sol Mandala", forma: "Circulo", radio: 6 },
  { Diseno: "Trifuerza Geek", forma: "Triangulo", base: 8, altura: 8, lado1: 8, lado2: 8 },
  { Diseno: "Brazalete Maori", forma: "Rectangulo", base: 22, altura: 4 }
];

for (let i = 0; i < disenosTatuajes.length; i++) {
  let t = disenosTatuajes[i];
  let area = 0;
  let perimetro = 0;

  if (t.forma === "Rectangulo") {
    area = t.base * t.altura;
    perimetro = 2 * (t.base + t.altura);
  } else if (t.forma === "Circulo") {
    area = 3.1416 * (t.radio * t.radio);
    perimetro = 2 * 3.1416 * t.radio;
  } else if (t.forma === "Triangulo") {
    area = (t.base * t.altura) / 2;
    perimetro = t.base + t.lado1 + t.lado2;
  }

  let categoria = area > 50 ? "Grande (Multiples sesiones)" : "Pequeno/Mediano (Una sesion)";

  console.log(`Tatuaje: ${t.Diseno} -> Area: ${area.toFixed(1)}cm² | Perimetro: ${perimetro.toFixed(1)}cm | ${categoria}`);
}