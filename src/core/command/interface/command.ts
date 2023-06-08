/*
 * @Author: tanka 
 * @Date: 2023-06-08 15:42:39
 * @LastEditors: tanka 
 * @LastEditTime: 2023-06-08 15:43:13
 * @FilePath: /hhh/src/core/command/interface/command.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
interface Command {
  run: () => void;
}

export {
  Command
}
