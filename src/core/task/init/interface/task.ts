/*
 * @Author: tanka 
 * @Date: 2023-06-06 17:03:35
 * @LastEditors: tanka 
 * @LastEditTime: 2023-06-06 17:42:51
 * @FilePath: /hhh/src/core/task/init/interface/task.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import GlobalData from '../globalData'

export default interface Task {
  runTask: (globalData: GlobalData) => void;
}