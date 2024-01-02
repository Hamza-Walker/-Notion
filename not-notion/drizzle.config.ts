import type { Config } from "drizzle-kit";
import * as dotenv from 'dotenv';

dotenv.config({
  path: '.env.local', // Ensure the correct path to your .env.local file
});

const config: Config = {
  driver: 'pg',
  schema: "./src/lib/db/schema.ts",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
    // Add other necessary properties if required, such as host, database, user, password, etc.
    // For example:
    // host: process.env.DB_HOST!,
    // database: process.env.DB_NAME!,
    // user: process.env.DB_USER!,
    // password: process.env.DB_PASSWORD!,
  },
};

export default config;


// drizzle.config.ts does not have access to the .env file if its in the src directory !
// soloution is to get the following package npm instal dotenv 
// make sure to add the path to the schema file relative to this one 