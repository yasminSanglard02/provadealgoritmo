const readline = require ('readline-sync');

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function exibirMatriz (matriz) {
    console.log("\n Matriz 3x3: ");
    for (let i = 0; i < 3; i++) {
        console.log(`[${matriz[i].join(', ')}]`);
    }
    console.log();
}

function somarLinha1 (matriz) {
    let soma = 0;
    for (let j = 0; j < 3; j++) {
        soma += matriz[0][j];
    }
    return soma;
}
function multiplicacaoDiagonal (matriz) {
    let multiplicacao = 1;
    for  (let i = 0; i < 3; i++) {
        multiplicacao *= matriz[i][i];
    }
    return multiplicacao;
}
function quantidadePares (matriz) {
    let pares = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j <3; j++) {
            if (matriz[i][j] % 2 === 0) {
                pares++;
            }
        }
    }
    return pares;
}
    function main() {
        while (true) {
            exibirMatriz(matriz)

        console.log("Opções:");
        console.log("1 - Somatório da linha 1");
        console.log("2 - Multiplicação da diagonal");
        console.log("3 - Quantidade de números pares");
        console.log("4 - Encerrar programa");

        let opcao = parseInt(readline.question("\nDigite uma opcao (1-4): "));

        switch (opcao) {
            case 1:
                let soma = somarLinha1(matriz);
                console.log(`\nSomatório da linha 1: ${soma}`);
                break;
                
            case 2:
                let multiplicacao = multiplicacaoDiagonal(matriz);
                console.log(`\nMultiplicação da diagonal: ${multiplicacao}`);
                break;
                
            case 3:
                let pares = quantidadePares(matriz);
                console.log(`\nQuantidade de números pares: ${pares}`);
                break;
                
            case 4:
                console.log("\nPrograma encerrado!");
                return;
                
            default:
                console.log("\nOpção inválida! Digite um número de 1 a 4.");
                break;
        }
        if (opcao !== 4) {
            readline.question("\nPressione ENTER para continuar...");
            console.clear();
            }
        }
    }
    main();