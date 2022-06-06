import pegaTexto from "./index.js";
import chalk from "chalk";

const caminho = process.argv;

async function executar (caminhoDeArquivo) {
    const resuotado = await pegaTexto(caminhoDeArquivo);
    console.log(chalk.blue('lista de links: '), resuotado);
}

executar(caminho[2]);
