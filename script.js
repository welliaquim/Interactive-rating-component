import { useState } from 'react';

function executar() {
  const pessoa1 = {
    nome: 'Gabriel',
    idade: 23,
  };
  const pessoa2 = {
    nome: 'Gabriela',
    idade: 26,
  };
  const pessoa3 = {
    nome: 'Gel',
    idade: 30,
  };
  const turma = [pessoa1, pessoa2, pessoa3];
  const turmaModificada = turma.map((pessoa) => {
    return {
      nome: pessoa.nome + ' Silva',
      idade: pessoa.idade + 5,
      mae: 'Josefina',
    };
  });
  console.log(turmaModificada);
}
executar();
