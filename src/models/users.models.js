import { readJsonUsers, writeJsonUsers } from "../services/file.service.js";

//Con el tiempo quiesiera hacerlo más amigable en la terminal,
// que la funcion diga lo que hace o muestre los datos que se estan manejando.

export const getAllUsers = async () => {
    return await readJsonUsers();
}

export const getUserById = async (id) => {
    const read = await readJsonUsers();
    return read.find(u => u.id === id);
}

export const searchUser = async (user) => {
    const read = await readJsonUsers();

    if (user.firstname) {
        //console.log(user.firstname);
        return read.filter(u => u.firstname.toLowerCase().includes(user.firstname.toLowerCase()));
    } else if (user.lastname) {
        return read.filter(u => u.lastname.toLowerCase().includes(user.lastname.toLowerCase()));
    } else if (user.age) {
        return read.filter(u => u.age == user.age);
    } else if (user.email) {
        return read.filter(u => u.email.includes(user.email));
    } else if (user.admin) {
        //console.log({ admin: user.admin })
        return read.filter(u => u.admin.toString() == user.admin);
    } else {
        return null;
    }

}

export const createUser = async (user) => {
    const read = await readJsonUsers();

    const newUser = {
        id: crypto.randomUUID(),
        ...user.data
    };

    read.push(newUser);
    await writeJsonUsers(read);

    return newUser;
}

export const deleteUserById = async (id) => {
    const read = await readJsonUsers();
    const findPosition = read.findIndex((user) => user.id === id);

    if (findPosition === -1) {
        return null;
    }

    const removeUser = read.splice(findPosition, 1);
    await writeJsonUsers(read);

    return removeUser;
}

export const updateUser = async (id, user) => {
    const read = await readJsonUsers();
    const findPosition = read.findIndex((user) => user.id === id);

    if (findPosition === -1) {
        return null;
    }

    const updateUser = {
        ...read[findPosition],
        ...user.data
    }

    const oldUser = read[findPosition]
    read[findPosition] = updateUser;
    await writeJsonUsers(read);
    //console.log('Recibido', user.data, 'para actualizar el JSON de usuarios\n');

    return [oldUser, updateUser];
}