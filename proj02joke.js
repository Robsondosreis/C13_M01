console.clear();
const prompt = require("prompt-sync")();

let continua = 0;
let escolhaUsu = 0;
let rodadas = 0;
let jogarNov = "S";

while (jogarNov == "S") {
  let placarUsu = [];
  let placarPc = [];
  let totalPc = 0;
  let totalUsu = 0;

  //prompt para quantas rodadas deseja jogar
  rodadas = prompt("Quantas rodadas deseja jogar?: ");
  while (rodadas < 1 || isNaN(rodadas)) {
    console.clear();
    console.log("Utilize somente numeros por favor!");
    rodadas = prompt("Quantas rodadas deseja jogar?: ");
    //console.log(rodadas);
  }
  for (let i = 1; i <= rodadas; i++) {
    console.log();
    console.log(`Rodada ${i}`);

    const escolha = ["pedra", "papel", "tesoura"];
    console.log();
    console.log(
      "Escolha uma das opções abaixo\n[0]pedra\n[1]papel\n[2]tesoura"
    );
    //prompt para escolher uma opção
    escolhaUsu = +prompt(`Escolha uma opção: `);
    while (escolhaUsu != 0 && escolhaUsu != 1 && escolhaUsu != 2) {
      console.clear();
      console.log("Escolhas as opções 0, 1 ou 2");

      // console.log(rodadas);
      console.log(
        "Escolha uma das opções abaixo\n[0]pedra\n[1]papel\n[2]tesoura"
      );
      escolhaUsu = +prompt(`Escolha uma opção: `);
    }
    if (escolhaUsu == 0) {
      console.log("VOCÊ escolheu pedra");
    } else if (escolhaUsu == 1) {
      console.log("VOCÊ escolheu papel");
    } else {
      console.log("VOCÊ escolheu tesoura");
    }

    //numero aleatório do pc
    const numAle = Math.floor(Math.random() * 3);
    if (numAle == 0) {
      console.log("O PC escolheu", escolha[0]);
    } else if (numAle == 1) {
      console.log("O PC escolheu", escolha[1]);
    } else if (numAle == 2) {
      console.log("O PC escolheu", escolha[2]);
    }

    //condições

    if (escolhaUsu == 2 && numAle == 1) {
      console.log(`VOCÊ venceu\nTESOURA vence PAPEL`);
      placarUsu.push(1);
    } else if (escolhaUsu == 1 && numAle == 0) {
      console.log(`VOCÊ venceu\nPAPEL vence PEDRA`);
      placarUsu.push(1);
    } else if (escolhaUsu == 0 && numAle == 2) {
      console.log(`VOCÊ venceu\nPEDRA vence TESOURA`);
      placarUsu.push(1);
    } else if (numAle == 2 && escolhaUsu == 1) {
      console.log(`O PC venceu\nTESOURA vence PAPEL`);
      placarPc.push(1);
    } else if (numAle == 1 && escolhaUsu == 0) {
      console.log(`O PC venceu\nPAPEL vence PEDRA`);
      placarPc.push(1);
    } else if (numAle == 0 && escolhaUsu == 2) {
      console.log(`O PC venceu\nPEDRA vence TESOURA`);
      placarPc.push(1);
    } else if (escolhaUsu == numAle) {
      console.log(`Empate`);
      placarPc.push(0);
      placarUsu.push(0);
    }

    //console.log(placarUsu);
    // console.log(placarPc);
    continua = prompt("Digite C para continuar: ").toUpperCase();
    console.clear();
    while (continua != "C") {
      console.log("erro!");
      continua = prompt("Digite C para continuar: ").toUpperCase();
      console.clear();
    }
    // console.clear();
  }
  //soma do placar

  for (let i of placarUsu) {
    totalUsu = totalUsu + i;
  }
  for (let i of placarPc) {
    totalPc = totalPc + i;
  }
  //console.log(`lista usuario ${placarUsu}`);
  //console.log(`lista pc ${placarPc}`);
  console.log(`VOCÊ venceu ${totalUsu} rodada(s)`);
  console.log(`PC venceu ${totalPc} rodada(s)`);
  //escolhendo o vencedor ou empate e msg
  if (totalUsu > totalPc) {
    console.log("PARABENS VOCÊ É O GRANDE CAMPEÃO!!!");
  } else if (totalUsu < totalPc) {
    console.log("QUE PENA!NÃO FOI DESSA VEZ, VOCÊ PERDEU!\n TENTE NOVAMENTE!!");
  } else {
    console.log("EMPATE!\n TENTE NOVAMENTE!!");
  }
  //pergunta para reiniciar o jogo
  jogarNov = prompt(`Deseja jogar novamente?[S/N]: `).toUpperCase();
  console.clear();
  while (jogarNov != "S" && jogarNov != "N") {
    console.log("Digite S para sim ou N para não");
    jogarNov = prompt(`Deseja jogar novamente?[S/N]: `).toUpperCase();
    console.clear();
  }
}
