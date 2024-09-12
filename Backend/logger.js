// import winston from "winston";
// const { combine, timestamp, printf } = winston.format;
// import chalk from "chalk";

// const MAX_LOG_LENGTH = 10000;

// const logFormat = printf(({ level, message, timestamp, ...context }) => {
//   const coloredLevel = chalk.keyword(
//     level === "error"
//       ? "red"
//       : level === "warning"
//       ? "yellow"
//       : level === "info"
//       ? "blue"
//       : "magenta"
//   )(level.toUpperCase());

//   let logMessage = "";
//   if (message instanceof Error) {
//     logMessage = `${message.message}\n${message.stack}`;
//   } else if (typeof message === "string") {
//     logMessage = message;
//   } else {
//     logMessage = JSON.stringify(message, null, 2);
//   }

//   if (logMessage.length > MAX_LOG_LENGTH) {
//     logMessage = logMessage.slice(0, MAX_LOG_LENGTH) + "...";
//   }

//   let metaMessage = context?.meta;
//   if (metaMessage instanceof Error) {
//     metaMessage = `${metaMessage.message}\n${metaMessage.stack}`;
//   } else {
//     metaMessage = metaMessage
//       ? typeof metaMessage === "string"
//         ? metaMessage
//         : JSON.stringify(metaMessage, null, 2)
//       : "";
//   }

//   if (metaMessage.length > MAX_LOG_LENGTH) {
//     metaMessage = metaMessage.slice(0, MAX_LOG_LENGTH) + "...";
//   }

//   return `${timestamp} [${coloredLevel}]: ${logMessage} ${metaMessage}`;
// });

// const logLevels = {
//   error: 0,
//   warning: 1,
//   info: 2,
//   network: 3,
// };

// winston.addColors({
//   error: "red",
//   warning: "yellow",
//   info: "blue",
//   network: "magenta",
// });

// export const logger = winston.createLogger({
//   levels: logLevels,
//   format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), logFormat),
//   transports: [
//     new winston.transports.Console(),
//     new winston.transports.File({ filename: "error.log", level: "error" }),
//     new winston.transports.File({ filename: "combined.log" }),
//   ],
// });

// // Adding custom logging methods for each log level
// Object.keys(logLevels).forEach((level) => {
//   logger[level] = (message, meta) => {
//     logger.log({ level, message, meta });
//   };
// });

import winston from "winston";

export const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(), // Log to the console
    new winston.transports.File({ filename: "combined.log" }), // Log to a file
  ],
});
