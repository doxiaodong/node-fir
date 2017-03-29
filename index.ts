#! /usr/bin/env node

import * as fs from 'fs'
import * as chalk from 'chalk'
import './lib/polyfill'

import { argv } from './lib/argv'
import tokenStore from './lib/token'
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
  tokenStore.init(argv.t)

  const data = await getUploadCert()

  const binary = data.cert.binary
  const body: IUploadBody = {
    key: binary.key,
    token: binary.token,
    file: fs.createReadStream(argv.p),
    'x:name': argv.n,
    'x:version': argv.v,
    'x:build': argv.b,
    'x:changelog': argv.c
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
