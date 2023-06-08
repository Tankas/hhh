/*
 * @Author: tanka 
 * @Date: 2023-05-30 10:57:10
 * @LastEditors: tanka 
 * @LastEditTime: 2023-06-08 16:20:48
 * @FilePath: /hhh/src/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { commandManager } from './core'

yargs(hideBin(process.argv))
  .command('init', '生成项目', () => {}, () => {
    commandManager.runInit();
  })
  .command('upgrade', '升级', () => {}, () => {
    commandManager.runUpgrade();
  })
  .demandCommand(1)
  .parse()

class Hs {
  getName() {
    return 'hs'
  }
}


export default Hs