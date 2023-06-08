/*
 * @Author: tanka 
 * @Date: 2023-06-06 20:27:48
 * @LastEditors: tanka 
 * @LastEditTime: 2023-06-07 17:21:15
 * @FilePath: /hhh/src/core/task/init/generateCode.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import TaskInterface from './interface/task'
import GlobalData from './globalData'

import Metalsmith from 'metalsmith'
import path from 'path';
import ora from 'ora';
import fs from 'fs-extra'
import { templateRenderer } from '../../utils/templateRender'



class generateCode implements TaskInterface{
  // 根据模版生成项目
  async generateCode({
    projectDir,
    projectMetaInfo
  }) {

    // 模版库的路径
    const templatePath = path.resolve('./', projectDir);
    
    const initTemplateDirPath = path.resolve(templatePath, '.nobook/tmp/init');
    
    const spinner = ora('正在生成工程中...\n');
    spinner.start();
    console.log('projectDir', projectDir);
    console.log('projectMetaInfo', projectMetaInfo)
    
    // 移动模版文件至项目目录
    await new Promise((resolve) => {
        
      Metalsmith(templatePath)
          .source(initTemplateDirPath)
          .destination('./')
          .clean(false)
          .use(
              // 渲染模版
              templateRenderer({
                  ...projectMetaInfo,
                  projectDir,
              }),
          )
          .build((err) => {
              spinner.stop();
              //模版渲染失败
              if (err) {
                  console.error('模版渲染失败')
              }
              //
              console.log('清空临时文件夹', initTemplateDirPath)
              fs.emptyDirSync(initTemplateDirPath);
              resolve(true);
          });
    });
  }

  async runTask(globalData: GlobalData) {
    const {
      projectDir,
      projectMetaInfo
    } = globalData
    await this.generateCode({
      projectDir,
      projectMetaInfo
    });
  }
}

export default new generateCode()