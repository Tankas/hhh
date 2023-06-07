import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { init } from './core'

yargs(hideBin(process.argv))
  .command('init', '生成项目', () => {}, () => {
    init()
  })
  .command('upgrade', '升级', () => {}, () => {
    console.log('升级')
  })
  .demandCommand(1)
  .parse()

class Hs {
  getName() {
    return 'sss'
  }
}


export default Hs