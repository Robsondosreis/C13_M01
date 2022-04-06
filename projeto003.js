console.clear();
const prompt = require("prompt-sync")();

let nome = "";
let escolha = "";
let jogarNov = "";

function nomeUsuario() {
  //nome do usuario
  console.log();
  nome = prompt("Digite o nome que você deseja [MAIOR QUE 3 CARACTERES]: ");
  if (nome.length <= 3) {
    console.log("O nome precisa ser maior que 3! ");
    nomeUsuario();
  }
}

function apresentação() {
  //Função de apresentação
  console.log(`Olá ${nome}! Você é adolescente e tem um irmãozinho, seus pais precisam viajar e 
  deixarão você encarregado de cuidar dele. Seu irmãozinho atualmente tem 2 anos de idade 
  e necessita de uma atenção especial.
 Você terá opções de escolha que farão o tempo passar e alterarão todos os status do seu irmão 
 por ex toda vez que você o alimentar ele ficara sujo. Após ultrapassar as 23 horas, o dia 
 seguinte iniciara as 8 horas. Seus pais ficarão fora por 3 dias.
  PARA TER SUCESSO NESSA EMPREITADA MANTENHA OS STATUS > 0 E < 10!!`);
}

const bebe = {
  //Objeto com status do irmãozinho
  fome: 5,
  humor: 5,
  higiene: 5,
  sono: 5,
};

function opções() {
  //Função para exibir as opções
  console.log(`
      [1] = Alimentar
      [2] = Brincar
      [3] = Banho
      [4] = Dormir
      \n
      Agora são ${hora} horas, dia ${dia}. Escolha uma opção:
      `);
}

function tabela() {
  //tabela de alteração de status
  console.log(`
Alterações de Status

             Altera
            | f | h | h | s |
            | o | u | i | o |
            | m | m | g | n |
            | e | o | i | o |
            |   | r | e |   |
 escolha
 alimentar: | 2 | 1 |-1 |-1 |
 brincar:   |-2 |-3 |-1 |-2 |
 banho:     |-2 |-2 | 4 |-1 |
 naninha:   |-1 | 1 | 0 | 3 |`);
}

function condições() {
  //função com condições que alteram o status
  if (escolha == 1) {
    bebe.fome += 2;
    bebe.humor += 1;
    bebe.higiene -= 1;
    bebe.sono -= 1;
  } else if (escolha == 2) {
    bebe.fome -= 2;
    bebe.humor -= 3;
    bebe.higiene -= 1;
    bebe.sono -= 2;
  } else if (escolha == 3) {
    bebe.fome -= 2;
    bebe.humor -= 2;
    bebe.higiene += 4;
    bebe.sono -= 1;
  } else if (escolha == 4) {
    bebe.fome -= 1;
    bebe.humor += 1;
    bebe.higiene += 0;
    bebe.sono += 3;
  }
}

function hora1() {
  //Função com condições para passar tempo
  if (escolha == 1) {
    hora = avancaHora(hora, 2);
  } else if (escolha == 2) {
    hora = avancaHora(hora, 2);
  } else if (escolha == 3) {
    hora = avancaHora(hora, 2);
  } else if (escolha == 4) {
    hora = avancaHora(hora, 3);
  } else {
    console.log(`opção invalida`);
  }
}

