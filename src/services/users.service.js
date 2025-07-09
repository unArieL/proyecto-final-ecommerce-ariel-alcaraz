import * as z from 'zod/v4';
import { readJsonUsers } from '../services/file.service.js';

//z.config(z.locales.es())

const usersSchema = z.object({
    firstname: z.string({
        error: 'Es necesario ingresar un nombre'
    }),
    lastname: z.string({
        error: 'Es necesario ingresar un apellido'
    }).nonempty(),
    age: z.number().int().positive().catch(0),
    email: z.email({
        error: 'El email es necesario para registrarse'
    }),
    admin: z.boolean().catch(false),
    password: z.string().min(8, {
        error: iss => {
            iss.minimum;
            iss.inclusive;
            return `La contraseña debe tener ${iss.minimum} caracteres o más`;
        },
    })
});

export const validationUser = (valid) => {
    return usersSchema.safeParse(valid);
}

export const validationPartialUser = (valid) => {
    return usersSchema.partial().safeParse(valid);
}