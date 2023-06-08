/*
 * @Author: tanka 
 * @Date: 2023-06-06 15:48:46
 * @LastEditors: tanka 
 * @LastEditTime: 2023-06-08 11:38:37
 * @FilePath: /hhh/src/core/task/init.ts
 * @Description: 项目生成
 */

import task from '../task/init/index'
const { PrintLog, queryTemplateList, inquiryTemplate, inquiryProjectDirName, downloadTemplate, inquiryMetaInfo, generateCode, logSuccess } = task;
import GlobalData from '../task/init/globalData';

class Init {

  public taskQueue; // 任务队列, 同步执行
  public globalData: GlobalData;

  constructor() {
    // console.log('生成项目')
    this.taskQueue = [PrintLog, queryTemplateList, inquiryTemplate, inquiryProjectDirName, downloadTemplate, inquiryMetaInfo, generateCode, logSuccess];
    this.globalData = new GlobalData()
  }
  async run() {
    for (let task of this.taskQueue) {
      await task.runTask(this.globalData);
    }
  }
}

export default new Init();

