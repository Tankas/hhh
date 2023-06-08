/*
 * @Author: tanka 
 * @Date: 2023-05-30 10:55:41
 * @LastEditors: tanka 
 * @LastEditTime: 2023-06-08 16:25:55
 * @FilePath: /hhh/build.confg.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineBuildConfig } from 'unbuild'


export default defineBuildConfig({
  entries: ['src/index'],
  clean: true,
  failOnWarn: false,
  declaration: true,
  rollup: {
    inlineDependencies: true,
    // emitCJS: true,
    // cjsBridge: true,
    esbuild: {
      minify: true,
    },
  },
},
)