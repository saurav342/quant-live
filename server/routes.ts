import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistEmailSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/waitlist", async (req, res) => {
    try {
      const result = insertWaitlistEmailSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({ 
          error: validationError.message 
        });
      }

      const waitlistEmail = await storage.addWaitlistEmail(result.data);
      return res.status(201).json(waitlistEmail);
    } catch (error: any) {
      if (error.message === "Email already exists in waitlist") {
        return res.status(409).json({ 
          error: "This email is already registered" 
        });
      }
      return res.status(500).json({ 
        error: "Failed to add email to waitlist" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
