import { format } from "express/lib/response";
import winston from "winston";

const logger = winston.createLogger({
    level:"silly",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston,format,ms(),
        winston.format.json()
    ),
    transports: [
        new winston.transport.console()
    ],
});

test("create new logger", () => {
    logger.log("info", "hello logger");
});