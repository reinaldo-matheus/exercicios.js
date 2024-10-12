function classificarNota(nota) {
    if (nota >= 70) {
      return "Aprovado";
    } else if (nota >= 50) {
      return "Recuperação";
    } else {
      return "Reprovado";
    }
  }
  
  const notaAluno = 65;
  const resultado = classificarNota(notaAluno);
  console.log(resultado); 