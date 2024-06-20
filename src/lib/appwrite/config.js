import { Client, Databases, Account, Avatars } from "appwrite";

const client = new Client();

export const appwriteConfig = {
    endpoint: import.meta.env.VITE_ENDPOINT,
    projectId: import.meta.env.VITE_PROJECT_ID,
    databaseId: import.meta.env.VITE_DATABASE_ID,
    userCollectionId: import.meta.env.VITE_USER_COLLECTION_ID,
    notesCollectionId: import.meta.env.VITE_COLLECTION_ID_NOTES,
  };

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId);

const databases = new Databases(client);
const account = new Account(client);
const avatars = new Avatars(client);

export { client, databases, account, avatars };