import { createEnv } from "@t3-oss/env-core"
import { z } from "zod"

export const clientEnv = createEnv({
  client: {
    VITE_BACKEND_URL: z.url().default("http://localhost:3333")
  },
  clientPrefix: "VITE_",
  runtimeEnv: import.meta.env,
  emptyStringAsUndefined: true
})
