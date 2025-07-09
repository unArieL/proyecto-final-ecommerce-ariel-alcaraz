import { readJsonProducts, writeJsonProducts } from "../services/file.service.js";

export const getAllProducts = async () => {
    return await readJsonProducts();
}

export const getProdcutById = async (id) => {
    const read = await readJsonProducts();
    return read.find(p => p.id === id);
}

export const searchProduct = async (product) => {
    const read = await readJsonProducts();

    if (product.name) {
        return read.filter(p => p.name.toLowerCase().includes(product.name));
    } else if (product.category) {
        return read.filter(p => p.category.toLowerCase().includes(product.category.toLowerCase()));
    } else if (product.stock) {
        return read.filter(p => p.stock == product.stock);
    } else if (product.price) {
        return read.filter(p => p.price == product.price);
    } else {
        return null;
    }

}

export const createProduct = async (product) => {
    const read = await readJsonProducts();
    const newProduct = {
        id: crypto.randomUUID(),
        ...product.data
    };

    read.push(newProduct);
    await writeJsonProducts(read)

    return newProduct;
}

export const deleteProductById = async (id) => {
    const read = await readJsonProducts();
    const findPosition = read.findIndex(p => p.id === id);
    
    if (findPosition === -1) {
        return null;
    }

    const removeProduct = read.splice(findPosition, 1);
    await writeJsonProducts(read);    

    return removeProduct;
}

export const updateProduct = async (id, product) => {
    const read = await readJsonProducts();
    const findPosition = read.findIndex((product) => product.id === id);

    if (findPosition === -1) {
        return null;
    }

    const updateProduct = {
        ...read[findPosition],
        ...product.data
    }

    const oldProduct = read[findPosition]
    read[findPosition] = updateProduct;
    await writeJsonProducts(read);

    return [oldProduct, updateProduct];
}