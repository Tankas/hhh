/*
 * @Author: tanka 
 * @Date: 2023-01-05 14:43:54
 * @LastEditors: tanka 
 * @LastEditTime: 2023-01-05 14:43:59
 * @FilePath: /nb-cli/lib/utils/getPackageJson.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require('fs');
const path = require('path');

module.exports = function getPackageJson(projectPath) {
    const packagePath = path.join(projectPath, 'package.json');

    let packageJson;
    try {
        packageJson = fs.readFileSync(packagePath, 'utf-8');
    } catch (err) {
        throw new Error(`${packagePath} not exist`);
    }

    try {
        packageJson = JSON.parse(packageJson);
    } catch (err) {
        throw new Error('The package.json is malformed');
    }

    return packageJson;
};
