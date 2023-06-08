/*
 * @Author: tanka 
 * @Date: 2023-01-04 11:28:43
 * @LastEditors: tanka 
 * @LastEditTime: 2023-06-07 17:29:43
 * @FilePath: /nb-cli/lib/utils/templateRender.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { ejs } from 'consolidate';
import { notTextRegex } from './fileType'
import kebabCase from 'lodash/kebabCase';

const ejsRender = ejs.render;


 
function ejsRenderPromise(name, contents, metaInfo) {
return new Promise((resolve, reject) => {
         const text = contents.toString();
         ejsRender(text, metaInfo, (err, res) => {
             // 渲染出错时，吃掉错误
             if (err) {
                 return resolve(text);
             }
             return resolve(res);
         });
     });
 }
 
 export const templateRenderer = (metaInfo) => {
    const willReplaceVar = {};
    const willReplaceReg = Object.keys(metaInfo)
        .map((mi) => {
            const key = `${kebabCase(mi)}-will-replace-by-bisheng`;
            willReplaceVar[key] = metaInfo[mi];
            return key;
        })
        .join('|');

    return (files, metalsmith, done) => {
        console.log('所有文件', files)
        Promise.all(
            // ! 过滤掉所有无法处理的文件（无法使用ejs处理的文件）
            Object.keys(files)
                .filter((name) => !notTextRegex.test(name))
                .map((name) =>
                    ejsRenderPromise(name, files[name].contents, metaInfo).then((res) => {
                        let content = res;
                        if (willReplaceReg.length > 0) {
                            content = content.replace(new RegExp('(' + willReplaceReg + ')', 'g'), (_, a) => {
                                return willReplaceVar[a];
                            });
                        }
                        files[name].contents = Buffer.from(content);
                    }),
                ),
        )
            .then(() => done())
            .catch((err) => done(err));
    };
 }
 
 