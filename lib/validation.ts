import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  country: z.string().min(2, "Please enter your country"),
  product: z.string().optional(),
  quantity: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const quoteFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  company: z.string().min(2, "Company name is required"),
  country: z.string().min(2, "Country is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  product: z.string().min(2, "Product is required"),
  quantity: z.string().optional(),
  unit: z.string().optional(),
  destination: z.string().optional(),
  packaging: z.string().optional(),
  expectedDelivery: z.string().optional(),
  message: z.string().optional(),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;
