import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactFormSchema, insertNewsletterSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const validatedData = insertContactFormSchema.parse(req.body);
      
      // Submit contact form
      const contactForm = await storage.submitContactForm(validatedData);
      
      return res.status(201).json({
        message: "Contact form submitted successfully",
        data: contactForm
      });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({
          message: fromZodError(error).message || "Invalid contact form data"
        });
      }
      return res.status(500).json({ message: "Internal server error" });
    }
  });
  
  // Get all contact form submissions - would normally be protected
  app.get("/api/contact", async (req: Request, res: Response) => {
    try {
      const contactForms = await storage.getContactForms();
      return res.status(200).json(contactForms);
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  });
  
  // Newsletter subscription
  app.post("/api/newsletter", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const validatedData = insertNewsletterSchema.parse(req.body);
      
      // Subscribe to newsletter
      const newsletter = await storage.subscribeToNewsletter(validatedData);
      
      return res.status(201).json({
        message: "Subscribed to newsletter successfully",
        data: newsletter
      });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({
          message: fromZodError(error).message || "Invalid email"
        });
      }
      return res.status(500).json({ message: "Internal server error" });
    }
  });
  
  // Get all newsletter subscribers - would normally be protected
  app.get("/api/newsletter", async (req: Request, res: Response) => {
    try {
      const subscribers = await storage.getNewsletterSubscribers();
      return res.status(200).json(subscribers);
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
