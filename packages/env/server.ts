import { createEnv } from "@t3-oss/env-core"
import { config } from "dotenv"
import { z } from "zod"

config({
  quiet: true,
  path: "../../apps/api/.env"
})

export const serverEnv = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
    BETTER_AUTH_URL: z.url(),
    BETTER_AUTH_SECRET: z.string().min(32),
    DATABASE_URL: z.string().endsWith("sqlite"),
    FRONTEND_URL: z.url(),
    PORT: z.coerce.number()
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true
})
