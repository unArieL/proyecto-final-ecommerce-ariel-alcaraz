import fs from 'fs/promises';
import path from 'path';

const __dirname = import.meta.dirname;
const jsonPath = path.join(__dirname, './products.json');
const readJsonProducts = () => fs.readFile(jsonPath, "utf-8");
const data = JSON.parse(await readJsonProducts());

export const getAllProducts = async () => {
    return data;
}

export const getProdcutById = async (id) => {
    const findById = data.find((product) => product.id === id);
    return findById
}

export const createProduct = async (product) => {
    const newProduct = {
        id: crypto.randomUUID(),
        ...product.data
    };

    data.push(newProduct);
    await fs.writeFile(jsonPath, JSON.stringify(data, null, 4));

    return newProduct;
}

export const deleteProductById = async (id) => {
    const findPosition = data.findIndex((product) => product.id === id);
    if (findPosition === -1) {
        return null;
    }

    const removeProduct = data.splice(findPosition, 1);
    await fs.writeFile(jsonPath, JSON.stringify(data, null, 4));

    return removeProduct;
}

export const updateProduct = async (id, product) => {
    const findPosition = data.findIndex((product) => product.id === id);

    if (findPosition === -1) {
        return null;
    }

    const updateProduct = {
        ...data[findPosition],
        ...product.data
    }

    const oldProduct = data[findPosition]
    data[findPosition] = updateProduct;
    await fs.writeFile(jsonPath, JSON.stringify(data, null, 4));

    return [oldProduct, updateProduct];
}