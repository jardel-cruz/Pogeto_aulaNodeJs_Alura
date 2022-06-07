#!/usr/bin/env node

import pegaTexto from "./index.js";
import chalk from "chalk";
import validarLinks from "./http-valid.js";

const caminho = process.argv;

async function executar (caminhoDeArquivo) {
    const resuotado = await pegaTexto(caminhoDeArquivo);
    if (caminho[3] === 'validar') {
        console.log(chalk.blue('links validados: '), await validarLinks(resuotado));
    } else {
        console.log(chalk.blue('lista de links: '), resuotado);
    }
}

executar(caminho[2]);
