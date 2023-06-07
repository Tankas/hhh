/*
 * @Author: tanka 
 * @Date: 2023-06-06 19:07:16
 * @LastEditors: tanka 
 * @LastEditTime: 2023-06-06 19:27:55
 * @FilePath: /hhh/src/core/task/init/inquiryProjectDirName.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import TaskInterface from './interface/task'
import GlobalData from './globalData'
import inquirer from 'inquirer';

import path from 'path';
import fs from 'fs-extra'


class InquiryProjectDirName implements TaskInterface{
  // 询问项目目录
  async inquiryProjectDirName() {
    const projectDirName = await inquirer
        .prompt([
            {
                type: 'list',
                name: 'isCurrent',
                message: `是否在当前目录（${process.cwd()}）初始化模版？`,
                default: false, // 不新建，直接初始化
                choices: [
                    {
                        name: `是，在当前文件夹中初始化模版（会清除其他文件）`,
                        value: true,
                    },
                    {
                        name: '否，新建文件夹，在新文件夹中初始化模版',
                        value: false,
                    },
                ],
            },
            {
                type: 'input',
                name: 'projectDirName',
                message: '请输入目录名：',
                when(answers) {
                    return !answers.isCurrent;
                },
                validate(val) {
                    if (!val) {
                        return '目录名不能为空';
                    }
                    const filePath = path.resolve(process.cwd(), val);
                    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
                        return '目录名已经存在';
                    }
                    return true;
                },
            },
        ])
        .then((answers) => {
            if (answers.isCurrent) {
                fs.emptyDirSync(path.resolve(process.cwd(), './'));
                return './';
            }
            return answers.projectDirName;
        });
    const projectDir = path.resolve(process.cwd(), projectDirName);
    return projectDir
  }

  async runTask(globalData: GlobalData) {
    const projectDir = await this.inquiryProjectDirName();
    globalData.setProjectDir(projectDir);
  }
}

export default new InquiryProjectDirName()