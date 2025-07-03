import * as z from 'zod/v4';

const productsSchema = z.object({
    name: z.string({
        required_error: 'name: no puede estar vacio'
    }),
    price: z.number().positive(),
    category: z.string(),
    stock: z.number().int().positive(),
    description: z.string()
});

export const validationProduct = (valid) => {
    return productsSchema.safeParse(valid);
}