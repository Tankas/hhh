/*
 * @Author: tanka 
 * @Date: 2023-06-06 17:35:04
 * @LastEditors: tanka 
 * @LastEditTime: 2023-06-08 16:40:32
 * @FilePath: /hhh/src/core/task/init/globalData.ts
 * @Description: 多个任务共享数据流
 */

import { TemplateItem } from './queryTemplateList'


class GlobalData {
  public templateList: TemplateItem[]; // 模版列表
  public projectDir; // 项目目录
  public templateInfo; // 模版信息
  public projectMetaInfo; // 项目meta信息
  public projectType; // 项目类型
  constructor() {
    this.templateList = [];
    this.projectDir = '';
    this.templateInfo = null;
    this.projectMetaInfo = null;
    this.projectType = null;
  }
  setTemplateList(templateList: TemplateItem[]) {
    this.templateList = templateList;
  }
  setProjectDir(projectDir) {
    this.projectDir = projectDir;
  }
  setTemplateInfo(templateInfo) {
    this.templateInfo = templateInfo;
  }
  setProjectMetaInfo(projectMetaInfo) {
    this.projectMetaInfo = projectMetaInfo;
  }
  setProjectType(projectType) {
    this.projectType = projectType;
  }
}

export default GlobalData