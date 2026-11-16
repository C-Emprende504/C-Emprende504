import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/**
 * Esquema tipado para la colección de productos de afiliados (Hotmart).
 * Cumple con los requerimientos de la Fase 1:
 * - Define la estructura para futuros infoproductos sin incluir productos reales ni ficticios.
 * - Soporta metadatos de persuasión, preguntas frecuentes y enlaces de afiliación.
 */
const products = defineCollection({
  loader: glob({ pattern: '**/*.{md,json}', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    category: z.string(),
    featuredImage: z.string().optional(),
    affiliateUrl: z.url(),
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
  }),
});

export const collections = {
  products,
};
