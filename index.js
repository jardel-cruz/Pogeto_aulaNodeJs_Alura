import chalk from 'chalk';
import fs from 'fs';

// function pegaTexto (caminho) {
//     const encoding = 'utf-8';
//     fs.readFile(caminho, encoding, (err, data) => {
//         if (err) {
//             trataErro(err)
//         }
//         console.log(chalk.green(data));
//     })
// }

async function pegaTexto (caminho) {
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminho, encoding);
        console.log(chalk.green(texto));
    } catch (err) {
        trataErro(err);
    } finally {
        console.log(chalk.black.bgWhite.bold('Finalizado!!'));
    }
}

function trataErro (err) {
    if (err.code === 'ENOENT') {
        throw new Error(chalk.red(err.code, 'Não existe arquivos com esse nome no diretorio'))
    }
    if (err.code === 'EISDIR') {
        throw new Error(chalk.red(err.code, 'Impocivel ler, O endereço informado é um diretori'))
    }
}

pegaTexto('./arquivos/texto1.md');





