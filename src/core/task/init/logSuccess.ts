/*
 * @Author: tanka 
 * @Date: 2023-06-08 11:34:07
 * @LastEditors: tanka 
 * @LastEditTime: 2023-06-08 11:38:13
 * @FilePath: /hhh/src/core/task/init/logSuccess.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import TaskInterface from './interface/task'
import { logger } from '../../utils/logger'

class logSuccess implements TaskInterface {
  runTask() {
    logger.info('安装成功~~~')
  }
}

export default new logSuccess()