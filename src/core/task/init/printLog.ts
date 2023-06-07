/*
 * @Author: tanka 
 * @Date: 2023-06-06 16:27:40
 * @LastEditors: tanka 
 * @LastEditTime: 2023-06-06 17:42:31
 * @FilePath: /hhh/src/core/task/init/printLog.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import TaskInterface from './interface/task'

class PrintLog implements TaskInterface {
  async runTask(globalData) {
    console.log('nobook 脚手架')
  }
}

export default new PrintLog();