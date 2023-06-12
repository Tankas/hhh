/*
 * @Author: tanka 
 * @Date: 2023-06-06 15:48:18
 * @LastEditors: tanka 
 * @LastEditTime: 2023-06-12 20:23:57
 * @FilePath: /hhh/src/core/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import initInstance from './command/init';

import upgradeInstance from './command/upgrade';

import { Command } from './command/interface/command'

class commandManage {
  private initInstance;
  private upgradeInstance;
  constructor(initInstance: Command, upgradeInstance: Command) {
    this.initInstance = initInstance;
    this.upgradeInstance = upgradeInstance;
  }

  runInit() {
    this.initInstance.run();
  }

  runUpgrade() {
    this.upgradeInstance.run();
  }
}

const commandManager = new commandManage(initInstance, upgradeInstance);

export {
  commandManager
}

