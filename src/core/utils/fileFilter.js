/*
 * @Author: tanka 
 * @Date: 2023-01-04 11:30:22
 * @LastEditors: tanka 
 * @LastEditTime: 2023-01-04 11:30:32
 * @FilePath: /nb-cli/lib/utils/fileFilter.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const match = require('micromatch');
const isFunction = require('lodash/isFunction');
const isObject = require('lodash/isObject');
const isBoolean = require('lodash/isBoolean');

// 需要过滤的文件列表
function needFilterList(meta, projectMetaInfo) {
    let filterPatterns = [];
    if (meta && isObject(meta.fileFilters)) {
        filterPatterns = Object.keys(meta.fileFilters).filter((item) => {
            let filterCB = meta.fileFilters[item];
            if (isFunction(filterCB)) {
                return filterCB(projectMetaInfo);
            }
            if (isBoolean(filterCB)) {
                return filterCB;
            }
            return false;
        });
    } else if (Array.isArray(meta.fileFilters)) {
        filterPatterns = [...meta.fileFilters];
    }
    return filterPatterns;
}

function fileFilter(meta, projectMetaInfo) {
    const globs = needFilterList(meta, projectMetaInfo);

    return (files, metalsmith, done) => {
        if (!globs.length) {
            done();
            return;
        }

        match(Object.keys(files), globs, { dot: true }).forEach((name) => {
            delete files[name];
        });
        done();
    };
}

module.exports = fileFilter;
module.exports.needFilterList = needFilterList;
