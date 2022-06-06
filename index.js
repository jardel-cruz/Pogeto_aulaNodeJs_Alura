import chalk from 'chalk';
import fs from 'fs';

function extrairLinks (texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^\)]*)\)/gm;
    const arrayLinks = [];
    let temp;
    while ((temp = regex.exec(texto)) !== null) {
        arrayLinks.push({ [temp[1]] : temp[2] })
    }

    // const links = regex.exec(texto);

    return arrayLinks;
}

function trataErro (error) {
    if (error.code === 'ENOENT') {
        throw new Error(chalk.red(error.code, 'Não existe arquivos com esse nome no diretorio'))
    }
    if (error.code === 'EISDIR') {
        throw new Error(chalk.red(error.code, 'Impocivel ler, O endereço informado é um diretori'))
    }
}

export default async function pegaTexto (caminho) {
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminho, encoding);
        return extrairLinks(texto);
    } catch (error) {
        trataErro(error);
    }
}