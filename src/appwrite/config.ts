import { Client, Account, Storage, Databases } from 'appwrite';

// Define types for environment variables
const appwriteUrl: string = import.meta.env.VITE_APPWRITE_URL as string;
const appwriteProjectId: string = import.meta.env.VITE_APPWRITE_PROJECT_ID as string;

// Initialize Appwrite Client
const client = new Client()
  .setEndpoint(appwriteUrl)
  .setProject(appwriteProjectId);

// Initialize Appwrite services
const account = new Account(client);
const storage = new Storage(client);
const databases = new Databases(client);

export default { client, account, storage, databases };
