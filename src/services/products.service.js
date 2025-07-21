import * as z from 'zod/v4';

//z.config(z.locales.es())

const productsSchema = z.object({
    name: z.string({
        error: 'No puede estar vacío.'
    }).nonempty({
        error: 'El producto debe tener nombre.'
    }),
    price: z.number({
        error: 'El precio solo admite números.'
    }).nonnegative({
        error: 'El precio solo puede ser 0 o mayor.'
    }),
    category: z.string(),
    stock: z.number({
        error: 'Solo se admiten números.'
    }).int({
        error: 'Solo ingresar números enteros.'
    }).nonnegative().default(0),
    description: z.string({
        error: 'Solo se admiten caracteres'
    }),
    keywords: z.string().array()
});

export const validationProduct = (valid) => {
    return productsSchema.safeParse(valid);
}

export const validationPartialProduct = (valid) => {
    return productsSchema.partial().safeParse(valid);
}

// export const diacriticos = (texto) => {
//     return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
// }