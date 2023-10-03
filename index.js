let numWins = 90;
let numLoss = 30;
let resultado = numWins - numLoss;


function levelWins() {
  if (numWins <= 10) {
    return "Ferro";
  } else if (numWins >= 11 && numWins <= 20) {
    return "Bronze";  
} else if (numWins >= 21 && numWins <= 50) {
    return "Prata";
  } else if (numWins >= 51 && numWins <= 80) {
    return "Ouro";
  } else if (numWins >= 81 && numWins <= 90) {
    return "Diamante";
  } else if (numWins >= 91 && numWins <= 100) {
    return "Lendário";
  } else {
    return "Imortal";
  }
}

console.log(`O Héroi tem saldo de ${resultado} e está no nível ${levelWins()}`);
