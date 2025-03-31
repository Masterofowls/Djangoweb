import { 
  type User, 
  type InsertUser,
  type ContactForm,
  type InsertContactForm,
  type Newsletter,
  type InsertNewsletter
} from "@shared/schema";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact form operations
  submitContactForm(form: InsertContactForm): Promise<ContactForm>;
  getContactForms(): Promise<ContactForm[]>;
  
  // Newsletter operations
  subscribeToNewsletter(email: InsertNewsletter): Promise<Newsletter>;
  getNewsletterSubscribers(): Promise<Newsletter[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactForms: Map<number, ContactForm>;
  private newsletters: Map<number, Newsletter>;
  
  private userIdCounter: number;
  private contactFormIdCounter: number;
  private newsletterIdCounter: number;

  constructor() {
    this.users = new Map();
    this.contactForms = new Map();
    this.newsletters = new Map();
    
    this.userIdCounter = 1;
    this.contactFormIdCounter = 1;
    this.newsletterIdCounter = 1;
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Contact form operations
  async submitContactForm(form: InsertContactForm): Promise<ContactForm> {
    const id = this.contactFormIdCounter++;
    const contactForm: ContactForm = { 
      ...form, 
      id, 
      createdAt: new Date() 
    };
    this.contactForms.set(id, contactForm);
    return contactForm;
  }
  
  async getContactForms(): Promise<ContactForm[]> {
    return Array.from(this.contactForms.values()).sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
  
  // Newsletter operations
  async subscribeToNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    // Check if email already exists
    const existingSubscriber = Array.from(this.newsletters.values()).find(
      (newsletter) => newsletter.email === insertNewsletter.email
    );
    
    if (existingSubscriber) {
      return existingSubscriber;
    }
    
    const id = this.newsletterIdCounter++;
    const newsletter: Newsletter = { 
      ...insertNewsletter, 
      id, 
      createdAt: new Date() 
    };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }
  
  async getNewsletterSubscribers(): Promise<Newsletter[]> {
    return Array.from(this.newsletters.values()).sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

export const storage = new MemStorage();
