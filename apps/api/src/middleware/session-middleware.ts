import { auth } from "@agendei/auth/server"
import { logger } from "@agendei/logger"
import { Elysia } from "elysia"

export const sessionMiddleware = new Elysia().macro({
  auth: {
    resolve: async ({ request, status }) => {
      const session = await auth.api.getSession({
        headers: request.headers
      })

      if (!session) {
        logger.error("Sessão não encontrada. Acesso negado")
        throw status("Unauthorized", "Acesso negado")
      }

      return { session }
    }
  }
})