function resultado() {
  //Função com resultados intermediarios

  if (bebe.fome < 0) {
    console.log(
      `Atenção ${nome} você está deixando seu irmãozinho com muita fome! controle a situação!`
    );
    if (bebe.humor < 0) {
      console.log(
        `Atenção ${nome} você está deixando seu irmão muito triste, controle a situação!`
      );
      if (bebe.higiene < 0) {
        console.log(
          `Atenção ${nome} você está deixando seu irmãozinho muito sujo, controle a situação!`
        );
        if (bebe.sono < 0) {
          console.log(
            `Atenção ${nome} seu irmãozinho está dormindo muito pouco, controle a situação`
          );
        } else if (bebe.sono > 10) {
          console.log(
            `Atenção ${nome} seu irmãozinho está dormindo muito, controle a situação`
          );
        }
      } else if (bebe.higiene > 10) {
        console.log(
          `Atenção ${nome} você está lavando seu irmãozinho demais, controle a situação!`
        );
      } else if (bebe.sono < 0) {
        console.log(
          `Atenção ${nome} seu irmãozinho está dormindo muito pouco, controle a situação`
        );
      } else if (bebe.sono > 10) {
        console.log(
          `Atenção ${nome} seu irmãozinho está dormindo muito, controle a situação`
        );
      }
    } else if (bebe.humor > 10) {
      console.log(
        `Atenção ${nome} você está deixando seu irmãozinho muito irritado, controle a situação!`
      );
    } else if (bebe.higiene < 0) {
      console.log(
        `Atenção ${nome} você está deixando seu irmãozinho muito sujo, controle a situação!`
      );
    } else if (bebe.higiene > 10) {
      console.log(
        `Atenção ${nome} você está lavando seu irmãozinho demais, controle a situação!`
      );
    } else if (bebe.sono < 0) {
      console.log(
        `Atenção ${nome} seu irmãozinho está dormindo muito pouco, controle a situação`
      );
    } else if (bebe.sono > 10) {
      console.log(
        `Atenção ${nome} seu irmãozinho está dormindo muito, controle a situação`
      );
    }
  } else if (bebe.fome > 10) {
    console.log(
      `Atenção ${nome} você está dando muita comida para seu irmãozinho! controle a situação!`
    );
    if (bebe.humor < 0) {
      console.log(
        `Atenção ${nome} você está deixando seu irmão muito triste, controle a situação!`
      );
      if (bebe.higiene < 0) {
        console.log(
          `Atenção ${nome} você está deixando seu irmãozinho muito sujo, controle a situação!`
        );
        if (bebe.sono < 0) {
          console.log(
            `Atenção ${nome} seu irmãozinho está dormindo muito pouco, controle a situação`
          );
        } else if (bebe.sono > 10) {
          console.log(
            `Atenção ${nome} seu irmãozinho está dormindo muito, controle a situação`
          );
        }
      } else if (bebe.higiene > 10) {
        console.log(
          `Atenção ${nome} você está lavando seu irmãozinho demais, controle a situação!`
        );
      } else if (bebe.sono < 0) {
        console.log(
          `Atenção ${nome} seu irmãozinho está dormindo muito pouco, controle a situação`
        );
      } else if (bebe.sono > 10) {
        console.log(
          `Atenção ${nome} seu irmãozinho está dormindo muito, controle a situação`
        );
      }
    } else if (bebe.humor > 10) {
      console.log(
        `Atenção ${nome} você está deixando seu irmãozinho muito irritado, controle a situação!`
      );
    } else if (bebe.higiene < 0) {
      console.log(
        `Atenção ${nome} você está deixando seu irmãozinho muito sujo, controle a situação!`
      );
    } else if (bebe.higiene > 10) {
      console.log(
        `Atenção ${nome} você está lavando seu irmãozinho demais, controle a situação!`
      );
    } else if (bebe.sono < 0) {
      console.log(
        `Atenção ${nome} seu irmãozinho está dormindo muito pouco, controle a situação`
      );
    } else if (bebe.sono > 10) {
      console.log(
        `Atenção ${nome} seu irmãozinho está dormindo muito, controle a situação`
      );
    }
  } else if (bebe.humor < 0) {
    console.log(
      `Atenção ${nome} você está deixando seu irmão muito triste, controle a situação!`
    );
    if (bebe.higiene < 0) {
      console.log(
        `Atenção ${nome} você está deixando seu irmãozinho muito sujo, controle a situação!`
      );
    } else if (bebe.higiene > 10) {
      console.log(
        `Atenção ${nome} você está lavando seu irmãozinho demais, controle a situação!`
      );
      if (bebe.sono < 0) {
        console.log(
          `Atenção ${nome} seu irmãozinho está dormindo muito pouco, controle a situação`
        );
      } else if (bebe.sono > 10) {
        console.log(
          `Atenção ${nome} seu irmãozinho está dormindo muito, controle a situação`
        );
      }
    } else if (bebe.sono < 0) {
      console.log(
        `Atenção ${nome} seu irmãozinho está dormindo muito pouco, controle a situação`
      );
    } else if (bebe.sono > 10) {
      console.log(
        `Atenção ${nome} seu irmãozinho está dormindo muito, controle a situação`
      );
    }
  } else if (bebe.humor > 10) {
    console.log(
      `Atenção ${nome} você está deixando seu irmãozinho muito irritado, controle a situação!`
    );
    if (bebe.higiene < 0) {
      console.log(
        `Atenção ${nome} você está deixando seu irmãozinho muito sujo, controle a situação!`
      );
      if (bebe.sono < 0) {
        console.log(
          `Atenção ${nome} seu irmãozinho está dormindo muito pouco, controle a situação`
        );
      } else if (bebe.sono > 10) {
        console.log(
          `Atenção ${nome} seu irmãozinho está dormindo muito, controle a situação`
        );
      }
    } else if (bebe.higiene > 10) {
      console.log(
        `Atenção ${nome} você está lavando seu irmãozinho demais, controle a situação!`
      );
    } else if (bebe.sono < 0) {
      console.log(
        `Atenção ${nome} seu irmãozinho está dormindo muito pouco, controle a situação`
      );
    } else if (bebe.sono > 10) {
      console.log(
        `Atenção ${nome} seu irmãozinho está dormindo muito, controle a situação`
      );
    }
  } else if (bebe.higiene < 0) {
    console.log(
      `Atenção ${nome} você está deixando seu irmãozinho muito sujo, controle a situação!`
    );
    if (bebe.sono < 0) {
      console.log(
        `Atenção ${nome} seu irmãozinho está dormindo muito pouco, controle a situação`
      );
    } else if (bebe.sono > 10) {
      console.log(
        `Atenção ${nome} seu irmãozinho está dormindo muito, controle a situação`
      );
    }
  } else if (bebe.higiene > 10) {
    console.log(
      `Atenção ${nome} você está lavando seu irmãozinho demais, controle a situação!`
    );
    if (bebe.sono < 0) {
      console.log(
        `Atenção ${nome} seu irmãozinho está dormindo muito pouco, controle a situação`
      );
    } else if (bebe.sono > 10) {
      console.log(
        `Atenção ${nome} seu irmãozinho está dormindo muito, controle a situação`
      );
    }
  } else if (bebe.sono < 0) {
    console.log(
      `Atenção ${nome} seu irmãozinho está dormindo muito pouco, controle a situação`
    );
  } else if (bebe.sono > 10) {
    console.log(
      `Atenção ${nome} seu irmãozinho está dormindo muito, controle a situação`
    );
  } 
}

