/*
 * @Author: tanka 
 * @Date: 2023-06-06 16:27:12
 * @LastEditors: tanka 
 * @LastEditTime: 2023-06-06 20:38:47
 * @FilePath: /hhh/src/core/task/init/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import PrintLog from "./printLog";
import queryTemplateList from "./queryTemplateList";
import inquiryTemplate from './inquiryTemplate';
import inquiryProjectDirName from './inquiryProjectDirName';
import downloadTemplate from './downloadTemplate'
import inquiryMetaInfo from './inquiryMetaInfo'
import generateCode from './generateCode'

export default {
  PrintLog,
  queryTemplateList,
  inquiryTemplate,
  inquiryProjectDirName,
  downloadTemplate,
  inquiryMetaInfo,
  generateCode
}