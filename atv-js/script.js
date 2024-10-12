function calcularDesconto(preco, tipoCliente) {
    
    if (tipoCliente === "membro") {
      const desconto = preco * 0.1; 
      return preco - desconto; 
    } else {
  
      return preco;
    }
  }
  
  
  const precoOriginal = 100;
  const tipoCliente = "membro";
  
  const precoFinal = calcularDesconto(precoOriginal, tipoCliente);
  console.log("Preço final:", precoFinal); 