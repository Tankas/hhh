/*
 * @Author: tanka 
 * @Date: 2023-01-05 14:42:39
 * @LastEditors: tanka 
 * @LastEditTime: 2023-01-05 14:42:44
 * @FilePath: /nb-cli/lib/utils/Logger.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const winston = require('winston');

class Logger {
    constructor() {
        this.logger = winston.createLogger({
            transports: [new winston.transports.Console()],
            format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
        });
    }

    info(...args) {
        this.logger.info(...args);
    }

    warn(...args) {
        this.logger.warn(...args);
    }

    error(...args) {
        this.logger.error(...args);
    }
}

module.exports = new Logger();
