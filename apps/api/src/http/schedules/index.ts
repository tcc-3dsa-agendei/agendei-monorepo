import { Elysia } from "elysia"
import { createSchedule } from "@/http/schedules/create-schedule.js"
import { getAllSchedules } from "@/http/schedules/get-all-schedules.js"
import { getSchedule } from "@/http/schedules/get-schedule.js"

export const scheduleRoutes = new Elysia({ prefix: "/agendas" }).use([getAllSchedules, getSchedule, createSchedule])
