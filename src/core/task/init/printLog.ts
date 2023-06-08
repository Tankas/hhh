/*
 * @Author: tanka 
 * @Date: 2023-06-06 16:27:40
 * @LastEditors: tanka 
 * @LastEditTime: 2023-06-08 10:28:55
 * @FilePath: /hhh/src/core/task/init/printLog.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import TaskInterface from './interface/task'


import CFonts from 'cfonts';


class PrintLog implements TaskInterface {
  async runTask(globalData) {
    console.log('nobook 脚手架')
    await CFonts.say('nobook 脚手架', {
      font: 'block', // define the font face
      align: 'left', // define text alignment
      colors: ['green', 'gray'],
      background: 'transparent', // define the background color, you can also use `backgroundColor` here as key
      letterSpacing: 1, // define letter spacing
      lineHeight: 1, // define the line height
      space: true, // define if the output text should have empty lines on top and on the bottom
      maxLength: '0', // define how many character can be on one line
      env: 'node', // define the environment CFonts is being executed in
    });
  }
}

export default new PrintLog();