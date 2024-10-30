let lado1 = 10
let lado2 = 10
let lado3 = 8
 
 
function verificarTipoTriangulo(lado1, lado2, lado3) {
  if(lado1 === lado2 && lado2 === lado3) {
    console.log("Todos os lados são iguais então é equilatero")
 } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("Dois lados do triangulo são iguais então é Isósceles")
 }else  {
    console.log("Nenhum dos lados são iguais então é Escaleno")
}
}
 
verificarTipoTriangulo(lado1, lado2, lado3)
