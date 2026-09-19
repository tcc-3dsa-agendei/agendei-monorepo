import { Logger } from "tslog"

export const logger = new Logger({
  name: "agendei",
  pretty: {
    timeZone: "local",
    template: "{{hh}}:{{MM}}:{{ss}} {{logLevelName}} [{{name}}] "
  }
})
