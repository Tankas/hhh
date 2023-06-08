/*
 * @Author: tanka 
 * @Date: 2023-06-08 11:23:10
 * @LastEditors: tanka 
 * @LastEditTime: 2023-06-08 11:36:29
 * @FilePath: /hhh/src/core/utils/logger.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import winston from 'winston';
import chalk from 'chalk';

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.printf(({ level, message }) => {
    let coloredMessage;
    switch (level) {
      case 'info':
        coloredMessage = chalk.green(message); // 设置为绿色
        break;
      case 'error':
        coloredMessage = chalk.red(message); // 设置为红色
        break;
      default:
        coloredMessage = message;
        break;
    }
    return `${level}: ${coloredMessage}`;
  }),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.Console()
  ]
});
