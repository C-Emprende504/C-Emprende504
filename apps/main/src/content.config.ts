import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/**
 * Esquema tipado para la colección de productos de afiliados (Hotmart).
 * Actualizado en Sprint 2:
 * - affiliateUrl ahora es opcional para permitir crear fichas de producto en estado 'draft' antes de contar con un HotLink autorizado.
 * - Validación: Un producto con status 'published' requiere obligatoriamente un affiliateUrl válido para compra afiliada.
 * - Regla estricta: No inventar URLs de Hotmart ni crear productos de demostración.
 */
const products = defineCollection({
  loader: glob({ pattern: '**/*.{md,json}', base: './src/content/products' }),
  schema: z
    .object({
      title: z.string(),
      slug: z.string(),
      description: z.string(),
      category: z.string(),
      featuredImage: z.string().optional(),
      affiliateUrl: z.url().optional(),
      benefits: z.array(z.string()).default([]),
      targetAudience: z.array(z.string()).default([]),
      frequentlyAskedQuestions: z.array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      ).default([]),
      status: z.enum(['draft', 'published', 'archived']).default('draft'),
      publishedAt: z.coerce.date().optional(),
    })
    .refine(
      (data) => {
        // En estado 'published', un producto de afiliación requiere enlace de checkout/HotLink
        if (data.status === 'published' && !data.affiliateUrl) {
          return false;
        }
        return true;
      },
      {
        message: 'Los productos publicados (status: "published") requieren obligatoriamente un affiliateUrl válido.',
        path: ['affiliateUrl'],
      }
    ),
});

export const collections = {
  products,
};
