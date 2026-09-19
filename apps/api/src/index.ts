import { auth } from "@agendei/auth/server"
import { serverEnv } from "@agendei/env/server"
import { logger } from "@agendei/logger"
import { cors } from "@elysia/cors"
import { node } from "@elysia/node"
import { Elysia } from "elysia"
import { scheduleRoutes } from "@/http/schedules/index.js"

const app = new Elysia({
  adapter: node()
})

app.use(
  cors({
    origin: serverEnv.FRONTEND_URL,
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    methods: ["GET", "POST", "DELETE", "PATCH", "PUT"]
  })
)

app.mount(auth.handler)
app.use(scheduleRoutes)

app.get("/ping", () => "Pong")

app.listen(
  {
    port: serverEnv.PORT,
    hostname: "0.0.0.0"
  },
  (server) => {
    logger.info("Servidor iniciado", {
      url: server.url.origin,
      port: server.port,
      environment: serverEnv.NODE_ENV
    })
  }
)
