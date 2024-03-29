/*
 * @Author: tanka 
 * @Date: 2023-06-06 16:59:57
 * @LastEditors: tanka 
 * @LastEditTime: 2023-06-08 16:49:35
 * @FilePath: /hhh/src/core/task/init/queryTemplateList.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import TaskInterface from './interface/task'
import GlobalData from './globalData'

import axios from 'axios';
import ora from 'ora';

export type TemplateItem =  {
  id: number; // 项目id
  name: string; // 项目名
  type: string; // 项目类型
  description: string; // 项目描述
  path: string; // 项目相对路径
  ssh_url_to_repo: string; // 仓库地址
}


class QueryTemplateList implements TaskInterface {

  translateTemplateData(item: any) : TemplateItem {
    const type = item.name.replace(/^\s+/, '');
    return {
      id: item.id,
      name: item.name,
      description: item.description,
      path: item.path_with_namespace,
      ssh_url_to_repo: item.ssh_url_to_repo,
      type,
    };
  }
  /**
   * 获取指定仓库下所有子项目的列表
   * @param url gitlab 仓库地址
   * @returns 
   */
  async getTemplateList(url: string) : Promise<TemplateItem[]> {
    const spinner = ora('加载远程仓库模版...').start();
    //请求gitlab project list的接口
    const res = await axios.get(url);
    spinner.stop();
    return res.data.map(this.translateTemplateData);
  }

  async runTask(globalData: GlobalData) {
    const GITLAB_PROJECTS_URL = 'https://git.nobook.com/api/v4/groups/225/projects';
    const templateList = await this.getTemplateList(GITLAB_PROJECTS_URL);
    globalData.setTemplateList(templateList);
    return templateList
  }

}

export default new QueryTemplateList();