/*
 * @Author: tanka 
 * @Date: 2023-06-06 15:53:03
 * @LastEditors: tanka 
 * @LastEditTime: 2023-06-08 15:44:23
 * @FilePath: /hhh/src/core/task/upgrade.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Command } from './interface/command'

class Upgrade implements Command{
  constructor() {
  }

  run() {
    console.log('cli 升级')
  }
}

export default new Upgrade();