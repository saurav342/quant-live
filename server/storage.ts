import { type WaitlistEmail, type InsertWaitlistEmail } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  addWaitlistEmail(email: InsertWaitlistEmail): Promise<WaitlistEmail>;
  getWaitlistEmailByEmail(email: string): Promise<WaitlistEmail | undefined>;
}

export class MemStorage implements IStorage {
  private waitlistEmails: Map<string, WaitlistEmail>;

  constructor() {
    this.waitlistEmails = new Map();
  }

  async addWaitlistEmail(insertEmail: InsertWaitlistEmail): Promise<WaitlistEmail> {
    const existing = await this.getWaitlistEmailByEmail(insertEmail.email);
    if (existing) {
      throw new Error("Email already exists in waitlist");
    }

    const id = randomUUID();
    const waitlistEmail: WaitlistEmail = {
      id,
      email: insertEmail.email,
      createdAt: new Date(),
    };
    this.waitlistEmails.set(id, waitlistEmail);
    return waitlistEmail;
  }

  async getWaitlistEmailByEmail(email: string): Promise<WaitlistEmail | undefined> {
    return Array.from(this.waitlistEmails.values()).find(
      (entry) => entry.email === email,
    );
  }
}

export const storage = new MemStorage();
