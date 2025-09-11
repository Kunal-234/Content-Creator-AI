
import { defineConfig } from "drizzle-kit";


export default defineConfig({
  schema: "./utils/schema.tsx",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_8GufAYagXn0C@ep-raspy-resonance-ado6jtu8-pooler.c-2.us-east-1.aws.neon.tech/ai-content-generator?sslmode=require&channel_binding=require",
  },
});
