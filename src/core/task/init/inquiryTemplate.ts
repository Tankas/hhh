/*
 * @Author: tanka 
 * @Date: 2023-06-06 17:48:22
 * @LastEditors: tanka 
 * @LastEditTime: 2023-06-08 16:10:29
 * @FilePath: /hhh/src/core/task/init/inquiryTemplate.ts
 * @Description: 询问选中哪一个模版
 */
import TaskInterface from './interface/task'
import GlobalData from './globalData'
import inquirer from 'inquirer';


class InquiryTemplate implements TaskInterface {

  async inquiryTemplate(templateList) {
    
    const questions: any = [];
    questions.push({
        type: 'rawlist',
        name: 'projectType',
        message: '请选择工程模版：',
        choices: templateList.map((item: { type: any; description: string; }, index: any) => {
            return {
                name: `${item.type} ${item.description ? ' - ' + item.description : ''} `,
                value: item.type,
                short: item.type,
                index,
            };
        }),
    });
    const projectType = await inquirer.prompt(questions).then((answers) => answers.projectType);
    const templateInfo = templateList.filter((item) => item.type === projectType)[0];
    console.log('projectType', projectType)
    return {
      projectType,
      templateInfo
    }
  }

  async runTask(globalData: GlobalData) {
    const { templateList } = globalData;
    const { templateInfo, projectType } = await this.inquiryTemplate(templateList);
    globalData.setTemplateInfo(templateInfo);
    globalData.setProjectType(projectType);
  }
}

export default new InquiryTemplate();