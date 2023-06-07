/*
 * @Author: tanka 
 * @Date: 2023-06-06 20:20:27
 * @LastEditors: tanka 
 * @LastEditTime: 2023-06-06 20:22:41
 * @FilePath: /hhh/src/core/task/init/test.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const init = async () => {
  const meta = await  import('./meta.js');
  console.log(meta.default.questions);
}

init()