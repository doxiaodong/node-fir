#! /usr/bin/env node

import * as fs from 'fs'
import * as chalk from 'chalk'
import './lib/polyfill'

import { argv } from './lib/argv'
import configStore from './lib/config'
import {
  getUploadCert,
  upload,
  IUploadBody
} from './lib/api'

async function main() {
  if (!argv.p) {
    console.log('run `fir -h` for help')
    throw new Error('file path is necessary')
  }
  configStore.init(argv.c)

  const data = await getUploadCert()

  const binary = data.cert.binary
  const body: IUploadBody = {
    key: binary.key,
    token: binary.token,
    file: fs.createReadStream(argv.p),
    'x:name': argv.n || configStore.config.name,
    'x:version': argv.v,
    'x:build': argv.b,
    'x:changelog': argv.changelog
  }
  const uploadRes = await upload(binary.upload_url, body)
  if (uploadRes.is_completed) {
    console.log(chalk.green('success!!!'))
  }
}

try {
  main()
    .catch((err) => {
      console.error(chalk.red(err))
    })
} catch (error) {
  console.error(chalk.red(error))
}
