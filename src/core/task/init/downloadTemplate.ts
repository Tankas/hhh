
import TaskInterface from './interface/task'
import GlobalData from './globalData'


import path from 'path';
import fs from 'fs-extra'
import ora from 'ora';
import { simpleGit } from 'simple-git';

const git = simpleGit({
    baseDir: process.cwd(),
    binary: 'git',
    maxConcurrentProcesses: 6,
});


class DownloadTemplate implements TaskInterface {
  async downloadTemplate({
    templateInfo,
    projectDir,
  }) {
    
    const spinner = ora('开始下载模版...').start();
    try {
        const tmpDirPath = path.resolve(projectDir, '.nobook/tmp/init');
        console.log('临时目录', tmpDirPath);
        fs.ensureDirSync(tmpDirPath);

        await git.clone(templateInfo.ssh_url_to_repo, tmpDirPath);

        // 移除 tmpDirPath 下 .git 目录
        fs.removeSync(path.resolve(tmpDirPath, '.git'));
    } catch (e) {
        spinner.stop();
        throw e;
    }
    spinner.stop();
  }
  async runTask(globalData: GlobalData) {
    const { templateInfo, projectDir } = globalData;
    await this.downloadTemplate({
      templateInfo,
      projectDir
    })
  }
}

export default new DownloadTemplate();