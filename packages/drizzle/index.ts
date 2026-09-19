import { serverEnv } from "@agendei/env/server"
import Database from "better-sqlite3"
import { drizzle } from "drizzle-orm/better-sqlite3"
import * as schema from "./schema/index.js"

const client = new Database(serverEnv.DATABASE_URL)

export const db = drizzle({ client, schema })
