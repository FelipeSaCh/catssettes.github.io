let nota = parseFloat(prompt("Digite su nota:"));

if (nota < 0 || nota > 5) {
    console.log("ERROR");
} else if (nota >= 0.01 && nota < 2) {
    console.log("PERDIO");
} else if (nota >= 2 && nota < 3) {
    console.log("PUEDE RECUPERAR");
} else if (nota >= 3 && nota < 4) {
    console.log("PASASTE");
} else if (nota >= 4 && nota <= 5) {
    console.log("PROMEDIO SUPERIOR");
}
