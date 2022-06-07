// import chalk from 'chalk';
import fs from 'fs';

function extrairLinks (texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^\)]*)\)/gm;
    const arrayLinks = [];
    let temp;
    while ((temp = regex.exec(texto)) !== null) {
        arrayLinks.push({ [temp[1]] : temp[2] })
    }

    if (arrayLinks.length === 0) {
        return 'não há links';
    } else {
        return arrayLinks;
    }
}

function trataErro (error) {
    if (error.code === 'ENOENT') {
        throw new Error(error.code)
    }
    if (error.code === 'EISDIR') {
        throw new Error(error.code)
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