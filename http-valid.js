import fatch from 'node-fetch';

async function statusLink (arrayURL) {
    const arrayStatus = await Promise.all(arrayURL.map(async function (url) {
        const res = await fatch(url);
        return res.status;
    }))
    return arrayStatus;
}

function pegaLinks (arrayDeLinks) {
    const arrayComLinks = [];
    arrayDeLinks.forEach(element => {
        let temp = Object.values(element);
        arrayComLinks.push(temp[0]);
    });

    return arrayComLinks;
}

export default async function validarLinks (arrayDeLinks) {
    const links = await pegaLinks(arrayDeLinks);
    const urlStatus = await statusLink(links);

    return urlStatus;
}

