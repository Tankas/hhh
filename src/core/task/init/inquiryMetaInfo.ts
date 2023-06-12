/*
 * @Author: tanka 
 * @Date: 2023-06-06 19:42:00
 * @LastEditors: tanka 
 * @LastEditTime: 2023-06-09 11:06:34
 * @FilePath: /hhh/src/core/task/init/inquiryMetaInfo.ts
 * @Description: 询问项目元信息
 */
import TaskInterface from './interface/task'
import GlobalData from './globalData'
import path from 'path';
import inquirer from 'inquirer';
// esmodule 里面 使用 common.js
import { createRequire } from 'module'
const require = createRequire(import.meta.url);


class inquiryMetaInfo implements TaskInterface{


  async inquiryMetaInfo({
    projectDirName,
  }) {

  //获取模版相关的问题
  const templateMeta = require(path.resolve(
      path.resolve(process.cwd(), projectDirName, '.nobook/tmp/init'),
      'meta.js',
  ));
  const { questions } = templateMeta

  if (!questions) {
    console.log('请在根目录配置 meta.js');
    return
  }

  if (Array.isArray(questions)) {
    questions.forEach((item) => {
      if (['name', 'packageName', 'projectName'].includes(item.name)) {
        item.default = item.default || projectDirName;
      }
    });
  } 
  //询问模版相关的问题
  const projectMetaInfo = await inquirer.prompt(questions).then((answers) => answers);
  return projectMetaInfo
}

  async runTask(globalData: GlobalData) {
    const { projectDir } = globalData;
    const projectMetaInfo = await this.inquiryMetaInfo({
      projectDirName: projectDir
    });
    globalData.setProjectMetaInfo(projectMetaInfo);
  }
}


export default new inquiryMetaInfo();