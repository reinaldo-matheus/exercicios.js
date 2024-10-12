// atv1:
function imprimirPares(limite) {
    for (let i = 0; i <= limite; i += 2) {
      console.log(i);
    }
  }
  
  imprimirPares(10);

//   atv2:
function calcularFatorial(numero) {
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
    return fatorial;
  }
  
  const resultado = calcularFatorial(5);
  console.log(resultado); 

  //atv3:
  