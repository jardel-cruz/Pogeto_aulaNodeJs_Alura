import chalk from 'chalk';
import fs from 'fs';

async function pegaTexto (caminho) {
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminho, encoding);
        console.log(chalk.green(texto));
    } catch (error) {
        trataErro(error);
    } finally {
        console.log(chalk.black.bgWhite.bold('Finalizado!!'));
    }
}

function trataErro (error) {
    if (error.code === 'ENOENT') {
        throw new Error(chalk.red(error.code, 'Não existe arquivos com esse nome no diretorio'))
    }
    if (error.code === 'EISDIR') {
        throw new Error(chalk.red(error.code, 'Impocivel ler, O endereço informado é um diretori'))
    }
}

pegaTexto('./arquivos/texto1.md');





