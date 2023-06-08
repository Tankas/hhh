/*
 * @Author: tanka 
 * @Date: 2023-06-07 17:44:15
 * @LastEditors: tanka 
 * @LastEditTime: 2023-06-08 16:10:45
 * @FilePath: /hhh/src/core/utils/templateRender.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ejs } from 'consolidate';
import { notTextRegex } from './fileType'

const ejsRender = ejs.render;

const ejsRenderPromise = ({
  metaInfo,
  contents
}) => {
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
  return (files, metalsmith, done) => {
    Promise.all(
      // ! 过滤掉所有无法处理的文件（无法使用ejs处理的文件）
      Object.keys(files)
      .filter((name) => !notTextRegex.test(name))
      .map((name) =>
          ejsRenderPromise({
            metaInfo,
            contents: files[name].contents
          }).then((res) => {
            let content: any = res;
            files[name].contents = Buffer.from(content);
          }),
      ),
    )
    .then(() => done())
    .catch((err) => done(err));
  };


}
