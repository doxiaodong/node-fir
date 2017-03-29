import * as yargs from 'yargs'

export const argv = yargs
  .option('c', {
    alias: 'config',
    describe: 'config path, default is: $HOME/.fir/config.json'
  })
  .option('p', {
    alias: 'apkPath',
    describe: 'the absolute path of apk you want to publish to fir.im'
  })
  .option('n', {
    alias: 'name',
    describe: '应用名称'
  })
  .option('v', {
    alias: 'version',
    describe: '版本号',
    default: '1.0'
  })
  .option('b', {
    alias: 'build',
    describe: 'Build 号',
    default: '1'
  })
  .option('changelog', {
    alias: 'changelog',
    describe: '更新日志',
    default: ''
  })
  .help('h')
  .alias('h', 'help')
  .locale('en')
  .argv
