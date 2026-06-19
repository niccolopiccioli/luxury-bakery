import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(5000),
  product: z.string().optional(),
  offer: z.string().optional(),
  website: z.string().optional(),
});

export const reservationSchema = z.object({
  date: z.string().min(1),
  time: z.string().min(1),
  guests: z.coerce.number().int().min(1).max(12),
  email: z.string().email(),
  notes: z.string().max(2000).optional(),
  experience: z.string().optional(),
  website: z.string().optional(),
});

export const newsletterSchema = z.object({
  email: z.string().email(),
  website: z.string().optional(),
});

export function isHoneypotTriggered(website?: string) {
  return Boolean(website && website.length > 0);
}
