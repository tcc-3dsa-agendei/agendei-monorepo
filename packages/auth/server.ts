import { randomUUIDv7 } from "node:crypto"
import { db } from "@agendei/drizzle"
import * as schema from "@agendei/drizzle/schema"
import { serverEnv } from "@agendei/env/server"
import { logger } from "@agendei/logger"
import { isValidCnpj } from "@brazilian-utils/brazilian-utils"
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { betterAuth } from "better-auth/minimal"
import { z } from "zod"

export const auth = betterAuth({
  appName: "Agendei",
  baseURL: serverEnv.BETTER_AUTH_URL,
  secret: serverEnv.BETTER_AUTH_SECRET,
  trustedOrigins: [serverEnv.FRONTEND_URL],
  database: drizzleAdapter(db, {
    provider: "sqlite",
    debugLogs: serverEnv.NODE_ENV === "development",
    transaction: true,
    usePlural: false,
    schema
  }),
  logger: {
    log(level, message, ...args) {
      switch (level) {
        case "debug":
          logger.debug(message, {
            ...args
          })
          break

        case "error":
          logger.error(message, {
            ...args
          })
          break

        case "warn":
          logger.warn(message, {
            ...args
          })
          break

        default:
          logger.info(message, {
            ...args
          })
          break
      }
    }
  },
  databaseHooks: {
    user: {
      create: {
        after: async (user, context) => {
          logger.info("Usuário criado com sucesso", {
            id: user.id,
            name: user.name,
            email: user.email,
            cnpj: context?.body.cnpj,
            createdAt: new Date(user.createdAt).getUTCDate()
          })
        }
      }
    }
  },
  advanced: {
    database: {
      generateId: () => randomUUIDv7(),
      joins: true,
      validateSchema: true
    }
  },
  user: {
    additionalFields: {
      cnpj: {
        type: "string",
        unique: true,
        validator: {
          input: z.string("Apenas texto é aceito").refine(isValidCnpj, "Formato de CNPJ inválido")
        }
      }
    }
  },
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
    maxPasswordLength: 128,
    autoSignIn: true
  }
})
