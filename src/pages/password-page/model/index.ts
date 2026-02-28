import z from 'zod';

export const authSchema = z.object({
  password: z.string(),
});

export type TAuth = z.infer<typeof authSchema>;
