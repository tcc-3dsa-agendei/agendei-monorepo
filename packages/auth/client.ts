import { clientEnv } from "@agendei/env/client"
import { inferAdditionalFields } from "better-auth/client/plugins"
import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
  baseURL: clientEnv.VITE_BACKEND_URL,
  plugins: [
    inferAdditionalFields({
      user: {
        cnpj: {
          type: "string"
        }
      }
    })
  ]
})
