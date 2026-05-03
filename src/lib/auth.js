


import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import dns from "node:dns";

// ✅ DNS fix (optional but ভালো)
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const uri = process.env.AUTH_DB_URI;

if (!uri) {
  throw new Error("❌ Missing AUTH_DB_URI in environment variables");
}

// ✅ Mongo Client
const client = new MongoClient(uri);

// ⚠️ connect once
await client.connect();

// ✅ direct DB use (same as screenshot)
const db = client.db("qurbani-bazaar");

// ✅ better-auth config
export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    // requireEmailVerification: true, // optional
  },

  database: mongodbAdapter(db, {
    // optional config
  }),
  socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        }, 
    },
