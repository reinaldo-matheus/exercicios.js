function verificarIdade(idade) {
    if (idade < 18) {
      return "Menor de idade";
    } else if (idade <= 64) {
      return "Maior de idade";
    } else {
      return "Idoso";
    }
  }
  
  const idadePessoa = 20;
  const classificacao = verificarIdade(idadePessoa);
  console.log(classificacao); 