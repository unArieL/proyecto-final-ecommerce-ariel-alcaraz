import { db } from '../config/firebase.js';
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    deleteDoc,
    doc,
    updateDoc,
    where,
    query
} from 'firebase/firestore';

const productsCollection = collection(db, 'products');

export const getAllProducts = async () => {
    const querySnapshot = await getDocs(productsCollection);
    const products = [];
    querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
    });
    return products;
}

export const getProdcutById = async (id) => {
    const querySnapshot = await getDoc(doc(productsCollection, id));
    return querySnapshot.data();
}

export const searchProduct = async (product) => {
    let conditions = [];

    if (product.name) {
        conditions.push(where('keywords', 'array-contains', product.name.toLowerCase())) ;
    }

    if(product.price) {
        conditions.push(where('price', '==', Number(product.price)));
    }

    if(product.category) {
        conditions.push(where('category', '==', product.category));
    }

    if(product.stock) {
        conditions.push(where('stock', '==', Number(product.stock)));
    }

    if(product.buscar) {
        conditions.push(where('keywords', 'array-contains', product.buscar.toLowerCase()));
    }

    const search = query(productsCollection, ...conditions);
    const querySnapshot = await getDocs(search);
    const products = [];
    querySnapshot.forEach(doc => {
        products.push({
            id: doc.id,
            ...doc.data()
        });
    })
    return products;

}

export const createProduct = async (product) => {
    await addDoc(productsCollection, product.data)
    return product.data;
}

export const deleteProductById = async (id) => {
    const removeProduct = await getDoc(doc(productsCollection, id))
    await deleteDoc(doc(productsCollection, id));
    return removeProduct.data();
}

export const updateProduct = async (id, product) => {
    const querySnapshot = doc(productsCollection, id);
    await updateDoc(querySnapshot, product.data);
}