const readline = require ('readline-sync');

let cadeiras = Array(4).fill().map(() => Array(4).fill(false));

function mostrarCadeiras() {
    console.log ('\nLayout das cadeiras:\n');
    console.log('      TELA DE CINEMA');
    console.log('      ==============\n');
    for (let i = 0; i < 4; i++) {
        let linha = '';
        for (let j = 0; j < 4; j++){
            linha += cadeiras[i][j] ? '[x]' :  '[o]';
        }
        console.log (`Linha ${i + 1} = ${linha}`);
    }
        console.log (`\nLegenda: [o] = livre | [x]  = ocupado\n`)
}
function sistemaCinema() {
    while (true) {
        mostrarCadeiras();
        let linha = parseInt(readline.question('Digite o numero da linha da cadeira (1 a 4): ')) - 1;
        let coluna = parseInt(readline.question('Digite o numero da coluna da cadeira (1 a 4): ')) - 1;
        
        if(linha < 0 || linha > 3 || coluna < 0 || coluna > 3) {
            console.log('\nPosicao invalida. Tente novamente.\n');
            continue;
        }
        if(cadeiras[linha][coluna]) {
            console.log('\nPosicao ocupada. Tente novamente.\n');
            continue;
        }
        cadeiras[linha][coluna] = true
        console.log(`\nCadeira [linha ${linha + 1}, coluna ${coluna + 1}] comprada.`);

        readline.question(`Pressione ENTER para continuar`);

        console.clear();
    }
}
    sistemaCinema()