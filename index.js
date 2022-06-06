import chalk from 'chalk';
import fs from 'fs';

function extrairLinks (texto, regex) {
    const arrayLinks = [];
    let temp;
    while ((temp = regex.exec(texto)) !== null) {
        arrayLinks.push({ [temp[1]] : temp[2] })
    }

    // const links = regex.exec(texto);

    return arrayLinks;
}

async function pegaTexto (caminho, regex) {
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminho, encoding);
        console.log(extrairLinks(texto, regex));
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

const regex = /\[([^\]]*)\]\((https?:\/\/[^\)]*)\)/gm;

pegaTexto('./arquivos/texto1.md', regex);
