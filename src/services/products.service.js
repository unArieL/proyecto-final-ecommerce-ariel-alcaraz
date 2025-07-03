import * as z from 'zod/v4';

const productsSchema = z.object({
    name: z.string(),
    price: z.number().positive(),
    category: z.string(),
    stock: z.number().int().positive(),
    description: z.string()
});

export const validationProduct = (valid) => {
    return productsSchema.safeParse(valid);
}

export const validationPartialProduct = (valid) => {
    return productsSchema.partial().safeParse(valid);
}