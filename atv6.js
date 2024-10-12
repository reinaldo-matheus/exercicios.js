//  ex1:
 // function contagemRegressiva(inicio) {
//     for (let i = inicio; i >= 0; i--) {
//       console.log(i);
//     }
//   }
  
//   contagemRegressiva(5); 

// ex2:
//   function gerarMultiplicador(numero) {
//     for (let i = 1; i <= 10; i++) {
//       console.log(`${numero} x ${i} = ${numero * i}`);
//     }
//   }
  
//   gerarMultiplicador(3); 


// ex3:
function somaNumeros(n) {
    let soma = 0;
    let i = 1;
    while (i <= n) {
      soma += i;
      i++;
    }
    return soma;
  }
  
  const resultado = somaNumeros(4);
  console.log(resultado); 

