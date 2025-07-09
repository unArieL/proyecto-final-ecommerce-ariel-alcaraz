import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const jsonProductPath = path.join(__dirname, '../models/products.json');
const jsonUserPath = path.join(__dirname, '../models/users.json');

export const readJsonProducts = async () => {
    console.log(`Leyendo desde: ${jsonUserPath}\n`);
    const read = await fs.readFile(jsonProductPath, 'utf8');
    return JSON.parse(read);
}

export const readJsonUsers = async () => {
    console.log(`Leyendo desde: ${jsonUserPath}\n`);
    const read = await fs.readFile(jsonUserPath, 'utf8');
    return JSON.parse(read);
}

export const writeJsonProducts = async (write) => {
    console.log(`Escribiendo en: ${jsonProductPath}\n`)
    await fs.writeFile(jsonProductPath, JSON.stringify(write, null, 4));
}

export const writeJsonUsers = async (write) => {
    console.log(`Escribiendo en: ${jsonUserPath}\n`)
    await fs.writeFile(jsonUserPath, JSON.stringify(write, null, 4));
}
