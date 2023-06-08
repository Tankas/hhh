import TaskInterface from './interface/task'
import CFonts from 'cfonts';

class PrintLog implements TaskInterface {
  async runTask() {
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