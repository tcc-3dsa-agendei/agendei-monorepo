import { createEnv } from "@t3-oss/env-core"
import { config } from "dotenv"
import { z } from "zod"

config({
  quiet: true,
  path: "../../apps/web/.env"
})

export const clientEnv = createEnv({
  client: {
    VITE_BACKEND_URL: z.url().default("http://localhost:3333")
  },
  clientPrefix: "VITE_",
  runtimeEnv: process.env,
  emptyStringAsUndefined: true
})
