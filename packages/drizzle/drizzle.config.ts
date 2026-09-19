import { serverEnv } from "@agendei/env/server"
import type { Config } from "drizzle-kit"

export default {
  dialect: "sqlite",
  casing: "snake_case",
  out: "./migrations",
  schema: "./schema/**",
  migrations: {
    prefix: "index"
  },
  dbCredentials: {
    url: serverEnv.DATABASE_URL
  }
} satisfies Config
