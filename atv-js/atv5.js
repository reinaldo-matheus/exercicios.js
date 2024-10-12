function classificarTemperatura(temperatura) {
    if (temperatura < 15) {
      return "Frio";
    } else if (temperatura <= 25) {
      return "Agradável";
    } else {
      return "Quente";
    }
  }
  
  const temperaturaAtual = 22;
  const classificacao = classificarTemperatura(temperaturaAtual);
  console.log(classificacao); 