function resultado2() {
  //Função com resultados finais
  if (bebe.fome < 0) {
    console.log(`Seus pais chegaram e se depararam com o seu irmãozinho de barriga vazia,
    ficaram extremamente chateados`);
    if (bebe.humor < 0) {
      console.log(
        `Além disso se depararam com o seu irmãozinho de muito triste!`
      );
      if (bebe.higiene < 0) {
        console.log(
          `Também se depararam com o seu irmãozinho sujo igual um porquinho!`
        );
        if (bebe.sono < 0) {
          console.log(`E caindo de sono!`);
        } else if (bebe.sono < 10) {
          console.log(`E elétrico porque dormiu muito!`);
        }
      } else if (bebe.higiene > 10) {
        console.log(`Também se depararam com o seu irmãozinho resfriado!`);
      } else if (bebe.sono < 0) {
        console.log(`Também se depararam com o seu irmãozinho caindo de sono!`);
      } else if (bebe.sono < 10) {
        console.log(
          `Também se depararam com o seu irmãozinho elétrico porque dormiu muito!`
        );
      }
    } else if (bebe.humor > 10) {
      console.log(
        `Além disso se depararam com o seu irmãozinho de muito irritado!`
      );
    } else if (bebe.higiene < 0) {
      console.log(
        `Além disso se depararam com o seu irmãozinho sujo igual um porquinho!`
      );
    } else if (bebe.higiene > 10) {
      console.log(`Além disso se depararam com o seu irmãozinho resfriado!`);
    } else if (bebe.sono < 0) {
      console.log(
        `Além disso se depararam com o seu irmãozinho caindo de sono!`
      );
    } else if (bebe.sono < 10) {
      console.log(
        `Além disso se depararam com o seu irmãozinho elétrico porque dormiu muito!`
      );
    }
  } else if (bebe.fome > 10) {
    console.log(`Seus pais chegaram e se depararam com o seu irmãozinho passando mal de tanto comer,
    ficaram extremamente chateados`);
    if (bebe.humor < 0) {
      console.log(
        `Além disso se depararam com o seu irmãozinho de muito triste!`
      );
      if (bebe.higiene < 0) {
        console.log(
          `Também se depararam com o seu irmãozinho sujo igual um porquinho!`
        );
        if (bebe.sono < 0) {
          console.log(`E caindo de sono!`);
        } else if (bebe.sono < 10) {
          console.log(`E elétrico porque dormiu muito!`);
        }
      } else if (bebe.higiene > 10) {
        console.log(`Também se depararam com o seu irmãozinho resfriado!`);
      } else if (bebe.sono < 0) {
        console.log(`Também se depararam com o seu irmãozinho caindo de sono!`);
      } else if (bebe.sono < 10) {
        console.log(
          `Também se depararam com o seu irmãozinho elétrico porque dormiu muito!`
        );
      }
    } else if (bebe.humor > 10) {
      console.log(
        `Além disso se depararam com o seu irmãozinho de muito irritado!`
      );
    } else if (bebe.higiene < 0) {
      console.log(
        `Além disso se depararam com o seu irmãozinho sujo igual um porquinho!`
      );
    } else if (bebe.higiene > 10) {
      console.log(`Além disso se depararam com o seu irmãozinho resfriado!`);
    } else if (bebe.sono < 0) {
      console.log(
        `Além disso se depararam com o seu irmãozinho caindo de sono!`
      );
    } else if (bebe.sono < 10) {
      console.log(
        `Além disso se depararam com o seu irmãozinho elétrico porque dormiu muito!`
      );
    }
  } else if (bebe.humor < 0) {
    console.log(`Seus pais chegaram e se depararam com o seu irmãozinho de muito triste,
    ficaram extremamente chateados`);
    if (bebe.higiene < 0) {
      console.log(
        `Além disso se depararam com o seu irmãozinho sujo igual um porquinho!`
      );
      if (bebe.sono < 0) {
        console.log(`E caindo de sono!`);
      } else if (bebe.sono < 10) {
        console.log(`E elétrico porque dormiu muito!`);
      }
    } else if (bebe.higiene > 10) {
      console.log(`Além disso se depararam com o seu irmãozinho resfriado`);
    } else if (bebe.sono < 0) {
      console.log(`Além disso depararam com o seu irmãozinho caindo de sono!`);
    } else if (bebe.sono < 10) {
      console.log(
        `Além disso se depararam com o seu irmãozinho elétrico porque dormiu muito!`
      );
    }
  } else if (bebe.humor > 10) {
    console.log(`Seus pais chegaram e se depararam com o seu irmãozinho de muito irritado,
    ficaram extremamente chateados`);
    if (bebe.higiene < 0) {
      console.log(
        `Além disso se depararam com o seu irmãozinho sujo igual um porquinho!`
      );
      if (bebe.sono < 0) {
        console.log(`E caindo de sono!`);
      } else if (bebe.sono < 10) {
        console.log(`E elétrico porque dormiu muito!`);
      }
    } else if (bebe.higiene > 10) {
      console.log(`Além disso se depararam com o seu irmãozinho resfriado`);
    } else if (bebe.sono < 0) {
      console.log(`Além disso depararam com o seu irmãozinho caindo de sono!`);
    } else if (bebe.sono < 10) {
      console.log(
        `Além disso se depararam com o seu irmãozinho elétrico porque dormiu muito!`
      );
    }
  } else if (bebe.higiene < 0) {
    console.log(`Seus pais chegaram e se depararam com o seu irmãozinho sujo igual um porquinho,
    ficaram extremamente chateados`);
  } else if (bebe.higiene > 10) {
    console.log(`Seus pais chegaram e se depararam com o seu irmãozinho resfriado,
    ficaram extremamente chateados`);
    if (bebe.sono < 0) {
      console.log(
        `Além disso se depararam com o seu irmãozinho caindo de sono!`
      );
    } else if (bebe.sono < 10) {
      console.log(
        `Além disso se depararam com o seu irmãozinho elétrico porque dormiu muito!`
      );
    }
  } else if (bebe.sono < 0) {
    console.log(`Seus pais chegaram e se depararam com o seu irmãozinho caindo de sono,
    ficaram extremamente chateados`);
  } else if (bebe.sono > 10) {
    console.log(`Seus pais chegaram e se depararam com o seu irmãozinho elétrico porque dormiu muito,
    ficaram extremamente chateados`);
  }else {
    console.log(`Parabéns você conseguiu! cuidou perfeitamente do seu irmãozinho,
   seu pais estão orgulhosos de você!! `);
  }
}

function avancaHora(horaAtual, tempoPassado) {
  //função para passar tempo
  console.log(`${nome} se passaram ${tempoPassado} horas`);
  horaAtual = horaAtual + tempoPassado;
  // console.log(`agora são ${horaAtual} horas`);

  return horaAtual;
}

let hora = 8;
let dia = 1;

do {
  nomeUsuario();
  console.log();
  apresentação();
  for (let i = 0; i < 3; i++) {
    while (hora <= 24) {
      console.log();
      console.log(bebe);
      tabela();
      opções();
      console.log();
      escolha = +prompt(`${nome} escolha uma opção: `);
      console.clear();
      condições();
      console.log();
      resultado();

      console.log();
      hora1();
    }
    dia++;
    hora = 8;
  }
  avancaHora();
  console.log();
  console.clear();
  resultado2();

  jogarNov = prompt(`Deseja jogar novamente?[S][N]: `).toUpperCase();
  console.clear();
  while (jogarNov != "S" && jogarNov != "N") {
    console.log("Digite S para sim ou N para não");
    jogarNov = prompt(`Deseja jogar novamente?[S/N]: `).toUpperCase();
    console.clear();
  }
} while (jogarNov == "S");
