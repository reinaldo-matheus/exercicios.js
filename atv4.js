function calcularFrete(peso) {
    if (peso <= 5) {
      return 20;
    } else if (peso <= 20) {
      return 50;
    } else {
      return 100;
    }
  }
  
  const pesoPacote = 12;
  const valorFrete = calcularFrete(pesoPacote);
  console.log("O valor do frete é:", valorFrete); 