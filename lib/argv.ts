import * as yargs from 'yargs'

export const argv = yargs
  .option('t', {
    alias: 'token',
    describe: 'firm.im api token, should specific when first run, it will be recorded into local config file: $HOME/.fir.im/config.json'
  })
  .option('apk', {
    alias: 'apkPath',
    describe: 'the absolute path of apk you want to publish to fir.im'
  })
  .option('n', {
    alias: 'name',
    describe: '应用名称',
    default: '运维宝'
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
  .option('c', {
    alias: 'changelog',
    describe: '更新日志',
    default: ''
  })
  .help('h')
  .alias('h', 'help')
  .locale('en')
  .argv
