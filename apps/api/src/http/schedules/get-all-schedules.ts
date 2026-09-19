import { db } from "@agendei/drizzle"
import { logger } from "@agendei/logger"
import { Elysia } from "elysia"
import { sessionMiddleware } from "@/middleware/session-middleware.js"

export const getAllSchedules = new Elysia().use(sessionMiddleware).get(
  "/",
  async ({ status, session }) => {
    logger.info("Buscando agendas do usuário...", {
      id: session.user.id
    })

    const schedules = await db.query.schedule.findMany({
      where: ({ userId }, { eq }) => eq(userId, session.user.id),
      columns: {
        updatedAt: false
      }
    })

    if (schedules.length === 0) {
      logger.debug("Nenhuma agenda encontrada")
      throw status("Not Found", "Não há agendas criadas no momento")
    }

    logger.info("Agendas encontradas", {
      schedules
    })

    return schedules
  },
  {
    auth: true
  }
)
