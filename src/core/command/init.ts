/*
 * @Author: tanka 
 * @Date: 2023-06-06 15:48:46
 * @LastEditors: tanka 
 * @LastEditTime: 2023-06-08 16:22:48
 * @FilePath: /hhh/src/core/task/init.ts
 * @Description: 项目生成
 */

import { Command } from './interface/command'

import {
  PrintLog,
  queryTemplateList,
  inquiryTemplate,
  inquiryProjectDirName,
  downloadTemplate,
  inquiryMetaInfo,
  generateCode,
  logSuccess
} from '../task/init/index'
import GlobalData from '../task/init/globalData';

class Init implements Command {

  public taskQueue; // 任务队列, 同步执行
  public globalData: GlobalData; // 多个任务共享的全局对象

  constructor() {
    this.taskQueue = [PrintLog, queryTemplateList, inquiryTemplate, inquiryProjectDirName, downloadTemplate, inquiryMetaInfo, generateCode, logSuccess];
    this.globalData = new GlobalData();
  }
  async run() {
    for (let task of this.taskQueue) {
      await task.runTask(this.globalData);
    }
  }
}

export default new Init();

