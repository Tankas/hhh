/*
 * @Author: tanka 
 * @Date: 2023-06-06 20:18:03
 * @LastEditors: tanka 
 * @LastEditTime: 2023-06-06 20:19:41
 * @FilePath: /hhh/src/core/task/init/meta.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  questions: [
    {
        type: 'input',
        name: 'packageName',
        message: 'please 输入package name（英文） ：',
        validate(val) {
            if ( !val && /^@nobook/.test(val)) {
                return '不用设置私有命名空间（已默认 @nobook）';
            }
            return true;
        },
    },
    {
        type: 'input',
        name: 'packageTitle',
        message: '请输入package title（中文）：',
    },
],
}